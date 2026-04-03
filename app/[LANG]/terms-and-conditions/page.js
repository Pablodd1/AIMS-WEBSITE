import LegalDisclaimer from "@components/LegalDisclaimer";

export async function generateMetadata({ params }) {
  const lang = (await params).LANG || "en";
  return {
    title: lang === "es" ? "Terminos y Condiciones — AIMS" : "Terms and Conditions — AIMS",
    description: lang === "es" ? "Terminos y condiciones de AIMS, incluyendo avisos de FDA, Medicare, HIPAA y descargos de responsabilidad medica." : "Terms and conditions of AIMS, including FDA, Medicare, HIPAA notices and medical disclaimers.",
  };
}

const Terms = async ({ params }) => {
  const lang = (await params).LANG || "en";
  const t = lang === "es" ? {
    title: "Terminos y Condiciones",
    lastUpdated: "Ultima actualizacion: 3 de abril de 2026",
    intro: "Al acceder y utilizar el sitio web y los servicios de AIMS (AI Medical Scriber), usted acepta estar sujeto a estos Terminos y Condiciones. Lealos cuidadosamente antes de usar nuestros servicios.",
  } : {
    title: "Terms and Conditions",
    lastUpdated: "Last Updated: April 3, 2026",
    intro: "By accessing and using the AIMS (AI Medical Scriber) website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.",
  };

  return (
    <main className="relative pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[var(--text-primary)]">
          {t.title}
        </h1>
        <p className="text-center text-[var(--text-muted)] text-sm mb-10">{t.lastUpdated}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">1. {lang === "es" ? "Aceptacion de Terminos" : "Acceptance of Terms"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t.intro}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">2. {lang === "es" ? "Naturaleza del Servicio" : "Nature of Service"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS es una plataforma de asistencia administrativa con inteligencia artificial disenada para ayudar a los profesionales de la salud con documentacion clinica, gestion de registros y tareas administrativas. AIMS NO es un dispositivo medico, NO proporciona consejos medicos, diagnosticos o tratamientos, y NO reemplaza el juicio profesional de un proveedor de salud licenciado."
                : "AIMS is an AI-powered administrative assistance platform designed to help healthcare professionals with clinical documentation, records management, and administrative tasks. AIMS is NOT a medical device, does NOT provide medical advice, diagnoses, or treatments, and does NOT replace the professional judgment of a licensed healthcare provider."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">3. {lang === "es" ? "Aviso de la FDA" : "FDA Notice"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS no ha sido evaluado, aprobado o autorizado por la Administracion de Alimentos y Medicamentos de los Estados Unidos (FDA). AIMS no esta clasificado como un dispositivo medico bajo la Ley Federal de Alimentos, Medicamentos y Cosmeticos (21 U.S.C. § 321). Las funciones de asistencia clinica, extraccion de codigos y razonamiento clinico proporcionadas por AIMS son exclusivamente para propositos administrativos y de documentacion. No estan destinadas a diagnosticar, tratar, curar o prevenir ninguna enfermedad."
                : "AIMS has not been evaluated, cleared, or approved by the U.S. Food and Drug Administration (FDA). AIMS is not classified as a medical device under the Federal Food, Drug, and Cosmetic Act (21 U.S.C. § 321). The clinical assistance, code extraction, and clinical reasoning features provided by AIMS are solely for administrative and documentation purposes. They are not intended to diagnose, treat, cure, or prevent any disease."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">4. {lang === "es" ? "Aviso de Medicare y Facturacion" : "Medicare & Billing Notice"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS proporciona herramientas de asistencia para documentacion y codificacion unicamente. No envia reclamaciones a Medicare, Medicaid, o cualquier aseguradora en nombre de los proveedores. Todos los codigos de facturacion generados por AIMS deben ser revisados, verificados y aprobados por un profesional de salud calificado antes de su envio. El proveedor asume toda la responsabilidad por la precision de todas las reclamaciones enviadas a CMS o cualquier pagador. AIMS no garantiza el reembolso o la aprobacion de reclamaciones."
                : "AIMS provides documentation and coding assistance tools only. It does not submit claims to Medicare, Medicaid, or any insurance payer on behalf of providers. All billing codes generated by AIMS must be reviewed, verified, and approved by a qualified healthcare professional before submission. The provider bears full responsibility for the accuracy of all claims submitted to CMS or any payer. AIMS does not guarantee reimbursement or claim approval."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">5. {lang === "es" ? "Cumplimiento de HIPAA" : "HIPAA Compliance"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS implementa salvaguardas administrativas, tecnicas y fisicas disenadas para proteger la informacion de salud protegida (PHI) de acuerdo con HIPAA (45 CFR Partes 160 y 164). Sin embargo, el cumplimiento de HIPAA es una responsabilidad compartida. Las entidades cubiertas (proveedores de salud, planes de salud, centros de intercambio) deben ejecutar un Acuerdo de Asociado Comercial (BAA) con AIMS antes de usar la plataforma con PHI. AIMS no garantiza el cumplimiento de HIPAA sin un BAA firmado y la configuracion adecuada por parte de la entidad cubierta."
                : "AIMS implements administrative, technical, and physical safeguards designed to protect protected health information (PHI) in accordance with HIPAA (45 CFR Parts 160 and 164). However, HIPAA compliance is a shared responsibility. Covered entities (healthcare providers, health plans, clearinghouses) must execute a Business Associate Agreement (BAA) with AIMS before using the platform with PHI. AIMS does not guarantee HIPAA compliance without a signed BAA and proper configuration by the covered entity."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">6. {lang === "es" ? "Descargo de Responsabilidad Medica" : "Medical Disclaimer"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Toda la informacion y el contenido generados por la IA en esta plataforma son solo para propositos administrativos y de documentacion. No deben ser considerados como consejos medicos, diagnosticos o recomendaciones de tratamiento. Siempre consulte a un proveedor de salud licenciado para cualquier cuestion medica. AIMS no asume ninguna responsabilidad por decisiones medicas tomadas basandose en su contenido."
                : "All information and AI-generated content on this platform is for administrative and documentation purposes only. It should not be considered as medical advice, diagnosis, or treatment recommendations. Always consult a licensed healthcare provider for any medical matters. AIMS assumes no liability for medical decisions made based on its content."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">7. {lang === "es" ? "Uso del Sitio" : "Use of Site"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Puede usar este sitio solo para obtener informacion sobre nuestros servicios de asistencia administrativa con IA. No puede usar este sitio para cualquier proposito ilegal o de manera que interrumpa nuestros servicios. Nos reservamos el derecho de terminar o restringir su acceso al sitio por cualquier motivo a nuestra discrecion."
                : "You may only use this site to learn more about our AI administrative assistance services. You may not use this site for any illegal purpose or in a way that disrupts our services. We reserve the right to terminate or restrict your access to the site for any reason at our discretion."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">8. {lang === "es" ? "Propiedad Intelectual" : "Intellectual Property"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Todo el contenido en este sitio web, incluyendo texto, graficos, logotipos, documentos, datos, imagenes, videos, software y otros materiales, es propiedad de AIMS y esta protegido por las leyes de derechos de autor de EE. UU. e internacionales. No puede modificar, copiar, distribuir, transmitir, reutilizar, publicar o crear trabajos derivados de este contenido."
                : "All content on this website, including text, graphics, logos, documents, data, images, videos, software, and other materials, is the property of AIMS and is protected by U.S. and international copyright and other intellectual property laws. You may not modify, copy, distribute, transmit, reuse, publish, or create derivative works from this content."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">9. {lang === "es" ? "Descargos de Responsabilidad y Limitacion de Responsabilidad" : "Disclaimers and Limitation of Liability"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Este sitio y su contenido se proporcionan 'tal cual'. No hacemos garantias de ningun tipo con respecto a la precision o integridad de la informacion proporcionada. No somos responsables por cualquier perdida o dano relacionado con su uso de nuestro sitio o la confianza en cualquier contenido. En la medida maxima permitida por la ley, AIMS no sera responsable por danos indirectos, incidentales, especiales, consecuentes o punitivos."
                : "This site and its content are provided on an 'as is' basis. We make no warranties of any kind regarding the accuracy or completeness of the information provided. We are not liable for any loss or damages related to your use of our site or reliance on any content. To the maximum extent permitted by law, AIMS shall not be liable for any indirect, incidental, special, consequential, or punitive damages."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">10. {lang === "es" ? "Ley Aplicable y Jurisdiccion" : "Governing Law and Jurisdiction"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Estos terminos se regiran por las leyes del Estado de California. Cualquier disputa se manejara exclusivamente en los tribunales del Condado de Santa Clara."
                : "These terms shall be governed by the laws of the State of California. Any disputes shall be handled exclusively in the courts of Santa Clara County."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">11. {lang === "es" ? "Cambios a los Terminos" : "Changes to Terms"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Podemos actualizar estos terminos periodicamente. Su uso continuado de nuestro sitio indica acuerdo con los terminos revisados."
                : "We may update these terms periodically. Your continued use of our site indicates agreement with the revised terms."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">12. {lang === "es" ? "Contacto" : "Contact"}</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Si tiene alguna pregunta sobre estos terminos, contactenos en jasmel@aimedicalscribe.com."
                : "If you have any questions about these terms, please contact us at jasmel@aimedicalscribe.com."}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
          <LegalDisclaimer lang={lang} />
        </div>
      </div>
    </main>
  );
};

export default Terms;
