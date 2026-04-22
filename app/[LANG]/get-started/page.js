"use client";
import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import PhoneNumberInput from "./phone-input";
import clsx from "clsx";
import { adsOptions } from "@assets/data/resources";
import AIIcon from "@utils/AIIcon";

const OrganizationForm = ({ langDict }) => {
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phoneNumber: "",
    subscription: false,
    HaveMS: "",
    ehrEmr: "",
    HaveCmpany: "",
    ExperiancedUser: "",
    billing: "trial",
    referal: "",
  });

  const handleUpdate = (name, value) =>
    setUser((prev) => ({ ...prev, [name]: value }));

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "organization",
    "phoneNumber",
  ];
  const isValid =
    requiredFields.every((f) => user[f].trim() !== "") &&
    !emailError &&
    policyAccepted &&
    !sending;

  const validateEmail = (val) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setEmailError(!regex.test(val));
  };

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      phoneNumber: "",
      ehrEmr: "",
      subscription: false,
      HaveMS: "",
      HaveCmpany: "",
      ExperiancedUser: "",
      billing: "trial",
      referal: "",
    });
    setPolicyAccepted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);
    try {
      const res = await fetch(`/server-API/create-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setAlert({
        show: true,
        type: data.status === "success" ? "success" : "error",
        msg: data.message || "Request processed.",
      });
      if (data.status === "success") resetForm();
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
      setTimeout(() => setAlert({ show: false, type: "", msg: "" }), 4000);
    }
  };

  const inputClass = (hasError) =>
    clsx(
      "p-3 w-full border-b-2 outline-none  duration-300",
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-gray-300 focus:border-primary",
    );

  return (
    <main className="relative ">
      <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen h-[1400px] w-full absolute left-0 -top-20 -z-10 " />
      <AIIcon
        className={
          " self-start mt-auto mr-10 ml-auto w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "
        }
      />
      <div className="max-w-4/5 md:max-w-3xl mx-auto p-8 bg-white/25 backdrop-blur-sm shadow-xl shadow-text/50 rounded-lg my-15">
        <h1 className="my-2 w-full text-xl lg:text-3xl font-sans font-bold max-w-2/3">
          <strong className="uppercase text-primary rounded-lg my-1 font-bold text-xs lg:text-sm tracking-wider">
            Reclaim Your Time
          </strong>
          <br />
          Let AI Handle Your Notes
        </h1>
        <hr />
        <p className=" w-full max-w-10/12  text-text/75 my-5">
          Say goodbye to tedious charting. Our AI Medical Scribe automates
          clinical documentation, so you can focus on what matters most —
          patient care. Get started in minutes with a free trial.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 my-10 my-animi-all">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={(e) => handleUpdate(e.target.name, e.target.value)}
              placeholder="First Name"
              className={inputClass(!user.firstName)}
              required
            />
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={(e) => handleUpdate(e.target.name, e.target.value)}
              placeholder="Last Name"
              className={inputClass(!user.lastName)}
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => {
                handleUpdate(e.target.name, e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="Email"
              className={inputClass(emailError)}
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Invalid email address.
              </p>
            )}
          </div>

          <PhoneNumberInput label="Phone Number" onChange={handleUpdate} />

          <input
            type="text"
            name="organization"
            value={user.organization}
            onChange={(e) => handleUpdate(e.target.name, e.target.value)}
            placeholder="Organization Name"
            className={inputClass(!user.organization)}
            required
          />
          <input
            type="text"
            name="ehrEmr"
            value={user.organization}
            onChange={(e) => handleUpdate(e.target.name, e.target.value)}
            placeholder="Which EHR/EMR do you use."
            className={inputClass(!user.organization)}
            required
          />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-medium text-white">
                Do you have your own Medical Billing/coding company?
              </span>
              <div className="flex gap-3">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleUpdate("HaveCmpany", option)}
                    className={clsx(
                      "px-3.5 py-0.5 rounded-md border",
                      user.HaveMS === option
                        ? "bg-primary text-white border-primary"
                        : "border-gray-300 hover:border-primary hover:text-primary",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-medium text-white">
                Do you need a blood lab interpreter?
              </span>
              <div className="flex gap-3">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleUpdate("HaveMS", option)}
                    className={clsx(
                      "px-3.5 py-0.5 rounded-md border",
                      user.HaveMS === option
                        ? "bg-primary text-white border-primary"
                        : "border-gray-300 hover:border-primary hover:text-primary",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-medium text-white">
                Have You used a human scriber?
              </span>
              <div className="flex gap-3">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleUpdate("ExperiancedUser", option)}
                    className={clsx(
                      "px-3.5 py-0.5 rounded-md border ",
                      user.ExperiancedUser === option
                        ? "bg-primary text-white border-primary"
                        : "border-gray-300 hover:border-primary hover:text-primary",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm text-white">
              <input
                type="checkbox"
                name="subscription"
                checked={user.subscription}
                onChange={(e) => handleUpdate(e.target.name, e.target.checked)}
                className="accent-primary"
              />
              Subscribe for updates
            </label>

            <label className="flex items-center gap-2 text-sm text-white">
              <input
                type="checkbox"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                className="accent-primary"
                required
              />
              I agree to the Terms & Privacy Policy
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              How did you hear about us?
            </label>
            <select
              id="referal"
              name="referal"
              className={clsx(inputClass(false), "bg-transparent")}
              value={user.referal}
              onChange={(e) => handleUpdate(e.target.name, e.target.value)}
            >
              <option value="">Select option</option>
              {adsOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="flex items-center gap-2 px-5 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              disabled={sending}
            >
              <FaTimes size={14} /> Cancel
            </button>

            <button
              type="submit"
              disabled={!isValid}
              className={clsx(
                "flex items-center gap-2 px-5 py-1.5 rounded-md text-white transition",
                isValid
                  ? "bg-primary hover:bg-primary/90"
                  : "bg-gray-400 cursor-not-allowed",
              )}
            >
              {sending ? <BsFillCloudUploadFill /> : <IoIosSend />}
              {sending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {alert.show && (
          <div
            className={clsx(
              "mt-6 p-4 rounded-md text-center font-medium  duration-500",
              alert.type === "success"
                ? "bg-green-100 text-green-700 border border-green-400"
                : "bg-red-100 text-red-700 border border-red-400",
            )}
          >
            {alert.msg}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrganizationForm;
