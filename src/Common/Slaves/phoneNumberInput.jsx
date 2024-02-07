import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PhoneNumberInput = ({ label, onChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('us');
    const [formattedNumber, setFormattedNumber] = useState('');

    const styles = {
        backgroundColor: 'transparent',
        borderRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: '1px solid #4F5665aa',
    }

    useEffect(() => {
        const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, selectedCountry);
        if (parsedPhoneNumber) {
            setFormattedNumber(parsedPhoneNumber.formatNational());
        }
    }, [phoneNumber, selectedCountry]);

    const handlePhoneChange = (phone) => {
        setPhoneNumber(phone);
        onChange && onChange('phoneNumber', phone);
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setPhoneNumber('');
    };

    return (
        <div className="pt-2 ">
            <h2 className='text-teal-500' >{label}</h2>
            <PhoneInput
                country={selectedCountry}
                value={phoneNumber}
                placeholder='Phone Number'
                onChange={handlePhoneChange}
                onSelect={handleCountryChange}
                enableAreaCodes
                disableCountryCode
                enableTerritories
                inputClass='p-5'
                inputStyle={{ ...styles, ...{ width: '50%' } }}
                buttonStyle={styles}
                onlyCountries={['us']} 

            />

        </div>
    );
};

export default PhoneNumberInput;
