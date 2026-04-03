"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaPhoneAlt, FaComments, FaCalendarCheck, FaHeadset,
    FaRobot, FaMicrophone, FaChartBar, FaGlobe, FaClock, FaCheckCircle
} from "react-icons/fa";

const getFeatures = (lang) => [
    {
        icon: <FaPhoneAlt />,
        title: lang === "es" ? "Llamadas con IA por Voz" : "AI Voice Calls",
        description: lang === "es" ? "Maneje llamadas entrantes y salientes con conversaciones naturales y humanas. Nunca pierda un lead." : "Handle inbound and outbound calls with natural, human-like conversations. Never miss a lead again."
    },
    {
        icon: <FaComments />,
        title: lang === "es" ? "Chat y Mensajería en Vivo" : "Live Chat & Messaging",
        description: lang === "es" ? "Respuestas instantáneas en chat web, SMS, WhatsApp y redes sociales — 24/7." : "Instant responses on website chat, SMS, WhatsApp, and social media — 24/7."
    },
    {
        icon: <FaCalendarCheck />,
        title: lang === "es" ? "Programación Inteligente" : "Smart Scheduling",
        description: lang === "es" ? "Reserve, reprograme y cancele citas automáticamente con integración de calendario." : "Book, reschedule, and cancel appointments automatically with calendar integration."
    },
    {
        icon: <FaHeadset />,
        title: lang === "es" ? "Enrutamiento Inteligente de Llamadas" : "Intelligent Call Routing",
        description: lang === "es" ? "Entienda la intención del llamador y enrute al departamento o persona correcta al instante." : "Understand caller intent and route to the right department or person instantly."
    },
    {
        icon: <FaRobot />,
        title: lang === "es" ? "Calificación de Leads" : "Lead Qualification",
        description: lang === "es" ? "Pre-califique leads con preguntas personalizadas y puntúelos antes de pasarlos a ventas." : "Pre-qualify leads with custom questions and score them before handing off to sales."
    },
    {
        icon: <FaMicrophone />,
        title: lang === "es" ? "IA de Voz con Acentos" : "Voice AI with Accents",
        description: lang === "es" ? "Soporte multiidioma con reconocimiento natural de acentos para negocios globales." : "Multi-language support with natural accent recognition for global businesses."
    },
    {
        icon: <FaChartBar />,
        title: lang === "es" ? "Panel de Analíticas" : "Analytics Dashboard",
        description: lang === "es" ? "Rastree volúmenes de llamadas, tasas de conversión, satisfacción del cliente y ROI en tiempo real." : "Track call volumes, conversion rates, customer satisfaction, and ROI in real-time."
    },
    {
        icon: <FaGlobe />,
        title: lang === "es" ? "Multi-Canal" : "Multi-Channel",
        description: lang === "es" ? "Teléfono, chat web, SMS, email, redes sociales — un asistente IA en todos los canales." : "Phone, web chat, SMS, email, social media — one AI assistant across all channels."
    }
];

const getUseCases = (lang) => [
    {
        industry: lang === "es" ? "Salud" : "Healthcare",
        tasks: lang === "es" ? ["Programación de citas de pacientes", "Verificación de seguros", "Solicitudes de recetas", "Enrutamiento de triaje de síntomas"] : ["Patient appointment scheduling", "Insurance verification", "Prescription refill requests", "Symptom triage routing"]
    },
    {
        industry: lang === "es" ? "Bienes Raíces" : "Real Estate",
        tasks: lang === "es" ? ["Manejo de consultas de propiedades", "Programación de visitas", "Calificación de leads", "Pre-evaluación hipotecaria"] : ["Property inquiry handling", "Showing scheduling", "Lead qualification", "Mortgage pre-screening"]
    },
    {
        industry: lang === "es" ? "Legal" : "Legal",
        tasks: lang === "es" ? ["Evaluación de admisión de casos", "Programación de consultas", "Actualizaciones de estado de documentos", "Seguimiento con clientes"] : ["Case intake screening", "Consultation booking", "Document status updates", "Client follow-ups"]
    },
    {
        industry: lang === "es" ? "Comercio Minorista" : "Retail",
        tasks: lang === "es" ? ["Consultas de estado de pedidos", "Recomendaciones de productos", "Procesamiento de devoluciones", "Soporte de programa de lealtad"] : ["Order status inquiries", "Product recommendations", "Return processing", "Loyalty program support"]
    },
    {
        industry: lang === "es" ? "Hotelería" : "Hospitality",
        tasks: lang === "es" ? ["Gestión de reservaciones", "Servicios de conserjería", "Solicitudes de huéspedes", "Respuestas a reseñas"] : ["Reservation management", "Concierge services", "Guest requests", "Review responses"]
    },
    {
        industry: lang === "es" ? "Finanzas" : "Finance",
        tasks: lang === "es" ? ["Consultas de cuentas", "Procesamiento de pagos", "Alertas de fraude", "Info de productos financieros"] : ["Account inquiries", "Payment processing", "Fraud alerts", "Financial product info"]
    }
];

