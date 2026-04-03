"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    FaHospital, FaBuilding, FaShoppingCart, FaIndustry,
    FaBalanceScale, FaHome, FaHotel, FaGraduationCap,
    FaLandmark, FaBrain, FaRocket, FaChartLine, FaCogs, FaShieldAlt
} from "react-icons/fa";

const getIndustries = (lang) => [
    {
        icon: <FaHospital />,
        name: lang === "es" ? "Salud" : "Healthcare",
        description: lang === "es" ? "Documentación clínica, triaje de pacientes, automatización de facturación, telemedicina IA" : "Clinical documentation, patient triage, billing automation, telemedicine AI"
    },
    {
        icon: <FaBuilding />,
        name: lang === "es" ? "Finanzas y Banca" : "Finance & Banking",
        description: lang === "es" ? "Detección de fraude, evaluación de riesgos, cumplimiento automatizado, análisis de clientes" : "Fraud detection, risk assessment, automated compliance, customer analytics"
    },
    {
        icon: <FaShoppingCart />,
        name: lang === "es" ? "Comercio Minorista y Electrónico" : "Retail & E-Commerce",
        description: lang === "es" ? "Optimización de inventario, recomendaciones personalizadas, previsión de demanda" : "Inventory optimization, personalized recommendations, demand forecasting"
    },
    {
        icon: <FaIndustry />,
        name: lang === "es" ? "Manufactura" : "Manufacturing",
        description: lang === "es" ? "Mantenimiento predictivo, control de calidad, optimización de cadena de suministro" : "Predictive maintenance, quality control, supply chain optimization"
    },
    {
        icon: <FaBalanceScale />,
        name: lang === "es" ? "Servicios Legales" : "Legal Services",
        description: lang === "es" ? "Análisis de contratos, investigación de casos, revisión de documentos, monitoreo de cumplimiento" : "Contract analysis, case research, document review, compliance monitoring"
    },
    {
        icon: <FaHome />,
        name: lang === "es" ? "Bienes Raíces" : "Real Estate",
        description: lang === "es" ? "Calificación de leads, emparejamiento de propiedades, tours virtuales, análisis de mercado" : "Lead qualification, property matching, virtual tours, market analysis"
    },
    {
        icon: <FaHotel />,
        name: lang === "es" ? "Hotelería" : "Hospitality",
        description: lang === "es" ? "Automatización de servicios al huésped, optimización de reservas, análisis de sentimiento" : "Guest services automation, booking optimization, sentiment analysis"
    },
    {
        icon: <FaGraduationCap />,
        name: lang === "es" ? "Educación" : "Education",
        description: lang === "es" ? "Aprendizaje personalizado, servicios estudiantiles, automatización de calificaciones, retención" : "Personalized learning, student services, grading automation, retention"
    },
    {
        icon: <FaLandmark />,
        name: lang === "es" ? "Gobierno" : "Government",
        description: lang === "es" ? "Servicios ciudadanos, procesamiento de documentos, detección de fraude, cumplimiento" : "Citizen services, document processing, fraud detection, compliance"
    }
];

