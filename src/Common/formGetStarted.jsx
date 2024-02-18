import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, FormControlLabel, Slide, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { DeleteOutline } from '@mui/icons-material';
import { IoIosSend } from 'react-icons/io';
import { BsFillCloudUploadFill } from 'react-icons/bs';

import PhoneNumberInput from './Slaves/phoneNumberInput';
import { BillingModes, adsOptions } from '../assets/data/resources';


const APILink = import.meta.env.VITE_APILink
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide appear in={true} direction="down" timeout={{ enter: 500, exit: 0 }} ref={ref} {...props} />;
});



const OrganizationForm = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const [sending, setSending] = useState(false)
    const booking = useSelector(x => x.openBooking)
    const [emailCheck, setEmailCheck] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [alertMsg, setAlertMsg] = useState(false);
    const [message, setMessage] = useState('');
    const [signal, setSignal] = useState('');




    const handleBooking = (x) => {
        dispatch({
            type: 'SET_BOOKING',
            payload: x,
        });
    }


    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        phoneNumber: '',
        subscription: false,
        HaveMS: '',
        ExperiancedUser:'',
        billing: 'trial'
    });

    const handleUpdate = (name, value) => {
        setUser({ ...user, [name]: value });
    };


    const validateForm = () => {
        const requiredFields = ['firstName', 'lastName', 'email', 'organization', 'phoneNumber'];
        const isFormValid = requiredFields.every((field) => user[field].trim() !== '');

        policyAccepted ? setIsValid(isFormValid) : setIsValid(false)
    };

    useEffect(() => {
        validateForm()
    }, [user, policyAccepted])


    const handleSubmit = (e) => {
        setSending(true)
        handleBooking(false)
        const { firstName, lastName, email, organization, phoneNumber, subscription,HaveMS,ExperiancedUser, billing, referal } = user;

        if (isValid) {
            axios
                .post(`${APILink}/users/createuser`, {
                    firstName,
                    lastName,
                    email,
                    organization,
                    phoneNumber,
                    subscription,
                    billing,
                    HaveMS,
                    ExperiancedUser,
                    referal
                })
                .then((response) => {
                    response.data.status === 'success' ? setSignal('success') : setSignal('error')
                    setAlertMsg(true)
                    setMessage(response.data.message)
                    setSending(false)

                })
                .catch((error) => {
                    response.data.status === 'success' ? setSignal('success') : setSignal('error')
                    setAlertMsg(true)
                    setMessage(response.data.message)
                    setSending(false)
                });

        }

    };

    return (
        <div >

            <Dialog open={booking} TransitionComponent={Transition} onClose={() => handleBooking(false)}>
                <DialogTitle component={'h1'} className='text-white font-bold text-4xl bg-primary text-center' >CONNECT</DialogTitle>
                <DialogContent component='form' className='bg-secondary'>
                    {/* Form Fields */}
                    <div className="space-y-6" >
                        <div className="grid grid-cols-2 items-center mt-2 space-x-4">
                            <TextField variant='standard' name='firstName' onChange={(e) => handleUpdate(e.target.name, e.target.value)} label="First Name" placeholder='First Name' required />
                            <TextField variant='standard' name='lastName' onChange={(e) => handleUpdate(e.target.name, e.target.value)} label="Last Name" placeholder='Last Name' required />

                        </div>
                        <TextField variant='standard' name='email' onChange={
                            (e) => {
                                handleUpdate(e.target.name, e.target.value);
                                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                if (!regex.test(e.target.value)) {
                                    user.email && setEmailCheck(true);
                                } else {
                                    setEmailCheck(false);
                                }
                            }
                        } label="Email" error={emailCheck} placeholder='Email' fullWidth required />
                        <PhoneNumberInput label={'Phone Number'} onChange={handleUpdate} />

                        <TextField variant='standard' name="organization" className='my-6 ' onChange={(e) => handleUpdate(e.target.name, e.target.value)} label="Organization Name" fullWidth required />

                        <Dropdown options={adsOptions} value={user.referal} onChange={(e) => handleUpdate(e.target.name, e.target.value)} />
                        {/* <h2 htmlFor="referal" className="text-teal-500 block text-sm font-medium text-gray-700">
                            Billing Mode
                        </h2>
                        <div className="grid grid-cols-3 items-center pb-6 space-x-4">
                            {
                                BillingModes.map((x, i) => {
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            name='billing'
                                            aria-label={x.title + 'at' + x.price}
                                            className={`border rounded-xl px-4 py-2 ${user.billing === x.title ? 'bg-green-600 text-white-500 border-teal-100' : 'border-gray-500 text-blue-400'}`}
                                            onClick={() => handleUpdate('billing', x.title)}
                                        >
                                            {x.title} <br /> ({x.price})
                                        </button>
                                    )
                                })
                            }
                        </div> */}
                        <div className="grid grid-cols-5 items-center space-x-2">
                            <h2 htmlFor="referal" className=" col-span-3 block text-sm font-medium ">
                                {t('headings.HaveMS')}
                            </h2>
                            {
                                ['Yes', 'No'].map((x, i) => {
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            name='HaveMS'
                                            aria-label={x}
                                            className={`border rounded-xl py-1 ${user.HaveMS === x ? 'bg-primary text-white border-primary' : 'border-primary text-black'}`}
                                            onClick={() => handleUpdate('HaveMS', x)}
                                        >
                                            {x}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className="grid grid-cols-5 items-center space-x-2">
                            <h2 htmlFor="referal" className=" col-span-3 block text-sm font-medium ">
                                {t('headings.DYHBillingCoding')}
                            </h2>
                            {
                                ['Yes', 'No'].map((x, i) => {
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            name='ExperiancedUser'
                                            aria-label={x}
                                            className={`border rounded-xl py-1 ${user.ExperiancedUser === x ? 'bg-primary text-white border-primary' : 'border-primary text-black'}`}
                                            onClick={() => handleUpdate('ExperiancedUser', x)}
                                        >
                                            {x}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox />} onChange={(e) => handleUpdate(e.target.name, e.target.checked)} name='subscription' className='w-full' label={t("headings.SubscribeCheck")} />
                            <FormControlLabel control={<Checkbox />} onChange={(e) => setPolicyAccepted(e.target.checked)} className='w-full ' label={t('headings.TermsCheck')} required />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions className='bg-secondary bg-opacity-50 ' >
                    <Button startIcon={<DeleteOutline />} color='error' aria-label={t('buttons.cancel')} disabled={sending} onClick={() => handleBooking(false)} fullWidth>
                        {t('buttons.cancel')}
                    </Button>
                    <Button color='success'  aria-label={sending ? t('buttons.sending') : t('buttons.submit')} startIcon={sending && <BsFillCloudUploadFill />} endIcon={!sending && <IoIosSend />} className='bg-black' variant='contained' onClick={handleSubmit} disabled={!isValid || sending} fullWidth>
                        {sending ? t('buttons.sending') : t('buttons.submit')}
                    </Button>
                </DialogActions>
            </Dialog>
            {alertMsg && <Alert severity={signal} color={signal} className='fixed bottom-2 left-2' onClose={() => setAlertMsg(false)}  >{message}</Alert>}
        </div>
    );
};

const Dropdown = ({ options, value, onChange }) => {
    const { t } = useTranslation()
    return (
        <div className="py-4">
            <h2 htmlFor="referal" className="  block text-sm font-medium">
                {t('headings.HearAboutUs')}
            </h2>
            <select
                id="referal"
                className="mt-1 flex w-full bg-transparent p-2 border-b rounded-none border-gray-400  focus:border-primary focus:bg-secondry sm:text-sm"
                value={value}
                name='referal'
                onChange={onChange}
            >
                <option value="">Select One:</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default OrganizationForm;
