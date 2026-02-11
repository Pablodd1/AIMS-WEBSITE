"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaRobot, 
  FaPaperPlane, 
  FaMicrophone, 
  FaMicrophoneSlash, 
  FaTimes, 
  FaCommentDots,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaSpinner,
  FaInfoCircle,
  FaStethoscope,
  FaNotesMedical,
  FaHospital,
  FaDollarSign,
  FaClock
} from "react-icons/fa";

// AIMS Knowledge Base - Trained on Website Information
const AIMS_KNOWLEDGE_BASE = {
  company: {
    name: "AI Medical Scriber (AIMS)",
    fullName: "AI Medical Scriber",
    founded: "2024",
    location: "United States",
    website: "https://www.aimedicalscriber.com",
    email: "support@aimedicalscriber.com",
    demoEmail: "jasmelacosta@gmail.com"
  },
  
  products: {
    aiMedicalScriber: {
      name: "AI Medical Scriber",
      description: "Ambient listening during patient consultations that automatically generates structured SOAP notes",
      features: ["Real-time transcription", "SOAP note generation", "EHR integration", "99.8% accuracy"],
      benefits: ["Saves 15+ minutes per patient", "Reduces physician burnout", "Improves documentation quality"]
    },
    voiceIntake: {
      name: "Voice Intake",
      description: "Patients complete medical forms using natural voice commands with 99.8% accuracy",
      features: ["Natural language processing", "Multi-language support", "Insurance verification"],
      benefits: ["Faster patient check-in", "Reduced staff workload", "Improved data accuracy"]
    },
    mdClinicalAssistant: {
      name: "MD Clinical Assistant",
      description: "AI chatbot for clinical reasoning, medication guidance, and evidence-based recommendations",
      features: ["Drug interaction checking", "Differential diagnosis", "Treatment protocols"],
      training: "Trained on 500K+ peer-reviewed medical journals, UpToDate, PubMed, Cochrane"
    },
    clinicKiosk: {
      name: "Clinic Kiosk",
      description: "Self-service patient check-in with ID/insurance OCR scanning",
      features: ["ID scanning", "Insurance OCR", "Payment processing"]
    },
    managementDashboard: {
      name: "Management Dashboard",
      description: "Real-time analytics for clinic operations, provider performance, and revenue tracking",
      features: ["Revenue analytics", "Provider metrics", "Billing insights"]
    }
  },

  pricing: {
    model: "Per provider per month",
    range: "$200-400/provider/month",
    note: "No enterprise minimums, transparent pricing",
    roi: "$127K average annual savings per physician",
    trial: "Free trial available"
  },

  integration: {
    ehrs: ["Epic", "Cerner", "Athenahealth", "eClinicalWorks", "NextGen", "Allscripts"],
    compatibility: "Works with all major EHR systems"
  },

  compliance: {
    certifications: ["HIPAA Compliant", "SOC 2 Type II", "FDA Guidance Aware"],
    security: "End-to-end encryption, secure cloud infrastructure"
  },

  specialties: [
    "Primary Care",
    "Cardiology", 
    "Orthopedics",
    "Neurology",
    "Psychiatry",
    "Emergency Medicine",
    "Trauma",
    "Multi-specialty practices"
  ],

  stats: {
    accuracy: "99.8%",
    timeSaved: "15+ minutes per patient",
    providers: "10,000+",
    annualSavings: "$127K per physician",
    patientCapacity: "+4 patients daily",
    responseTime: "0.3 seconds"
  },

  contact: {
    sales: "Get Started page or demo request",
    support: "customer-care page",
    phone: "Available on request"
  }
};

