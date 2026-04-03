"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot, FaMicrophone, FaMicrophoneSlash, FaPaperPlane,
  FaTimes, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute
} from "react-icons/fa";

const knowledgeBase = {
  greetings: [
    "Hello! Welcome to AIMS - AI Medical Scriber. I'm your virtual assistant. How can I help you today?",
    "Hi there! I'm the AIMS assistant. Ask me anything about our AI medical documentation platform!",
    "Welcome! I'm here to help you learn about AIMS. What would you like to know?"
  ],
  responses: {
    "what is aims": "AIMS stands for AI Medical Scriber. It's an all-in-one AI-powered platform that helps healthcare providers with clinical documentation, automated SOAP notes, medical billing, coding, and practice management. Think of it as your intelligent medical assistant that handles the paperwork so you can focus on patients.",
    "what does aims do": "AIMS helps healthcare providers by automatically generating clinical notes from patient visits, extracting billing codes, managing patient records, and streamlining your entire clinic workflow. It uses AI to listen to consultations and create accurate medical documentation in real-time.",
    "how does aims work": "AIMS uses ambient AI listening technology. During patient visits, it captures the conversation, understands medical context, and automatically generates structured clinical notes, SOAP notes, and extracts relevant billing codes. Everything syncs with your existing EHR system.",
    "pricing": "We offer flexible pricing plans starting with a free trial. Our plans scale based on your practice size and needs. For specific pricing, I'd recommend booking a demo or contacting our team at jasmel@aimedicalscribe.com for a personalized quote.",
    "cost": "AIMS offers a free trial so you can test the platform before committing. Our pricing is based on practice size and usage. Contact us at jasmel@aimedicalscribe.com for a custom quote tailored to your needs.",
    "free trial": "Yes! We offer a free trial with full access to all features. No credit card required. You can sign up through our Get Started page or contact us for more information.",
    "hipaa": "AIMS is designed with HIPAA compliance in mind. We implement administrative, technical, and physical safeguards to protect patient data. However, HIPAA compliance is a shared responsibility - covered entities need to execute a Business Associate Agreement (BAA) with us before using the platform with PHI.",
    "is aims hipaa compliant": "AIMS implements HIPAA-compliant safeguards, but full compliance requires a signed Business Associate Agreement (BAA) with your practice. Contact us to set up a BAA before processing any patient health information.",
    "ehr integration": "AIMS integrates with major EHR systems including Epic, Cerner, Allscripts, Athenahealth, eClinicalWorks, and NextGen. Our seamless integration allows automatic syncing of notes, codes, and patient data.",
    "integrations": "AIMS integrates with major EHR systems like Epic, Cerner, Athenahealth, and more. We also support telemedicine platforms like Zoom, Teams, and Doxy.me for virtual visit documentation.",
    "features": "AIMS includes AI medical scribing, automated SOAP notes, billing code extraction, voice intake, smart OCR, clinical kiosk, MD expert chatbot, biomarker analysis, DNA integration, telemedicine support, and much more. It's a complete clinical intelligence platform.",
    "soap notes": "AIMS automatically generates structured SOAP (Subjective, Objective, Assessment, Plan) notes from patient consultations. The AI listens to the visit, understands medical context, and creates accurate, comprehensive notes that you can review and sign.",
    "accuracy": "AIMS achieves 99.8% accuracy in medical documentation, thanks to specialized healthcare AI models trained on millions of clinical encounters. The system continuously learns and improves based on user feedback.",
    "time saved": "AIMS saves an average of 15-20 minutes per patient encounter, which translates to 2-3 hours daily for a typical provider. Most practices see ROI within the first month.",
    "roi": "Practices using AIMS save an average of $127K per physician annually. With 15+ minutes saved per patient and increased daily capacity, most practices see full ROI within the first month.",
    "languages": "AIMS currently supports English and Spanish, with additional languages planned. The AI understands various medical terminologies and accents.",
    "support": "We offer comprehensive support including onboarding assistance, training, and ongoing technical support. You can reach us at jasmel@aimedicalscribe.com or through our Support page.",
    "contact": "You can reach us at jasmel@aimedicalscribe.com. You can also book a demo through our Get Started page or visit our Support page for FAQs and assistance.",
    "demo": "You can book a demo by clicking the Get Started button on our website. We'll walk you through the platform, show you how it works, and answer any questions you have.",
    "get started": "Click the Get Started button on our website to begin your free trial. No credit card required. You'll have full access to all features so you can experience the full power of AIMS.",
    "ai consulting": "AIMS also offers AI consulting services for all industries - not just healthcare. We help businesses with AI strategy, implementation, and optimization. Visit our AI Consulting section to learn more about our 5-phase process.",
    "virtual receptionist": "You're talking to it right now! Our AI Virtual Receptionist can answer questions about AIMS, help you navigate the site, and assist with getting started. I support both voice and text - just ask away!",
    "who are you": "I'm the AIMS Virtual Receptionist - an AI assistant designed to help you learn about our platform, answer your questions, and guide you through getting started. I can understand both voice and text!",
    "what can you do": "I can answer questions about AIMS features, pricing, HIPAA compliance, integrations, and more. I can help you navigate the website, explain our services, and guide you toward getting started. Just ask me anything!",
    "medical disclaimer": "Important: AIMS is an AI administrative assistant, not a medical device. We don't provide medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for medical decisions. AIMS has not been cleared by the FDA.",
    "fda": "AIMS has not been evaluated or cleared by the FDA. Our platform is designed for administrative and documentation assistance only. It is not intended to diagnose, treat, cure, or prevent any disease.",
    "medicare": "AIMS provides documentation and coding assistance only. It does not submit claims to Medicare or any insurance payer. All billing codes must be reviewed and approved by a qualified healthcare professional before submission.",
    "security": "AIMS uses AES-256 encryption for data at rest and in transit, two-factor authentication, continuous security monitoring, and regular vulnerability assessments. We're committed to protecting your data.",
    "data privacy": "We take data privacy seriously. We comply with HIPAA, CCPA/CPRA, and other privacy regulations. We don't sell your personal information. PHI is only processed under a signed Business Associate Agreement.",
    "telemedicine": "AIMS supports telemedicine documentation for virtual visits on platforms like Zoom, Teams, and Doxy.me. It provides real-time transcription and automatic SOAP note generation for remote consultations.",
    "billing": "AIMS automatically extracts diagnosis codes (ICD-10) and procedure codes (CPT) from clinical documentation. This reduces coding errors and can improve reimbursement rates. All codes must be reviewed by a qualified professional before submission.",
    "specialties": "AIMS works across medical specialties including primary care, cardiology, emergency medicine, dermatology, orthopedics, psychiatry, and many more. The AI adapts to specialty-specific terminology and documentation requirements.",
    "onboarding": "Getting started with AIMS is easy. Sign up for a free trial, connect your EHR system, and start using the platform immediately. We provide onboarding support and training to ensure a smooth transition.",
    "training": "AIMS is intuitive and easy to use. We provide onboarding training, documentation, and ongoing support. Most providers are fully productive within their first day of use.",
    "customization": "AIMS can be customized to match your practice's documentation preferences, specialty-specific templates, and workflow requirements. Contact us to learn about customization options.",
    "mobile": "AIMS is accessible through any modern web browser on desktop, tablet, and mobile devices. Our responsive design ensures a great experience on any screen size.",
    "api": "AIMS offers API access for custom integrations with your existing systems. Contact our team at jasmel@aimedicalscribe.com to discuss your integration needs.",
    "team": "AIMS was built by a team of healthcare professionals, AI engineers, and software developers who understand the challenges of clinical documentation. We're passionate about making healthcare providers' lives easier.",
    "about": "AIMS is an AI-powered medical documentation platform designed to help healthcare providers save time, reduce burnout, and improve patient care. We combine cutting-edge AI with deep healthcare expertise.",
    "articles": "Our Articles section features the latest news, insights, and educational content about AI in healthcare, clinical documentation best practices, and industry trends.",
    "technology": "Our Technology page showcases all AIMS features including AI scribing, voice intake, smart OCR, clinical kiosk, MD chatbot, and more. Visit /technology to explore our full capabilities.",
    "book appointment": "You can book a demo or consultation by clicking the Get Started button on our website, or by emailing us at jasmel@aimedicalscribe.com.",
    "hours": "Our AI assistant (that's me!) is available 24/7. For human support, our team is available during business hours. Contact us at jasmel@aimedicalscribe.com for assistance.",
    "refund": "For information about our refund policy, please contact us at jasmel@aimedicalscribe.com. We want to ensure you're completely satisfied with AIMS.",
    "cancel": "You can manage your subscription through your account settings. For assistance with cancellation, contact us at jasmel@aimedicalscribe.com.",
    "billed": "Billing details depend on your selected plan. Contact us at jasmel@aimedicalscribe.com for specific billing information related to your account.",
    "default": "That's a great question! While I may not have a specific answer for that right now, I'd be happy to connect you with our team. You can reach us at jasmel@aimedicalscribe.com or click Get Started to book a demo. Is there anything else about AIMS I can help with?"
  }
};

