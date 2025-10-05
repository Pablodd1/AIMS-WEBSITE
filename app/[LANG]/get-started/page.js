'use client'
import React, { useState, useEffect } from 'react';
import { IoIosSend } from 'react-icons/io';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import PhoneNumberInput from './phone-input'; // Assuming you have this component

const OrganizationForm = ({ langDict }) => {
    const [sending, setSending] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [alertMsg, setAlertMsg] = useState(false);
    const [message, setMessage] = useState('');
    const [signal, setSignal] = useState('');
    const [adsOptions, setAdsOptions] = useState([]);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        phoneNumber: '',
        subscription: false,
        HaveMS: '',
        ExperiancedUser: '',
        billing: 'trial',
        referal: ''
    });

    useEffect(() => {
        // Fetch the ads options on component mount
        fetch(`${process.env.BASE_URL}/ads-options`)
            .then((response) => response.json())
            .then((data) => {
                setAdsOptions(data);  // Assuming data is an array of ads options
            })
            .catch((error) => console.error('Error fetching ads options:', error));
    }, []);

    const handleUpdate = (name, value) => {
        setUser({ ...user, [name]: value });
    };

    const validateForm = () => {
        const requiredFields = ['firstName', 'lastName', 'email', 'organization', 'phoneNumber'];
        const isFormValid = requiredFields.every((field) => user[field].trim() !== '');
        setIsValid(policyAccepted && isFormValid);
    };

    useEffect(() => {
        validateForm();
    }, [user, policyAccepted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        const { firstName, lastName, email, organization, phoneNumber, subscription, HaveMS, ExperiancedUser, billing, referal } = user;

        if (isValid) {
            // POST request to submit form data
            fetch(`${process.env.BASE_URL}/users/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    organization,
                    phoneNumber,
                    subscription,
                    billing,
                    HaveMS,
                    ExperiancedUser,
                    referal,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setSignal(data.status === 'success' ? 'success' : 'error');
                    setAlertMsg(true);
                    setMessage(data.message);
                    setSending(false);
                })
                .catch((error) => {
                    setSignal('error');
                    setAlertMsg(true);
                    setMessage('Something went wrong!');
                    setSending(false);
                });
        }
    };

    return (
        <div className="form-container max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-center text-2xl font-bold text-primary">{'connect'}</h1>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleUpdate(e.target.name, e.target.value)}
                        placeholder={'firstName'}
                        required
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) => handleUpdate(e.target.name, e.target.value)}
                        placeholder={'lastName'}
                        required
                        className="input-field"
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => {
                        handleUpdate(e.target.name, e.target.value);
                        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        setEmailCheck(!regex.test(e.target.value));
                    }}
                    placeholder={'email'}
                    className="input-field"
                    required
                />
                {emailCheck && <p className="error-text">{'invalidEmail'}</p>}

                <PhoneNumberInput label={'phoneNumber'} onChange={handleUpdate} />

                <input
                    type="text"
                    name="organization"
                    value={user.organization}
                    onChange={(e) => handleUpdate(e.target.name, e.target.value)}
                    placeholder={'organization'}
                    className="input-field"
                    required
                />

                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <h2>{'haveMS'}</h2>
                        {['Yes', 'No'].map((option) => (
                            <button
                                type="button"
                                key={option}
                                onClick={() => handleUpdate('HaveMS', option)}
                                className={`option-button ${user.HaveMS === option ? 'selected' : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <h2>{'dyhBillingCoding'}</h2>
                        {['Yes', 'No'].map((option) => (
                            <button
                                type="button"
                                key={option}
                                onClick={() => handleUpdate('ExperiancedUser', option)}
                                className={`option-button ${user.ExperiancedUser === option ? 'selected' : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={user.subscription}
                                onChange={(e) => handleUpdate(e.target.name, e.target.checked)}
                                name="subscription"
                            />
                            {'subscribeCheck'}
                        </label>

                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={policyAccepted}
                                onChange={(e) => setPolicyAccepted(e.target.checked)}
                                required
                            />
                            {'termsCheck'}
                        </label>
                    </div>

                    {/* Ads Options Dropdown */}
                    <div className="py-4">
                        <h2 className="block text-sm font-medium">{'hearAboutUs'}</h2>
                        <select
                            id="referal"
                            name="referal"
                            className="input-field"
                            value={user.referal}
                            onChange={(e) => handleUpdate(e.target.name, e.target.value)}
                        >
                            <option value="">{'selectOption'}</option>
                            {adsOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-actions space-x-4">
                    <button
                        type="button"
                        onClick={() => setUser({})}
                        className="cancel-button"
                        disabled={sending}
                    >
                        <FaTimes /> {'cancel'}
                    </button>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={!isValid || sending}
                    >
                        {sending ? <BsFillCloudUploadFill /> : <IoIosSend />}
                        {sending ? 'sending' : 'submit'}
                    </button>
                </div>
            </form>

            {alertMsg && (
                <div className={`alert ${signal === 'success' ? 'alert-success' : 'alert-error'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default OrganizationForm;