// Predefined responses based on common questions
const PREDEFINED_RESPONSES = {
  greetings: {
    en: ["Hello! I'm AIMS Assistant. How can I help you with medical documentation today?", "Welcome! I'm here to answer questions about AI Medical Scriber. What would you like to know?"],
    es: ["¡Hola! Soy el Asistente de AIMS. ¿Cómo puedo ayudarte con la documentación médica hoy?", "¡Bienvenido! Estoy aquí para responder preguntas sobre AI Medical Scriber. ¿Qué te gustaría saber?"]
  },
  
  pricing: {
    en: `Our pricing is $200-400 per provider per month, with no enterprise minimums. Most practices see an ROI within 3-12 months with an average annual savings of $127K per physician. We also offer a free trial. Would you like me to connect you with our sales team?`,
    es: `Nuestros precios son de $200-400 por proveedor por mes, sin mínimos empresariales. La mayoría de las prácticas ven un ROI en 3-12 meses con un ahorro anual promedio de $127K por médico. También ofrecemos una prueba gratuita. ¿Te gustaría que te conecte con nuestro equipo de ventas?`
  },

  features: {
    en: `AIMS offers: 1) AI Medical Scriber - ambient listening that generates SOAP notes, 2) Voice Intake - patients complete forms by voice, 3) MD Clinical Assistant - AI for clinical reasoning, 4) Clinic Kiosk - self-service check-in, 5) Management Dashboard - analytics and insights. All with 99.8% accuracy and HIPAA compliance. Which feature interests you most?`,
    es: `AIMS ofrece: 1) Escriba Médica AI - escucha ambiental que genera notas SOAP, 2) Admisión por Voz - pacientes completan formularios por voz, 3) Asistente Clínico MD - IA para razonamiento clínico, 4) Kiosco de Clínica - autoservicio, 5) Panel de Gestión - análisis. Todo con 99.8% de precisión y cumplimiento HIPAA. ¿Qué característica te interesa más?`
  },

  demo: {
    en: `I'd be happy to schedule a demo for you! Could you please provide your name, email, and phone number? Our team will contact you within 24 hours to schedule a personalized demo. You can also visit our Get Started page directly.`,
    es: `¡Con gusto agendaré una demo para ti! ¿Podrías proporcionar tu nombre, correo electrónico y número de teléfono? Nuestro equipo te contactará dentro de 24 horas para programar una demo personalizada. También puedes visitar directamente nuestra página de Comenzar.`
  },

  integration: {
    en: `AIMS integrates with all major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, and Allscripts. Implementation typically takes 48 hours with no IT department required. Which EHR do you currently use?`,
    es: `AIMS se integra con todos los sistemas EHR principales incluyendo Epic, Cerner, Athenahealth, eClinicalWorks, NextGen y Allscripts. La implementación típicamente toma 48 horas sin necesidad de departamento de TI. ¿Qué EHR usas actualmente?`
  },

  contact: {
    en: `You can reach us at: Email: support@aimedicalscriber.com | Demo requests: jasmelacosta@gmail.com | Support: Visit our customer-care page. Would you like me to have someone contact you directly?`,
    es: `Puedes contactarnos en: Correo: support@aimedicalscriber.com | Solicitudes de demo: jasmelacosta@gmail.com | Soporte: Visita nuestra página de atención al cliente. ¿Te gustaría que alguien te contacte directamente?`
  },

  fallback: {
    en: `I apologize, but I don't have specific information about that. Let me connect you with our team who can provide detailed assistance. Could you please share your name, email, and phone number?`,
    es: `Disculpa, pero no tengo información específica sobre eso. Permíteme conectarte con nuestro equipo que puede proporcionarte asistencia detallada. ¿Podrías compartir tu nombre, correo electrónico y número de teléfono?`
  }
};