function findBestResponse(input) {
  const normalized = input.toLowerCase().trim();

  for (const [key, response] of Object.entries(knowledgeBase.responses)) {
    if (key === "default" || key === "greetings") continue;
    if (normalized.includes(key) || key.split(" ").some(word => word.length > 3 && normalized.includes(word))) {
      return response;
    }
  }

  if (normalized.match(/^(hi|hello|hey|good morning|good afternoon|good evening|howdy|greetings)/)) {
    return knowledgeBase.responses["greetings"][Math.floor(Math.random() * knowledgeBase.responses["greetings"].length)];
  }

  if (normalized.match(/(thank|thanks|thx|appreciate)/)) {
    return "You're welcome! Is there anything else I can help you with about AIMS?";
  }

  if (normalized.match(/(bye|goodbye|see you|later|take care)/)) {
    return "Goodbye! Feel free to come back anytime. Have a great day!";
  }

  return knowledgeBase.responses["default"];
}

export default function AIReceptionist() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSpeechSupported(!!SpeechRecognition);
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        handleSend(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = knowledgeBase.responses["greetings"][0];
      setTimeout(() => {
        setMessages([{ role: "assistant", text: greeting }]);
        speakText(greeting);
      }, 500);
    }
  }, [isOpen]);

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSend = async (textOverride) => {
    const messageText = textOverride || input.trim();
    if (!messageText) return;

    setMessages(prev => [...prev, { role: "user", text: messageText }]);
    setInput("");
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    const response = findBestResponse(messageText);
    setMessages(prev => [...prev, { role: "assistant", text: response }]);
    setIsTyping(false);
    speakText(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white shadow-lg shadow-[var(--accent-primary)]/30 ${isOpen ? "hidden" : ""}`}
        aria-label="Open AI Receptionist"
      >
        <FaRobot className="text-xl" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--bg-primary)] animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 bg-[var(--bg-deep-slate)] border border-[var(--glass-border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
              isExpanded
                ? "inset-4 md:inset-12"
                : "bottom-24 md:bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-96 h-[32rem]"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--glass-border)] bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                    <FaRobot className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--bg-deep-slate)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">AIMS Virtual Receptionist</h4>
                  <p className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isSpeaking ? "bg-emerald-400 animate-pulse" : "bg-[var(--text-muted)]"}`} />
                    {isSpeaking ? "Speaking..." : isListening ? "Listening..." : "Online • Voice & Text"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 hover:bg-[var(--glass-bg)] rounded-lg transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  aria-label={isExpanded ? "Minimize" : "Expand"}
                >
                  {isExpanded ? <FaCompress /> : <FaExpand />}
                </button>
                <button
                  onClick={() => { setIsOpen(false); window.speechSynthesis?.cancel(); }}
                  className="p-2 hover:bg-[var(--glass-bg)] rounded-lg transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isExpanded ? "" : ""}`}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    msg.role === "assistant"
                      ? "bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white"
                      : "bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--glass-border)]"
                  }`}>
                    {msg.role === "assistant" ? <FaRobot /> : "U"}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--accent-primary)]/10 text-[var(--text-primary)] rounded-tr-none border border-[var(--accent-primary)]/20"
                      : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-tl-none border border-[var(--glass-border)]"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-xs">
                    <FaRobot />
                  </div>
                  <div className="bg-[var(--bg-tertiary)] px-4 py-3 rounded-2xl rounded-tl-none border border-[var(--glass-border)]">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-[var(--glass-border)] bg-[var(--bg-deep-slate)]/50">
              <div className="flex items-center gap-2">
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`p-2.5 rounded-xl transition-colors flex-shrink-0 ${
                      isListening
                        ? "bg-red-500/20 text-red-400 animate-pulse"
                        : "bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)]/80"
                    }`}
                    aria-label={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                  </button>
                )}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isListening ? "Listening..." : "Ask me anything about AIMS..."}
                  className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--glass-border)] rounded-xl px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
              {isListening && (
                <p className="text-[10px] text-[var(--text-muted)] mt-2 text-center flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  Speak now...
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
