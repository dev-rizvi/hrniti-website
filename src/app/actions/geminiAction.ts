'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the SDK with the API key from environment variables
const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

export async function askGeminiAction(
  userMessage: string,
  history: ChatHistoryItem[] = []
) {
  if (!genAI) {
    console.error("Gemini API key is not configured. Please set GEMINI_API_KEY in environment variables.");
    return {
      success: false,
      text: "I'm sorry, my AI Assistant module is currently offline as the API key is not configured. Please configure your key in environment variables or try options like Booking a Demo!"
    };
  }

  try {
    const systemPrompt = `You are HR Niti Assistant, a friendly, professional AI virtual HR helper for HR Niti.
HR Niti is a complete Human Resource Management System (HRMS) and payroll software designed to automate HR processes.

Here is the context about HR Niti's key features, pages and modules:
- HRMS Software & Core HR (/hrms-software, /corehr): Centralized employee database, profile management, organization directory.
- Employee Self Service (/employee-self-service): Portal for employees to check leaves, download payslips, raise requests.
- Payroll Software & F&F (/payroll-software, /full-and-final-settlement): Automated compliant payroll processing, salary slips, Full & Final settlements.
- Leave & Attendance Management (/leave-management, /attendance): Tracker for leaves, vacations, clock-ins, geo-tracking, shift rosters.
- Performance Management (/employee-performance-management-software): Align teams with OKRs, 360-degree appraisals, continuous feedback.
- Hiring & ATS / Recruitment (/hiring, /recruitment-management, /jobposting): Managing job postings, candidate pipelines, interview scheduling.
- LMS Learning Management (/lms): Employee training, skill enhancement programs, interactive courses.
- Employee Tracking (/employee-tracking): Geofencing, field agent tracking, live location mapping.
- Timesheet Management (/timesheet-management): Project time tracking, billable hour tracking.
- People Analytics & Reports (/analytics, /hr-mis-reports): Headcount statistics, attrition analytics, custom MIS reports.
- HR Templates (/templates): Free ready-made templates for HR policies, offer letters, resumes.

Interactive Chatbot features (for demo purposes):
- If the user asks for leave balance or apply leave, you can politely mention that in the interactive demo they can ask "leave balance", "apply leave", "payslip", "upcoming holiday", or "company policy" directly.
- To book a demo or trial, users can type "Book a demo" or click the "Book a Demo" options in the chatbot.

Guidelines for your responses:
1. Tone: Friendly, professional, concise, and helpful.
2. Language: Respond in the language used by the user (English, Hindi, or Hinglish - Hindi written in Latin script).
3. Formatting: Use simple formatting. Use bolding (**text**) for emphasis. Avoid complex markdown tables or HTML tags, as the PDF downloader and layout works best with plain text and basic bolding. Keep lists as simple bullet points (* item).
4. Length: Keep answers concise (1 to 3 paragraphs max, or a brief bulleted list). Avoid very long paragraphs.
5. If you do not know the answer, politely say so and recommend booking a demo with our experts. Do not make up non-existent facts about HR Niti.`;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: systemPrompt,
    });

    // Clean history: Gemini expects history to start with 'user' role and alternate between 'user' and 'model'
    const cleanedHistory: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];
    const firstUserIdx = history.findIndex(item => item.role === 'user');

    if (firstUserIdx !== -1) {
      const slicedHistory = history.slice(firstUserIdx);
      for (const item of slicedHistory) {
        const role = item.role === 'model' ? 'model' : 'user';
        if (cleanedHistory.length === 0) {
          cleanedHistory.push({ role, parts: [{ text: item.text }] });
        } else {
          const lastItem = cleanedHistory[cleanedHistory.length - 1];
          if (lastItem.role === role) {
            lastItem.parts[0].text += "\n" + item.text;
          } else {
            cleanedHistory.push({ role, parts: [{ text: item.text }] });
          }
        }
      }
    }

    // Start a chat session with history
    const chat = model.startChat({
      history: cleanedHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();

    return {
      success: true,
      text: responseText
    };
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    return {
      success: false,
      text: "I encountered a small issue connecting to my server. Please try again or choose an option below!",
      error: error.message || String(error)
    };
  }
}
