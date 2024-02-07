import React from 'react';

export function PolicyPage() {
    return (
        <>
            <div className="policy-page">
                <h1>Privacy Policy</h1>
                <p>
                    At AI Medical Scribe, we are committed to protecting the privacy and security of all protected health information (PHI) in accordance with HIPAA regulations. Our HIPAA compliance program covers aspects such as:

                    Minimum necessary access - Our AI scribes will only access, use, or disclose the minimum necessary PHI required to perform their duties. Access is restricted based on role.
                    Administrative, physical, and technical safeguards - PHI is secured through access controls, encryption, firewalls, employee training, and other safeguards. Our Security Officer oversees implementation.
                    Business associate agreements - We sign HIPAA business associate agreements with our customers and vendors whenever PHI access is required.
                    Breach notification procedures - We have procedures in place to detect, respond to, and notify affected parties in case of a PHI breach as required by HIPAA.
                    Patients can read our full Notice of Privacy Practices on our website or request a copy for more details on our privacy program.

                    Data Retention and Disposal Policy

                    AI Medical Scribe retains medical documentation records for a minimum of 6 years from the date of service barring any outstanding requests or issues. After this retention period:

                    Records are disposed of in a HIPAA-compliant manner by shredding paper records and permanently deleting electronic PHI.
                    Our Compliance Officer oversees proper disposal procedures and maintains documentation of destruction records.
                    Backup electronic records may be stored for longer periods for disaster recovery purposes but are de-identified if retained past 6 years.
                    Exception: Records subject to litigation holds will be retained until the hold expires.
                    Our full Data Retention and Disposal policy contains further details on our archiving, storage, and destruction procedures.

                    Quality Assurance Policy

                    AI Medical Scribe follows rigorous quality assurance (QA) procedures for AI-generated encounter documentation:

                    Automated checks: NLP algorithms scan all notes to detect any potential errors or inconsistencies. Feedback loops improve model accuracy.
                    Manual auditing: A sample of visit notes are reviewed by our clinical documentation specialists monthly. Accuracy metrics are tracked.
                    Target accuracy: Our target is 98% accuracy on key documentation elements like medications, diagnosis codes, symptoms, etc.
                    Error correction: Any errors detected during QA reviews are immediately corrected by our specialists prior to finalizing documentation.
                    Physician feedback: Doctors can report any errors found after submission. Our team addresses concerns and improves the AI models.
                    Our comprehensive QA framework ensures high-quality documentation that minimizes downstream issues. Please refer to our QA Procedures Manual for more details.
                </p>
            </div>
        </>
    );
}
export function TermsPage() {
    return (
        <><div className="policy-page">
            <h1>Terms and Conditions</h1>
            <p>
                Welcome to our website. By using our website and services, you agree to be bound by these terms and conditions. Please read them carefully.

                Use of Site

                You may only use this site to learn more about our AI medical scribe services. You may not use this site for any illegal purpose or in a way that disrupts our services. We reserve the right to terminate or restrict your access to the site for any reason at our discretion.

                Medical Disclaimer

                The medical information provided on this website is for general informational purposes only. It should not be relied on to make any medical decisions. Please consult your physician regarding any medical issues you may have.

                Intellectual Property

                All content on this website, including text, graphics, logos, documents, data, images, videos, software and other materials, is the property of AI Medical Scribe and is protected by U.S. and international copyright and other intellectual property laws. You may not modify, copy, distribute, transmit, reuse, publish or create derivative works from this content.

                Privacy Policy

                Please review our Privacy Policy to understand how we collect, use and share information from users on our website.

                Disclaimers and Limitation of Liability

                This site and its content are provided on an "as is" basis. We make no warranties of any kind regarding the accuracy or completeness of the information provided. We are not liable for any loss or damages related to your use of our site or reliance on any content.

                Governing Law and Jurisdiction

                These terms shall be governed by the laws of the State of California. Any disputes shall be handled exclusively in the courts of Santa Clara County.

                Changes to Terms

                We may update these terms periodically. Your continued use of our site indicates agreement with the revised terms.

                Contact Us

                If you have any questions about these terms, please contact us at <a href='mailto:jasmel@aimedicalscribe.com' >jasmel@aimedicalscribe.com</a>.
            </p>
        </div>
        </>

    );
}
