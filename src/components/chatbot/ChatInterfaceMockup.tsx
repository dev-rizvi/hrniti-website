"use client";

import React, { useState, useEffect } from "react";
import { Send, Bot, Paperclip } from "lucide-react";

type Message = {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  delay: number;
};

export default function ChatInterfaceMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const script: Message[] = [
    { id: 1, sender: 'user', text: "Hi, I need to check my leave balance.", delay: 500 },
    { id: 2, sender: 'bot', text: "Hello! 👋 I can help with that. You have 12 Privilege Leaves and 5 Sick Leaves remaining.", delay: 2000 },
    { id: 3, sender: 'user', text: "Okay, I want to apply for 2 days leave next week.", delay: 4000 },
    { id: 4, sender: 'bot', text: "Sure. Please select the dates.", delay: 5500 },
    { id: 5, sender: 'user', text: "Oct 24th and 25th.", delay: 7500 },
    { id: 6, sender: 'bot', text: "Request for PL on Oct 24-25 submitted to your manager! ✅", delay: 9000 },
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    script.forEach((msg) => {
      // Show user message immediately at its delay time
      const showMsgTimeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg.id]);

        // If next message is bot, show typing indicator
        const nextMsg = script.find(m => m.id === msg.id + 1);
        if (nextMsg && nextMsg.sender === 'bot') {
          setIsTyping(true);
        } else {
          setIsTyping(false);
        }

      }, msg.delay);
      timeouts.push(showMsgTimeout);

      // Turn off typing indicator right before bot message appears
      if (msg.sender === 'bot') {
        const typingOffTimeout = setTimeout(() => {
          setIsTyping(false);
        }, msg.delay - 100);
        timeouts.push(typingOffTimeout);
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-[320px] mx-auto bg-white rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden h-[600px] relative flex flex-col select-none">
      {/* Status Bar */}
      <div className="h-7 bg-slate-900 w-full flex justify-center">
        <div className="w-24 h-4 bg-black rounded-b-xl"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-4 pt-8 text-white flex items-center gap-3 shadow-md z-10">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-extrabold text-sm">Niti AI Assistant</div>
          <div className="flex items-center gap-1 text-[10px] opacity-90 font-bold">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
        <div className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider my-2">Today</div>

        {script.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500 ease-in-out transform ${visibleMessages.includes(msg.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}
          >
            <div className={`
              max-w-[80%] rounded-2xl p-3.5 text-xs shadow-sm font-medium leading-relaxed
              ${msg.sender === 'user' ? 'bg-purple-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200/50 rounded-tl-none'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white border border-slate-200/50 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-slate-100 z-10">
        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
          <Paperclip className="h-4 w-4 text-slate-400" />
          <div className="text-xs text-slate-400 flex-1">Type a message...</div>
          <Send className="h-4 w-4 text-purple-600" />
        </div>
      </div>

      {/* Home Bar */}
      <div className="h-1 w-1/3 bg-slate-300 rounded-full mx-auto my-2"></div>
    </div>
  );
}
