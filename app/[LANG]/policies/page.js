import LegalDisclaimer from "@components/LegalDisclaimer";

export async function generateMetadata({ params }) {
  const lang = (await params).LANG || "en";
  return {
    title: lang === "es" ? "Politica de Privacidad — AIMS" : "Privacy Policy — AIMS",
    description: lang === "es" ? "Politica de privacidad de AIMS, cumplimiento de HIPAA, CCPA/CPRA y proteccion de datos." : "AIMS privacy policy, HIPAA compliance, CCPA/CPRA compliance, and data protection.",
  };
}

const PrivacyPolicy = async ({ params }) => {
  const lang = (await params).LANG || "en";

  return (
    <main className="relative pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[var(--text-primary)]">
          {lang === "es" ? "Politica de Privacidad" : "Privacy Policy"}
        </h1>
        <p className="text-center text-[var(--text-muted)] text-sm mb-10">
          {lang === "es" ? "Ultima actualizacion: 3 de abril de 2026" : "Last Updated: April 3, 2026"}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              1. {lang === "es" ? "Introduccion" : "Introduction"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "AIMS (AI Medical Scriber) ('nosotros', 'nuestro', o 'nos') se compromete a proteger la privacidad de nuestros usuarios. Esta Politica de Privacidad describe como recopilamos, usamos, almacenamos y compartimos su informacion cuando utiliza nuestro sitio web y servicios. Esta politica cumple con HIPAA, CCPA/CPRA, y otras leyes de privacidad aplicables."
                : "AIMS (AI Medical Scriber) ('we', 'our', or 'us') is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, store, and share your information when you use our website and services. This policy complies with HIPAA, CCPA/CPRA, and other applicable privacy laws."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              2. {lang === "es" ? "Informacion que Recopilamos" : "Information We Collect"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es" ? "Recopilamos los siguientes tipos de informacion:" : "We collect the following types of information:"}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Informacion de la cuenta (nombre, email, organizacion)" : "Account information (name, email, organization)"}</li>
              <li>{lang === "es" ? "Informacion de uso y analiticas del sitio" : "Site usage data and analytics"}</li>
              <li>{lang === "es" ? "Informacion tecnica (direccion IP, tipo de navegador, dispositivo)" : "Technical information (IP address, browser type, device)"}</li>
              <li>{lang === "es" ? "Informacion de salud protegida (PHI) solo cuando se proporciona a traves de un Acuerdo de Asociado Comercial (BAA) ejecutado" : "Protected Health Information (PHI) only when provided through an executed Business Associate Agreement (BAA)"}</li>
              <li>{lang === "es" ? "Cookies y tecnologias de seguimiento (vea nuestra Politica de Cookies)" : "Cookies and tracking technologies (see our Cookie Policy)"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              3. {lang === "es" ? "Cumplimiento de HIPAA" : "HIPAA Compliance"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS se compromete a proteger toda la Informacion de Salud Protegida (PHI) de acuerdo con la Ley de Portabilidad y Responsabilidad de Seguros Medicos (HIPAA) de 1996 (45 CFR Partes 160 y 164), incluyendo las modificaciones de HITECH y la Regla Omnibus de 2013."
                : "AIMS is committed to protecting all Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) of 1996 (45 CFR Parts 160 and 164), including the HITECH Act modifications and the 2013 Omnibus Rule."}
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Implementamos las siguientes salvaguardas:"
                : "We implement the following safeguards:"}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Salvaguardas administrativas: Evaluaciones de riesgo regulares, capacitacion de empleados, politicas de acceso a datos" : "Administrative safeguards: Regular risk assessments, employee training, data access policies"}</li>
              <li>{lang === "es" ? "Salvaguardas tecnicas: Cifrado AES-256 en reposito y transito, control de acceso, registros de auditoria, autenticacion de dos factores" : "Technical safeguards: AES-256 encryption at rest and in transit, access controls, audit logs, two-factor authentication"}</li>
              <li>{lang === "es" ? "Salvaguardas fisicas: Centros de datos seguros, control de acceso fisico, planes de recuperacion ante desastres" : "Physical safeguards: Secure data centers, physical access controls, disaster recovery plans"}</li>
            </ul>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-3">
              {lang === "es"
                ? "Las entidades cubiertas deben ejecutar un Acuerdo de Asociado Comercial (BAA) con AIMS antes de transmitir cualquier PHI. Contactenos en jasmel@aimedicalscribe.com para solicitar un BAA."
                : "Covered entities must execute a Business Associate Agreement (BAA) with AIMS before transmitting any PHI. Contact us at jasmel@aimedicalscribe.com to request a BAA."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              4. {lang === "es" ? "Politica de Retencion y Eliminacion de Datos" : "Data Retention and Disposal Policy"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS retiene los registros de documentacion medica por un minimo de 6 anos desde la fecha de servicio, salvo solicitudes o problemas pendientes. Despues de este periodo:"
                : "AIMS retains medical documentation records for a minimum of 6 years from the date of service barring any outstanding requests or issues. After this period:"}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Los registros se eliminan de manera compatible con HIPAA mediante la eliminacion permanente de PHI electronica" : "Records are disposed of in a HIPAA-compliant manner by permanently deleting electronic PHI"}</li>
              <li>{lang === "es" ? "Los registros de respaldo electronicos pueden almacenarse por periodos mas largos para recuperacion ante desastres pero se desidentifican si se retienen mas de 6 anos" : "Electronic backup records may be stored for longer periods for disaster recovery but are de-identified if retained past 6 years"}</li>
              <li>{lang === "es" ? "Excepcion: Los registros sujetos a retenciones de litigios se retendran hasta que expire la retencion" : "Exception: Records subject to litigation holds will be retained until the hold expires"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              5. {lang === "es" ? "Politica de Aseguramiento de Calidad" : "Quality Assurance Policy"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "AIMS sigue procedimientos rigurosos de aseguramiento de calidad (QA) para la documentacion generada por IA:"
                : "AIMS follows rigorous quality assurance (QA) procedures for AI-generated documentation:"}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Verificaciones automatizadas: Los algoritmos de NLP escanean todas las notas para detectar errores potenciales" : "Automated checks: NLP algorithms scan all notes to detect potential errors"}</li>
              <li>{lang === "es" ? "Auditoria manual: Una muestra de notas de visita es revisada mensualmente por nuestros especialistas en documentacion clinica" : "Manual auditing: A sample of visit notes are reviewed monthly by our clinical documentation specialists"}</li>
              <li>{lang === "es" ? "Objetivo de precision: Nuestro objetivo es 98% de precision en elementos clave de documentacion" : "Target accuracy: Our target is 98% accuracy on key documentation elements"}</li>
              <li>{lang === "es" ? "Retroalimentacion del medico: Los medicos pueden reportar cualquier error encontrado despues del envio" : "Physician feedback: Doctors can report any errors found after submission"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              6. {lang === "es" ? "Como Usamos su Informacion" : "How We Use Your Information"}
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Proporcionar y mejorar nuestros servicios" : "To provide and improve our services"}</li>
              <li>{lang === "es" ? "Procesar transacciones y enviar notificaciones relacionadas" : "To process transactions and send related notifications"}</li>
              <li>{lang === "es" ? "Responder a consultas y proporcionar soporte al cliente" : "To respond to inquiries and provide customer support"}</li>
              <li>{lang === "es" ? "Enviar comunicaciones de marketing (con su consentimiento)" : "To send marketing communications (with your consent)"}</li>
              <li>{lang === "es" ? "Cumplir con obligaciones legales y regulatorias" : "To comply with legal and regulatory obligations"}</li>
              <li>{lang === "es" ? "Prevenir fraude y mejorar la seguridad" : "To prevent fraud and improve security"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              7. {lang === "es" ? "Compartir su Informacion" : "Sharing Your Information"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "No vendemos su informacion personal. Podemos compartir su informacion con: proveedores de servicios que operan en nuestro nombre (sujeto a acuerdos de confidencialidad), autoridades legales cuando sea requerido por ley, o en conexion con una fusion, adquisicion o venta de activos. Toda PHI compartida esta sujeta a un BAA ejecutado."
                : "We do not sell your personal information. We may share your information with: service providers operating on our behalf (subject to confidentiality agreements), legal authorities when required by law, or in connection with a merger, acquisition, or sale of assets. Any PHI shared is subject to an executed BAA."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              8. {lang === "es" ? "Sus Derechos de Privacidad" : "Your Privacy Rights"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {lang === "es"
                ? "Dependiendo de su ubicacion, puede tener los siguientes derechos:"
                : "Depending on your location, you may have the following rights:"}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] text-sm">
              <li>{lang === "es" ? "Acceder, corregir o eliminar su informacion personal" : "Access, correct, or delete your personal information"}</li>
              <li>{lang === "es" ? "Oponerse al procesamiento de su informacion" : "Object to the processing of your information"}</li>
              <li>{lang === "es" ? "Solicitar la portabilidad de sus datos" : "Request portability of your data"}</li>
              <li>{lang === "es" ? "Retirar el consentimiento en cualquier momento" : "Withdraw consent at any time"}</li>
              <li>{lang === "es" ? "Presentar una queja ante una autoridad de supervision" : "File a complaint with a supervisory authority"}</li>
              <li>{lang === "es" ? "Derechos bajo HIPAA: Acceder a su PHI, solicitar correcciones, recibir un aviso de practicas de privacidad" : "HIPAA rights: Access your PHI, request amendments, receive a notice of privacy practices"}</li>
              <li>{lang === "es" ? "Derechos bajo CCPA/CPRA (California): Saber que datos se recopilan, eliminar datos, optar por no vender/compartir datos" : "CCPA/CPRA rights (California): Know what data is collected, delete data, opt out of sale/sharing of data"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              9. {lang === "es" ? "Seguridad de Datos" : "Data Security"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Implementamos medidas de seguridad tecnicas y organizativas disenadas para proteger su informacion contra acceso no autorizado, alteracion, divulgacion o destruccion. Estas incluyen cifrado AES-256, autenticacion de dos factores, monitoreo continuo de seguridad y evaluaciones regulares de vulnerabilidades. Sin embargo, ningun metodo de transmision por Internet o almacenamiento electronico es 100% seguro."
                : "We implement technical and organizational security measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. These include AES-256 encryption, two-factor authentication, continuous security monitoring, and regular vulnerability assessments. However, no method of transmission over the Internet or electronic storage is 100% secure."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              10. {lang === "es" ? "Aviso sobre IA y Datos" : "AI & Data Notice"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Nuestros servicios utilizan inteligencia artificial para procesar y analizar datos. Los modelos de IA se entrenan con datos desidentificados y agregados. No utilizamos PHI identificable para entrenar modelos de IA sin consentimiento expreso. Los usuarios pueden solicitar la exclusion del entrenamiento de IA contactando a privacy@aimedicalscribe.com."
                : "Our services use artificial intelligence to process and analyze data. AI models are trained on de-identified and aggregated data. We do not use identifiable PHI to train AI models without express consent. Users may opt out of AI training by contacting privacy@aimedicalscribe.com."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              11. {lang === "es" ? "Cambios a esta Politica" : "Changes to This Policy"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Podemos actualizar esta Politica de Privacidad periodicamente. Le notificaremos sobre cambios significativos publicando la nueva politica en esta pagina y actualizando la fecha de 'Ultima actualizacion'. Le recomendamos revisar esta politica periodicamente."
                : "We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the 'Last Updated' date. We encourage you to review this policy periodically."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              12. {lang === "es" ? "Contacto" : "Contact"}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {lang === "es"
                ? "Si tiene preguntas sobre esta Politica de Privacidad, contactenos en: jasmel@aimedicalscribe.com"
                : "If you have questions about this Privacy Policy, contact us at: jasmel@aimedicalscribe.com"}
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

export default PrivacyPolicy;
