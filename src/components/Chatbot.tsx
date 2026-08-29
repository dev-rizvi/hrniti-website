'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X, Send, Bot, User, ChevronDown, Sparkles, Mic, MicOff, Trash2, ThumbsUp, ThumbsDown, Sun, Moon, Star } from 'lucide-react';
import { submitContactInquiryAction } from '@/app/contact-us/actions';
import { askGeminiAction } from '@/app/actions/geminiAction';
import confetti from 'canvas-confetti';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  link?: { text: string; href: string };
  timestamp?: string;
  feedback?: 'like' | 'dislike';
  isRating?: boolean;
  selectedRating?: number;
}

const featuresList = [
  // Core HR
  { keywords: ['hrms', 'software', 'platform'], title: 'HRMS Software', href: '/hrms-software', desc: 'Complete HR management software for your business.' },
  { keywords: ['employee management', 'manage employee', 'workforce'], title: 'Employee Management', href: '/employee-management', desc: 'Manage your workforce efficiently.' },
  { keywords: ['ess', 'self service', 'portal', 'employee self service'], title: 'Employee Self Service', href: '/employee-self-service', desc: 'Empower employees with self-service tools.' },
  { keywords: ['core hr', 'record', 'database'], title: 'Core HR', href: '/corehr', desc: 'Single source of truth for your people data.' },
  { keywords: ['org chart', 'structure', 'planning', 'organization'], title: 'Org Chart & Planning', href: '/org-chart', desc: 'Visualise and plan your organisation.' },

  // Payroll & Operations
  { keywords: ['payroll', 'salary', 'payslip', 'pay', 'pf', 'esi', 'tax'], title: 'Payroll Software', href: '/payroll-software', desc: 'Automate salary calculation, statutory tax & payslips.' },
  { keywords: ['leave', 'holiday', 'vacation', 'pto', 'time off'], title: 'Leave Management', href: '/leave-management', desc: 'Custom leave policies, approvals and tracking.' },
  { keywords: ['attendance', 'biometric', 'geo', 'geofencing', 'clock in', 'clock out'], title: 'Attendance Management', href: '/attendance', desc: 'GPS geofencing, facial recognition & shift roster.' },
  { keywords: ['full and final', 'fnf', 'settlement', 'exit', 'resignation'], title: 'F&F Settlement', href: '/full-and-final-settlement', desc: 'Automated exit workflow, gratuity & encashment.' },
  { keywords: ['expense', 'reimbursement', 'claim', 'bills'], title: 'Expense Management', href: '/expense-management-software', desc: 'Hassle-free expense submission and manager approvals.' },
  { keywords: ['tracking', 'field', 'location', 'gps tracking'], title: 'Employee Tracking', href: '/employee-tracking', desc: 'Real-time location tracking for field force.' },

  // Productivity & AI
  { keywords: ['learning', 'lms', 'course', 'training'], title: 'LMS (Learning Management)', href: '/lms', desc: 'Upskill employees with structured learning modules.' },
  { keywords: ['timesheet', 'hours', 'billable', 'project time'], title: 'Timesheet Management', href: '/timesheet-management', desc: 'Track project hours and employee billability.' },
  { keywords: ['recruitment', 'ats', 'hiring', 'interview', 'applicant'], title: 'Recruitment Management', href: '/recruitment-management', desc: 'Source, screen and hire top talent faster.' },
  { keywords: ['performance', 'appraisal', 'review', 'pms', 'kpi', 'okr', 'rating'], title: 'Performance Management', href: '/employee-performance-management-software', desc: '360° reviews, OKRs, goals & appraisal cycles.' },
  { keywords: ['mis', 'reports', 'hr mis'], title: 'HR MIS Reports', href: '/hr-mis-reports', desc: 'Generate comprehensive HR reports instantly.' },
  { keywords: ['chatbot', 'ai', 'niti ai', 'virtual assistant', 'hr niti assistant'], title: 'AI Chatbot', href: '/hr-chatbot', desc: 'Automate HR queries with our AI assistant.' },
  { keywords: ['mobile', 'app', 'android', 'ios'], title: 'Mobile App', href: '/hrms-mobile-app', desc: 'Access HR Niti on the go with our mobile app.' },
  { keywords: ['pricing', 'cost', 'plan', 'subscription', 'price'], title: 'Pricing & Plans', href: '/pricing', desc: 'Flexible pricing designed to scale with you.' },
  { keywords: ['contact', 'support', 'help', 'sales', 'reach'], title: 'Contact Us', href: '/contact-us', desc: 'Get in touch with our team.' },
  { keywords: ['templates', 'documents', 'formats', 'hr documents'], title: 'HR Templates', href: '/templates', desc: 'Ready-to-use HR documents and templates.' },
  { keywords: ['about', 'company', 'who are we'], title: 'About Us', href: '/about', desc: 'Learn more about HR Niti.' },
];

const getLevenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

const STOP_WORDS = new Set([
  'and', 'the', 'for', 'you', 'can', 'this', 'that', 'with', 'from', 'have', 'has', 'are', 'was', 'were', 
  'but', 'not', 'what', 'who', 'how', 'why', 'about', 'your', 'their', 'our', 'out', 'she', 'him', 'her', 
  'they', 'them', 'these', 'those', 'is', 'of', 'in', 'to', 'at', 'by', 'a', 'an', 'be', 'as', 'if', 'or', 
  'on', 'it', 'us', 'we', 'i', 'me', 'my', 'he', 'his', 'which', 'who', 'whom', 'whose'
]);

const isFuzzyMatch = (word: string, keyword: string): boolean => {
  const w = word.trim().toLowerCase();
  const kw = keyword.trim().toLowerCase();
  if (w === kw) return true;
  
  if (w.length < 4 || kw.length < 4) return false;
  if (kw.startsWith(w) || w.startsWith(kw)) return true;
  
  if (w.length < 6 || kw.length < 6) return false;
  
  const distance = getLevenshteinDistance(w, kw);
  const maxLength = Math.max(w.length, kw.length);
  
  if (maxLength <= 6) {
    return distance <= 1;
  } else {
    return distance <= 2;
  }
};

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const wasVoiceInputRef = useRef(false);

  const [inputMode, setInputMode] = useState<'chat' | 'name' | 'email' | 'phone'>('chat');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [inputValue, setInputValue] = useState('');

  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const clearChat = () => {
    localStorage.removeItem('hrniti_chat_messages');
    window.location.reload();
  };

  const playSound = (type: 'send' | 'receive') => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      if (type === 'send') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      // Ignore audio errors
    }
  };

  // Initialize context-aware greetings, load storage, check dark mode
  useEffect(() => {
    let visitedBefore = false;
    if (typeof window !== 'undefined') {
      const savedDark = localStorage.getItem('hrniti_chat_dark_mode') === 'true';
      setIsDarkMode(savedDark);

      visitedBefore = localStorage.getItem('hrniti_chat_visited') === 'true';
      localStorage.setItem('hrniti_chat_visited', 'true');

      const saved = localStorage.getItem('hrniti_chat_messages');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const lastMsg = parsed[parsed.length - 1];
            const isWelcome = lastMsg.text?.includes('Welcome back');
            
            if (!isWelcome) {
              const welcomeBackMsg: Message = {
                id: 'welcome-back-' + Date.now(),
                type: 'bot',
                text: 'Welcome back! 👋 How can I help you today?',
                options: ['Explore HR Features', 'Pricing & Plans', 'Book a Demo'],
                timestamp: new Date().toISOString()
              };
              setMessages([...parsed, welcomeBackMsg]);
            } else {
              setMessages(parsed);
            }
            setIsInitialized(true);
            return;
          }
        } catch (e) {
          console.error("Error parsing saved messages", e);
        }
      }
    }

    let initialText = '';
    if (visitedBefore) {
      initialText = 'Welcome back! 👋 How can I help you today?';
    } else {
      initialText = 'Hi there! 👋 Welcome to HR Niti. How can I assist you with your HR & Payroll operations today?';
      
      if (pathname.includes('/pricing')) {
        initialText = 'Hi there! 👋 Checking out HR Niti Pricing? Let me know if you have any questions!';
      } else if (pathname.includes('/payroll')) {
        initialText = 'Hi there! 👋 Looking to automate Payroll & Statutory taxes? Ask me anything!';
      } else if (pathname.includes('/contact')) {
        initialText = 'Hi there! 👋 Need to get in touch? You can ask questions directly here or leave a message!';
      }
    }

    setMessages([
      {
        id: '1',
        type: 'bot',
        text: initialText,
        options: [
          'Explore HR Features',
          'Pricing & Plans',
          'Book a Demo'
        ],
        timestamp: new Date().toISOString()
      }
    ]);
    setIsInitialized(true);
  }, []);

  // Save messages to LocalStorage
  useEffect(() => {
    if (isInitialized && messages.length > 0) {
      try {
        localStorage.setItem('hrniti_chat_messages', JSON.stringify(messages));
      } catch (e) {
        console.error("Failed to save chat history", e);
      }
    }
  }, [messages, isInitialized]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Speech Recognition API setup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setSpeechSupported(false);
      }
    }
  }, []);

  // TTS Helper Function
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/(\*\*|\*|#|`)/g, '').replace(/https?:\/\/\S+/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const startVoiceInput = () => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputValue(transcript);
          wasVoiceInputRef.current = true;
          handleSendWithText(transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error('Error starting voice recognition', e);
      setIsListening(false);
    }
  };

  const toggleDarkMode = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    localStorage.setItem('hrniti_chat_dark_mode', String(newDark));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const triggerBotResponse = (userQuery: string) => {
    setIsTyping(true);

    setTimeout(async () => {
      const lowerQuery = userQuery.toLowerCase().trim();
      const words = lowerQuery.split(/\s+/).filter(w => !STOP_WORDS.has(w));

      let matchedFeature = null;

      for (const feature of featuresList) {
        for (const kw of feature.keywords) {
          if (lowerQuery.includes(kw)) {
            matchedFeature = feature;
            break;
          }
          for (const word of words) {
            if (isFuzzyMatch(word, kw)) {
              matchedFeature = feature;
              break;
            }
          }
          if (matchedFeature) break;
        }
        if (matchedFeature) break;
      }

      let botMessage: Message;

      if (matchedFeature) {
        botMessage = {
          id: Date.now().toString(),
          type: 'bot',
          text: `Here is information about **${matchedFeature.title}**:\n${matchedFeature.desc}`,
          link: {
            text: `Explore ${matchedFeature.title}`,
            href: matchedFeature.href
          },
          options: ['Explore More Features', 'Book a Demo', 'Contact Support'],
          timestamp: new Date().toISOString()
        };
      } else {
        try {
          const aiResponse = await askGeminiAction(userQuery);
          if (aiResponse && aiResponse.success && aiResponse.text) {
            botMessage = {
              id: Date.now().toString(),
              type: 'bot',
              text: aiResponse.text,
              options: ['Explore HR Features', 'Pricing & Plans', 'Book a Demo'],
              timestamp: new Date().toISOString()
            };
          } else {
            botMessage = {
              id: Date.now().toString(),
              type: 'bot',
              text: "I can help you explore HR Niti's HRMS and Payroll modules, schedule a live demo, or connect you with our specialists.",
              options: ['Explore HR Features', 'Pricing & Plans', 'Book a Demo'],
              timestamp: new Date().toISOString()
            };
          }
        } catch (e) {
          botMessage = {
            id: Date.now().toString(),
            type: 'bot',
            text: "I can assist you with HR Niti features, pricing, or setting up a product demo.",
            options: ['Explore HR Features', 'Pricing & Plans', 'Book a Demo'],
            timestamp: new Date().toISOString()
          };
        }
      }

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      playSound('receive');

      if (wasVoiceInputRef.current) {
        speakText(botMessage.text);
        wasVoiceInputRef.current = false;
      }

      // After 3 bot responses, ask for a quick star rating
      setTimeout(() => {
        setMessages(currentMsgs => {
          const botCount = currentMsgs.filter(m => m.type === 'bot').length;
          const alreadyHasRating = currentMsgs.some(m => m.isRating);

          if (botCount >= 3 && !alreadyHasRating) {
            return [
              ...currentMsgs,
              {
                id: 'rating-' + Date.now(),
                type: 'bot',
                text: 'How helpful has Niti AI Assistant been for you today?',
                isRating: true,
                timestamp: new Date().toISOString()
              }
            ];
          }
          return currentMsgs;
        });
      }, 1000);

    }, 800);
  };

  const handleStarClick = (msgId: string, rating: number) => {
    setMessages(prev => prev.map(m => {
      if (m.id === msgId) {
        return { ...m, selectedRating: rating };
      }
      return m;
    }));

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 }
    });

    setTimeout(() => {
      const thankYouMsg: Message = {
        id: 'thank-rating-' + Date.now(),
        type: 'bot',
        text: `Thank you for giving us ${rating} stars! ⭐ We appreciate your feedback.`,
        options: ['Explore HR Features', 'Book a Demo'],
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, thankYouMsg]);
      playSound('receive');
    }, 600);
  };

  const handleSendWithText = (textToSend: string) => {
    if (!textToSend.trim()) return;

    playSound('send');

    if (inputMode === 'name') {
      const userMsg: Message = { id: Date.now().toString(), type: 'user', text: textToSend, timestamp: new Date().toISOString() };
      setFormData(prev => ({ ...prev, name: textToSend }));
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Great to meet you, ${textToSend}! What is your work email address?`,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        setInputMode('email');
        playSound('receive');
      }, 600);
      return;
    }

    if (inputMode === 'email') {
      const userMsg: Message = { id: Date.now().toString(), type: 'user', text: textToSend, timestamp: new Date().toISOString() };
      setFormData(prev => ({ ...prev, email: textToSend }));
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Got it! Lastly, what is your phone number so our team can get in touch?`,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        setInputMode('phone');
        playSound('receive');
      }, 600);
      return;
    }

    if (inputMode === 'phone') {
      const userMsg: Message = { id: Date.now().toString(), type: 'user', text: textToSend, timestamp: new Date().toISOString() };
      const updatedFormData = { ...formData, phone: textToSend };
      setFormData(updatedFormData);
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');

      setIsTyping(true);
      submitContactInquiryAction({
        name: updatedFormData.name,
        email: updatedFormData.email,
        phone: textToSend,
        subject: 'Chatbot Lead',
        message: 'Lead captured via HR Niti Chatbot Demo Booking'
      }).then(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `🎉 Thank you, ${updatedFormData.name}! Your demo request has been submitted. An HR Niti specialist will reach out shortly.`,
          options: ['Explore HR Features', 'Pricing & Plans'],
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        setInputMode('chat');
        playSound('receive');
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 } });
      }).catch(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Thank you! We have logged your request and our team will get in touch with you.`,
          options: ['Explore HR Features', 'Pricing & Plans'],
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        setInputMode('chat');
        playSound('receive');
      });
      return;
    }

    // Standard Chat Mode
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: textToSend,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    triggerBotResponse(textToSend);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendWithText(inputValue);
  };

  const handleOptionClick = (optionText: string) => {
    playSound('send');
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: optionText,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);

    if (optionText === 'Book a Demo') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: "We'd love to show you HR Niti in action! Please enter your **full name** to get started:",
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        setInputMode('name');
        playSound('receive');
      }, 600);
      return;
    }

    if (optionText === 'Pricing & Plans') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: "HR Niti offers flexible plans for SMBs to Enterprises. You can view full details on our Pricing page.",
          link: { text: "View Pricing Plans", href: "/pricing" },
          options: ['Explore HR Features', 'Book a Demo'],
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        playSound('receive');
      }, 600);
      return;
    }

    if (optionText === 'Explore HR Features') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: "Which module would you like to explore?",
          options: ['Payroll Software', 'Attendance Management', 'Leave Management', 'Performance Management'],
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMsg]);
        playSound('receive');
      }, 600);
      return;
    }

    triggerBotResponse(optionText);
  };

  const handleFeedback = (msgId: string, feedbackType: 'like' | 'dislike') => {
    setMessages(prev => prev.map(m => {
      if (m.id === msgId) {
        return { ...m, feedback: m.feedback === feedbackType ? undefined : feedbackType };
      }
      return m;
    }));
  };

  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-extrabold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer border border-emerald-400/30"
          aria-label="Open HR Niti AI Assistant"
        >
          <div className="relative">
            <Bot className="w-7 h-7 text-white" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-emerald-600 rounded-full animate-ping"></span>
            )}
          </div>
          <span className="hidden sm:inline-block font-extrabold text-sm pr-1">
            Chat with Niti AI
          </span>
        </button>
      )}

      {/* Floating Chat Container */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[400px] h-[580px] max-h-[85vh] rounded-[28px] shadow-2xl flex flex-col overflow-hidden border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-950 border-slate-800 text-slate-100 shadow-black/60' 
              : 'bg-white border-slate-200/90 text-slate-800 shadow-slate-400/30'
          }`}
        >
          {/* Top Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white px-5 py-4 flex items-center justify-between shrink-0 relative overflow-hidden shadow-md">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight flex items-center gap-1.5 text-white">
                  HR Niti Assistant 
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></div>
                  <p className="text-[11px] font-semibold text-emerald-100/90">Online • Replies instantly</p>
                </div>
              </div>
            </div>

            {/* Top Controls */}
            <div className="flex items-center gap-1 relative z-10">
              <button 
                onClick={clearChat}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                title="Clear Chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button 
                onClick={toggleDarkMode}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-amber-300 transition-all cursor-pointer"
                title={isDarkMode ? "Light Mode" : "Dark Mode"}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
              </button>

              <button 
                onClick={handleClose}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth chat-scrollbar ${
            isDarkMode ? 'bg-slate-950' : 'bg-slate-50/60'
          }`}>
            <div className="text-center mb-2">
              <span className={`text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full ${
                isDarkMode ? 'text-slate-400 bg-slate-900 border border-slate-800' : 'text-slate-500 bg-white border border-slate-200 shadow-2xs'
              }`}>Today</span>
            </div>

            {messages.map((msg, msgIndex) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`flex gap-2.5 max-w-[88%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className={`shrink-0 w-7 h-7 rounded-xl flex items-center justify-center mt-1 shadow-2xs ${
                    msg.type === 'user' 
                      ? 'bg-emerald-600 text-white' 
                      : isDarkMode ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {msg.type === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div className={`px-4 py-3 rounded-2xl transition-all ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-xs shadow-md font-medium' 
                      : isDarkMode 
                        ? 'bg-slate-900 text-slate-100 border border-slate-800/90 rounded-tl-xs shadow-sm font-medium' 
                        : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs shadow-sm font-medium'
                  }`}>
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{renderMessageText(msg.text)}</p>
                    
                    {/* Link inside bubble */}
                    {msg.link && (
                      <a 
                        href={msg.link.href} 
                        className={`inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all hover:scale-102 ${
                          isDarkMode
                            ? 'text-amber-400 bg-amber-400/10 border-amber-400/20 hover:bg-amber-400/20'
                            : 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                        }`}
                      >
                        {msg.link.text} →
                      </a>
                    )}
                  </div>
                </div>

                {/* Options Chips */}
                {msg.options && msg.options.length > 0 && inputMode === 'chat' && (
                  <div className="mt-2.5 ml-9 flex flex-wrap gap-2">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className={`text-xs font-bold px-3.5 py-1.5 border rounded-full transition-all hover:scale-105 cursor-pointer text-left ${
                          isDarkMode
                            ? 'bg-slate-900 border-emerald-800/60 text-emerald-400 hover:bg-emerald-950 hover:border-emerald-500'
                            : 'bg-emerald-50/80 border-emerald-200 text-emerald-800 hover:bg-emerald-600 hover:text-white shadow-2xs hover:shadow-md'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Star Rating */}
                {msg.isRating && (
                  <div className={`mt-2.5 ml-9 flex flex-col gap-2 p-3.5 rounded-2xl border ${
                    isDarkMode 
                      ? 'bg-slate-900 border-slate-800' 
                      : 'bg-amber-50/60 border-amber-200/80'
                  }`}>
                    <p className={`text-xs text-center font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Tap a star to rate
                    </p>
                    <div className="flex items-center gap-2.5 justify-center">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = msg.selectedRating ? star <= msg.selectedRating : false;
                        return (
                          <button
                            key={star}
                            disabled={!!msg.selectedRating}
                            onClick={() => handleStarClick(msg.id, star)}
                            className={`transition-transform cursor-pointer ${
                              msg.selectedRating ? 'cursor-default' : 'hover:scale-125'
                            } ${isFilled ? 'text-amber-400' : isDarkMode ? 'text-slate-600' : 'text-slate-300'}`}
                          >
                            <Star className={`w-5 h-5 ${isFilled ? 'fill-amber-400' : ''}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Timestamp & Feedback */}
                {msg.text !== '' && (
                  <div className={`flex items-center gap-2 mt-1 ${msg.type === 'user' ? 'mr-9 flex-row-reverse' : 'ml-9'}`}>
                    {msg.timestamp && (
                      <span className={`text-[10px] font-semibold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    )}

                    {msg.type === 'bot' && !msg.isRating && !isTyping && (
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => handleFeedback(msg.id, 'like')}
                          className={`p-1 rounded-lg transition-all ${
                            msg.feedback === 'like' 
                              ? 'text-emerald-600 bg-emerald-100' 
                              : 'text-slate-400 hover:text-emerald-600'
                          }`}
                          title="Helpful"
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={() => handleFeedback(msg.id, 'dislike')}
                          className={`p-1 rounded-lg transition-all ${
                            msg.feedback === 'dislike' 
                              ? 'text-rose-600 bg-rose-100' 
                              : 'text-slate-400 hover:text-rose-600'
                          }`}
                          title="Not helpful"
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs shadow-2xs flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Floating Input Controls */}
          <form onSubmit={handleSend} className={`p-3 border-t shrink-0 ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all shadow-sm ${
              isDarkMode 
                ? 'bg-slate-900 border-slate-800 focus-within:border-emerald-500' 
                : 'bg-slate-50 border-slate-200 focus-within:border-emerald-500 focus-within:bg-white'
            }`}>
              <input
                type={inputMode === 'email' ? 'email' : inputMode === 'phone' ? 'tel' : 'text'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  inputMode === 'name' ? 'Enter your full name...' :
                  inputMode === 'email' ? 'Enter work email address...' :
                  inputMode === 'phone' ? 'Enter phone number...' :
                  'Ask me anything...'
                }
                className={`w-full text-xs sm:text-sm bg-transparent outline-none ${
                  isDarkMode ? 'text-white placeholder:text-slate-500' : 'text-slate-800 placeholder:text-slate-400'
                }`}
              />

              {speechSupported && (
                <button
                  type="button"
                  onClick={startVoiceInput}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    isListening 
                      ? 'bg-rose-500 text-white animate-pulse' 
                      : isDarkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-400 hover:text-emerald-600'
                  }`}
                  title="Speak message"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              )}

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center transition-all shadow-md shrink-0 cursor-pointer ${
                  !inputValue.trim() ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 hover:from-emerald-700 hover:to-teal-700'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-2 px-2 text-[10px] font-bold text-slate-400">
              <span>Press Enter to send</span>
              <span className="text-emerald-600">Powered by HR Niti</span>
            </div>
          </form>

        </div>
      )}
    </>
  );
}