const FrontDeskChatbot = ({ lang = "en" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetings = PREDEFINED_RESPONSES.greetings[lang];
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setMessages([
        {
          role: "assistant",
          content: randomGreeting,
          timestamp: new Date(),
          type: "text"
        }
      ]);
    }
  }, [isOpen, lang, messages.length]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = lang === "es" ? "es-ES" : "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSendMessage(transcript);
        setIsRecording(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, [lang]);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert(lang === "es" ? "Tu navegador no soporta reconocimiento de voz" : "Your browser doesn't support voice recognition");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    }
  };

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for pricing-related queries
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("$") || lowerMessage.includes("dollar") || lowerMessage.includes("precio") || lowerMessage.includes("cuánto cuesta")) {
      return PREDEFINED_RESPONSES.pricing[lang];
    }
    
    // Check for feature-related queries
    if (lowerMessage.includes("feature") || lowerMessage.includes("what does") || lowerMessage.includes("do") || lowerMessage.includes("function") || lowerMessage.includes("característica") || lowerMessage.includes("qué hace")) {
      return PREDEFINED_RESPONSES.features[lang];
    }
    
    // Check for demo/trial requests
    if (lowerMessage.includes("demo") || lowerMessage.includes("trial") || lowerMessage.includes("see it") || lowerMessage.includes("prueba") || lowerMessage.includes("demo")) {
      setShowLeadForm(true);
      return PREDEFINED_RESPONSES.demo[lang];
    }
    
    // Check for integration questions
    if (lowerMessage.includes("integration") || lowerMessage.includes("ehr") || lowerMessage.includes("epic") || lowerMessage.includes("cerner") || lowerMessage.includes("integración")) {
      return PREDEFINED_RESPONSES.integration[lang];
    }
    
    // Check for contact info
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("reach") || lowerMessage.includes("contacto")) {
      return PREDEFINED_RESPONSES.contact[lang];
    }
    
    // Check for greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("hola") || lowerMessage.includes("buenos")) {
      const greetings = PREDEFINED_RESPONSES.greetings[lang];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Default response
    setShowLeadForm(true);
    return PREDEFINED_RESPONSES.fallback[lang];
  };

  const handleSendMessage = async (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: text,
      timestamp: new Date(),
      type: isRecording ? "voice" : "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsProcessing(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const response = generateResponse(text);
      
      const assistantMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
        type: "text"
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    
    // Send email notification
    try {
      const response = await fetch("/server-API/chatbot-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone || "Not provided",
          message: `Chatbot Lead - Language: ${lang.toUpperCase()}\n\nConversation History:\n${messages.map(m => `${m.role}: ${m.content}`).join("\n")}`,
          type: "Chatbot Demo Request",
          lang: lang
        })
      });

      if (response.ok) {
        setLeadSubmitted(true);
        setMessages(prev => [...prev, {
          role: "assistant",
          content: lang === "es" 
            ? `¡Gracias ${leadData.name}! Hemos recibido tu información y te contactaremos en menos de 24 horas.`
            : `Thank you ${leadData.name}! We've received your information and will contact you within 24 hours.`,
          timestamp: new Date(),
          type: "text"
        }]);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: lang === "es" 
          ? "Lo siento, hubo un error al enviar tu información. Por favor intenta de nuevo o contáctanos directamente."
          : "Sorry, there was an error submitting your information. Please try again or contact us directly.",
        timestamp: new Date(),
        type: "text"
      }]);
    }
  };

  const quickReplies = [
    { icon: <FaDollarSign />, label: lang === "es" ? "Precios" : "Pricing", query: lang === "es" ? "¿Cuál es el precio?" : "What is the pricing?" },
    { icon: <FaStethoscope />, label: lang === "es" ? "Funciones" : "Features", query: lang === "es" ? "¿Qué funciones tienen?" : "What features do you have?" },
    { icon: <FaCalendarAlt />, label: lang === "es" ? "Agendar Demo" : "Schedule Demo", query: lang === "es" ? "Quiero una demo" : "I want a demo" },
    { icon: <FaHospital />, label: lang === "es" ? "Integración EHR" : "EHR Integration", query: lang === "es" ? "¿Con qué EHR se integran?" : "What EHR do you integrate with?" }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <FaCommentDots className="text-2xl" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AIMS Assistant</h3>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    {lang === "es" ? "En línea" : "Online"}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 mb-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-primary text-white"
                  }`}>
                    {message.role === "user" ? <FaUser className="text-xs" /> : <FaRobot className="text-xs" />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    message.role === "user" 
                      ? "bg-blue-500 text-white rounded-br-none" 
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                  }`}>
                    {message.type === "voice" && message.role === "user" && (
                      <div className="flex items-center gap-1 text-xs opacity-70 mb-1">
                        <FaMicrophone className="text-[10px]" />
                        {lang === "es" ? "Mensaje de voz" : "Voice message"}
                      </div>
                    )}
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isProcessing && (
                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <FaRobot className="text-xs" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <FaSpinner className="animate-spin text-primary" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Lead Form */}
            {showLeadForm && !leadSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-blue-50 p-4 border-t border-blue-100"
              >
                <p className="text-xs font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <FaInfoCircle />
                  {lang === "es" ? "Déjanos tus datos para contactarte:" : "Leave your details and we'll contact you:"}
                </p>
                <form onSubmit={handleLeadSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder={lang === "es" ? "Nombre completo" : "Full name"}
                    value={leadData.name}
                    onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder={lang === "es" ? "Correo electrónico" : "Email address"}
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="tel"
                    placeholder={lang === "es" ? "Teléfono (opcional)" : "Phone (optional)"}
                    value={leadData.phone}
                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    {lang === "es" ? "Enviar" : "Send"}
                  </button>
                </form>
              </motion.div>
            )}

            {/* Quick Replies */}
            {!showLeadForm && (
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <p className="text-[10px] text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  {lang === "es" ? "Preguntas rápidas:" : "Quick questions:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(reply.query)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <span className="text-[10px]">{reply.icon}</span>
                      {reply.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleRecording}
                  className={`p-2.5 rounded-full transition-all ${
                    isRecording 
                      ? "bg-red-500 text-white animate-pulse" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  title={isRecording ? (lang === "es" ? "Detener grabación" : "Stop recording") : (lang === "es" ? "Grabar voz" : "Record voice")}
                >
                  {isRecording ? <FaMicrophoneSlash /> : <FaMicrophone />}
                </button>
                
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={isRecording 
                    ? (lang === "es" ? "Escuchando..." : "Listening...") 
                    : (lang === "es" ? "Escribe tu mensaje..." : "Type your message...")
                  }
                  className="flex-1 px-4 py-2.5 bg-gray-100 border-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isRecording}
                />
                
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isProcessing}
                  className="p-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                </button>
              </div>
              
              <p className="text-[9px] text-gray-400 mt-2 text-center">
                {lang === "es" 
                  ? "Respaldado por IA • Las conversaciones se envían a jasmelacosta@gmail.com"
                  : "AI Powered • Conversations sent to jasmelacosta@gmail.com"
                }
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FrontDeskChatbot;