const getStats = (lang) => [
    { value: "98%", label: lang === "es" ? "Tasa de Respuesta" : "Call Answer Rate" },
    { value: "24/7", label: lang === "es" ? "Disponibilidad" : "Availability" },
    { value: "60%", label: lang === "es" ? "Reducción de Costos" : "Cost Reduction" },
    { value: "3x", label: lang === "es" ? "Más Leads Capturados" : "More Leads Captured" }
];

const VirtualFrontDesk = ({ lang = "en" }) => {
    const [activeTab, setActiveTab] = useState(0);
    const features = getFeatures(lang);
    const useCases = getUseCases(lang);
    const stats = getStats(lang);

    return (
        <section id="virtual-front-desk" className="relative overflow-hidden py-20 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/3 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        {lang === "es" ? "Próximamente" : "Coming Soon"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-primary)]"
                    >
                        {lang === "es" ? "Asistente de " : "AI Virtual "}<span className="text-gradient">{lang === "es" ? "Recepción Virtual IA" : "Front Desk Assistant"}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg px-4"
                    >
                        {lang === "es"
                            ? "Su recepcionista con IA que maneja llamadas, chats, programación y consultas de clientes con conversaciones humanas — 24 horas al día, 7 días a la semana, 365 días al año."
                            : "Your AI-powered receptionist that handles calls, chats, scheduling, and customer inquiries with human-like conversations — 24 hours a day, 7 days a week, 365 days a year."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center glass p-6 rounded-2xl"
                        >
                            <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--text-secondary)] font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-6 rounded-2xl hover-lift group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="glass rounded-2xl p-8 mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
                        {lang === "es" ? "Casos de Uso por Industria" : "Industry Use Cases"}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {useCases.map((useCase, index) => (
                            <button
                                key={useCase.industry}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeTab === index
                                        ? "bg-[var(--accent-primary)] text-white"
                                        : "bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                }`}
                            >
                                {useCase.industry}
                            </button>
                        ))}
                    </div>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h4 className="text-xl font-bold text-[var(--accent-primary)] mb-4 text-center">
                            {useCases[activeTab].industry}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {useCases[activeTab].tasks.map((task) => (
                                <div key={task} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--glass-bg)]">
                                    <FaCheckCircle className="text-[var(--accent-primary)] flex-shrink-0" />
                                    <span className="text-sm text-[var(--text-secondary)]">{task}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaClock className="text-[var(--accent-primary)] text-2xl" />
                            <h4 className="text-xl font-bold text-[var(--text-primary)]">
                                {lang === "es" ? "Obtenga Acceso Anticipado" : "Get Early Access"}
                            </h4>
                        </div>
                        <p className="text-[var(--text-secondary)] mb-6">
                            {lang === "es"
                                ? "Sea de los primeros en experimentar el Asistente de Recepción Virtual IA. Únase a nuestra lista de espera y obtenga acceso exclusivo con precios especiales."
                                : "Be among the first to experience the AI Virtual Front Desk Assistant. Join our waitlist and get exclusive early access with special pricing."}
                        </p>
                        <a
                            href={`/${lang}/get-started`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <FaPhoneAlt />
                            {lang === "es" ? "Únase a la Lista de Espera" : "Join the Waitlist"}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VirtualFrontDesk;
