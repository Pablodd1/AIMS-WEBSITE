import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 my-18">
            <h1 className="text-3xl font-semibold text-center mb-6">Terms and Conditions</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Welcome to Our Website</h2>
                <p className="text-lg mt-2">
                    By using our website and services, you agree to be bound by these terms and conditions. Please read them carefully.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Use of Site</h2>
                <p className="text-lg mt-2">
                    You may only use this site to learn more about our AI medical scribe services. You may not use this site for any illegal
                    purpose or in a way that disrupts our services. We reserve the right to terminate or restrict your access to the site for
                    any reason at our discretion.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Medical Disclaimer</h2>
                <p className="text-lg mt-2">
                    The medical information provided on this website is for general informational purposes only. It should not be relied on to
                    make any medical decisions. Please consult your physician regarding any medical issues you may have.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Intellectual Property</h2>
                <p className="text-lg mt-2">
                    All content on this website, including text, graphics, logos, documents, data, images, videos, software, and other
                    materials, is the property of AI Medical Scribe and is protected by U.S. and international copyright and other intellectual
                    property laws. You may not modify, copy, distribute, transmit, reuse, publish, or create derivative works from this content.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Privacy Policy</h2>
                <p className="text-lg mt-2">
                    Please review our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a> to understand how we collect,
                    use, and share information from users on our website.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Disclaimers and Limitation of Liability</h2>
                <p className="text-lg mt-2">
                    This site and its content are provided on an "as is" basis. We make no warranties of any kind regarding the accuracy or
                    completeness of the information provided. We are not liable for any loss or damages related to your use of our site or
                    reliance on any content.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Governing Law and Jurisdiction</h2>
                <p className="text-lg mt-2">
                    These terms shall be governed by the laws of the State of California. Any disputes shall be handled exclusively in the
                    courts of Santa Clara County.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Changes to Terms</h2>
                <p className="text-lg mt-2">
                    We may update these terms periodically. Your continued use of our site indicates agreement with the revised terms.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-lg mt-2">
                    If you have any questions about these terms, please contact us at{' '}
                    <a href="mailto:jasmel@aimedicalscribe.com" className="text-blue-500 underline">jasmel@aimedicalscribe.com</a>.
                </p>
            </section>
        </div>
    );
};

export default Terms;
