"use client";
import { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";

const SubscribeForm = ({ dict = {} }) => {
  // State for form fields and validation errors
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState({ email: "", fullName: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Basic form validation
  const validateForm = () => {
    let isValid = true;
    let emailError = "";
    let fullNameError = "";

    // Validate email
    if (!email) {
      emailError = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate full name
    if (!fullName) {
      fullNameError = "Full name is required.";
      isValid = false;
    }

    setError({ email: emailError, fullName: fullNameError });
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
      const response = await fetch("/server-API/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName }),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for subscribing!");
        setEmail("");
        setFullName("");
      } else {
        setError({
          email: "Something went wrong. Please try again.",
          fullName: "",
        });
      }
    } catch (error) {
      setError({
        email: "Something went wrong. Please try again.",
        fullName: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" mx-auto max-w-4/5 py-32 lg:py-55 flex items-center justify-center bg-gray-50 border-y border-text/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary">
          {dict.h2}
        </h2>
        <p className="my-7 text-center max-w-2xl mx-auto text-gray-500">
          {dict.p}
        </p>

        {successMessage && (
          <div className="mt-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className=" my-animi-all  max-w-md mx-auto grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-2 items-center justify-evenly"
        >
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${
                error.email ? "border-red-500" : ""
              }`}
              placeholder={dict.email}
            />
            {error.email && (
              <p className="text-sm text-red-500 mt-1">{error.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`mt-2 p-3 block w-full border-b-4 border-gray-300 outline-0 focus:border-primary ${
                error.fullName ? "border-red-500" : ""
              }`}
              placeholder={dict.fullName}
            />
            {error.fullName && (
              <p className="text-sm text-red-500 mt-1">{error.fullName}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className=" col-span-full px-6 py-2 bg-primary hover:bg-secondary text-white hover:text-black rounded-md shadow-md  transition duration-300"
          >
            {isSubmitting ? (
              <RiLoader2Line className="mx-auto my-animi  animate-spin" />
            ) : (
              dict.btn1
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;
