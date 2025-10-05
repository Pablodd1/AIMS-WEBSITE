"use client";
import { useState } from "react";
const dict = {
    "h2": "Experience the Future of Medical Documentation",
    "p": "Join hundreds of medical professionals using AIMS to save hours, eliminate errors, and get paid faster. No credit card required. Try it free today.",
    btn1:"Subscribe",
    msg:"message",
    

}
const SupportForm = () => {
    // State for form fields and validation errors
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [clinic, setClinic] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({ email: "", phone: "", clinic: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // Basic form validation
    const validateForm = () => {
        let isValid = true;
        let emailError = "";
        let phoneError = "";
        let clinicError = "";
        let messageError = "";

        // Validate email
        if (!email) {
            emailError = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate phone (optional but could be added if needed)
        if (phone && !/^\d{10}$/.test(phone)) {
            phoneError = "Please enter a valid 10-digit phone number.";
            isValid = false;
        }

        // Validate clinic
        if (!clinic) {
            clinicError = "Clinic name is required.";
            isValid = false;
        }

        // Validate message
        if (!message) {
            messageError = "Message is required.";
            isValid = false;
        }

        setError({ email: emailError, phone: phoneError, clinic: clinicError, message: messageError });
        return isValid;
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form first
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/server-API/support", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, phone, clinic, message }),
            });

            if (response.ok) {
                setSuccessMessage("Thank you for reaching out. We will get back to you shortly!");
                setEmail("");
                setPhone("");
                setClinic("");
                setMessage("");
            } else {
                setError({ email: "Something went wrong. Please try again.", phone: "", clinic: "", message: "" });
            }
        } catch (error) {
            setError({ email: "Something went wrong. Please try again.", phone: "", clinic: "", message: "" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 border-t border-text/25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-primary">
                    {dict.h2}
                </h2>
                <p className="my-7 text-center max-w-2xl mx-auto text-gray-500">
                    {dict.p}
                </p>

                {successMessage && (
                    <div className="mt-4 text-green-600 text-center">{successMessage}</div>
                )}

                <form onSubmit={handleSubmit} className="my-8 max-w-md mx-auto grid grid-cols-1 gap-6">
                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${error.email ? "border-red-500" : ""}`}
                            placeholder="Email Address"
                        />
                        {error.email && <p className="text-sm text-red-500 mt-1">{error.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${error.phone ? "border-red-500" : ""}`}
                            placeholder="Phone Number (Optional)"
                        />
                        {error.phone && <p className="text-sm text-red-500 mt-1">{error.phone}</p>}
                    </div>

                    {/* Clinic Field */}
                    <div>
                        <input
                            type="text"
                            id="clinic"
                            name="clinic"
                            value={clinic}
                            onChange={(e) => setClinic(e.target.value)}
                            className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${error.clinic ? "border-red-500" : ""}`}
                            placeholder="Clinic Name"
                        />
                        {error.clinic && <p className="text-sm text-red-500 mt-1">{error.clinic}</p>}
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${error.message ? "border-red-500" : ""}`}
                            placeholder="Your Message"
                            rows={4}
                        />
                        {error.message && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-primary hover:bg-secondary text-white hover:text-black rounded-md shadow-md transition duration-300"
                    >
                        {isSubmitting ? "Sending..." : "Submit Support Request"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SupportForm;