const getPhases = (lang) => [
    {
        number: "01",
        title: lang === "es" ? "Descubrimiento y Evaluación" : "Discovery & Assessment",
        description: lang === "es" ? "Analizamos sus procesos de negocio, infraestructura de datos y objetivos para identificar las oportunidades de IA de mayor impacto." : "We analyze your business processes, data infrastructure, and goals to identify the highest-impact AI opportunities.",
        deliverables: lang === "es" ? ["Mapeo de procesos de negocio", "Auditoría de preparación de datos", "Evaluación de madurez IA", "Proyecciones de ROI"] : ["Business process mapping", "Data readiness audit", "AI maturity assessment", "ROI projections"],
        icon: <FaBrain />
    },
    {
        number: "02",
        title: lang === "es" ? "Estrategia y Hoja de Ruta" : "Strategy & Roadmap",
        description: lang === "es" ? "Estrategia de IA personalizada alineada con sus objetivos, con casos de uso priorizados y un cronograma claro de implementación." : "Custom AI strategy aligned with your objectives, with prioritized use cases and a clear implementation timeline.",
        deliverables: lang === "es" ? ["Documento de estrategia IA", "Priorización de casos de uso", "Selección de tecnología", "Hoja de ruta de implementación"] : ["AI strategy document", "Use case prioritization", "Technology stack selection", "Implementation roadmap"],
        icon: <FaRocket />
    },
    {
        number: "03",
        title: lang === "es" ? "Prueba de Concepto" : "Proof of Concept",
        description: lang === "es" ? "Valide soluciones con proyectos piloto antes del despliegue a gran escala. Mida resultados y refine el enfoque." : "Validate solutions with targeted pilot projects before full-scale deployment. Measure results and refine approach.",
        deliverables: lang === "es" ? ["Desarrollo de MVP", "Evaluación de rendimiento", "Integración de retroalimentación", "Recomendación de avance"] : ["MVP development", "Performance benchmarking", "User feedback integration", "Go/no-go recommendation"],
        icon: <FaChartLine />
    },
    {
        number: "04",
        title: lang === "es" ? "Implementación e Integración" : "Implementation & Integration",
        description: lang === "es" ? "Despliegue de soluciones de IA en sus flujos existentes con mínima interrupción. Capacitación completa y gestión del cambio." : "Deploy AI solutions into your existing workflows with minimal disruption. Full training and change management support.",
        deliverables: lang === "es" ? ["Despliegue en producción", "Integración de sistemas", "Capacitación del personal", "Gestión del cambio"] : ["Production deployment", "System integration", "Staff training", "Change management"],
        icon: <FaCogs />
    },
    {
        number: "05",
        title: lang === "es" ? "Optimización y Escalamiento" : "Optimization & Scaling",
        description: lang === "es" ? "Monitoreo continuo, refinamiento de modelos y expansión a nuevos casos de uso. Asegure el éxito y ROI a largo plazo." : "Continuous monitoring, model refinement, and expansion to new use cases. Ensure long-term AI success and ROI.",
        deliverables: lang === "es" ? ["Monitoreo de rendimiento", "Reentrenamiento de modelos", "Expansión de funciones", "Reportes de ROI"] : ["Performance monitoring", "Model retraining", "Feature expansion", "ROI reporting"],
        icon: <FaShieldAlt />
    }
];

const AIConsulting = ({ lang = "en" }) => {
    const industries = getIndustries(lang);
    const phases = getPhases(lang);

    return (
        <section id="ai-consulting" className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        {lang === "es" ? "Consultoría IA para Todas las Industrias" : "AI Consulting for All Industries"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-primary)]"
                    >
                        {lang === "es" ? "Transforme su Negocio con " : "Transform Your Business with "}<span className="text-gradient">IA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg px-4"
                    >
                        {lang === "es"
                            ? "De la estrategia a la implementación, AIMS ofrece soluciones de IA de principio a fin que impulsan resultados medibles. Hemos ayudado a empresas en más de 9 industrias a reducir costos un 40%, aumentar eficiencia un 60% y desbloquear nuevas fuentes de ingreso."
                            : "From strategy to implementation, AIMS delivers end-to-end AI solutions that drive measurable results. We've helped businesses across 9+ industries reduce costs by 40%, increase efficiency by 60%, and unlock new revenue streams."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-6 rounded-2xl hover-lift group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                    {industry.name}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-[var(--text-primary)]"
                    >
                        {lang === "es" ? "Nuestro Proceso Comprobado de " : "Our Proven "}<span className="text-gradient">{lang === "es" ? "5 Fases" : "5-Phase Process"}</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base px-4"
                    >
                        {lang === "es"
                            ? "Desde el descubrimiento inicial hasta la optimización continua, lo guiamos en cada paso de su viaje de transformación con IA."
                            : "From initial discovery to ongoing optimization, we guide you through every step of your AI transformation journey."}
                    </motion.p>
                </div>

                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.number}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-full blur-3xl" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                                <div className="md:col-span-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl">
                                            {phase.icon}
                                        </div>
                                        <span className="text-4xl font-extrabold text-[var(--accent-primary)]/20">
                                            {phase.number}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                        {phase.title}
                                    </h4>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                        {phase.description}
                                    </p>
                                </div>
                                <div className="md:col-span-1">
                                    <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wider">
                                        {lang === "es" ? "Entregables" : "Deliverables"}
                                    </h5>
                                    <ul className="space-y-1.5">
                                        {phase.deliverables.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                <svg className="w-4 h-4 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href={`/${lang}/get-started`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <FaRocket />
                        {lang === "es" ? "Inicie su Transformación IA" : "Start Your AI Transformation"}
                    </a>
                    <p className="mt-4 text-sm text-[var(--text-muted)]">
                        {lang === "es" ? "Consulta gratuita • Sin compromiso • Resultados en 90 días" : "Free consultation • No commitment • Results in 90 days"}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AIConsulting;
