import { FaBusinessTime } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import {  SiLinkedin, SiInstagram,  SiYoutube } from "react-icons/si";



export let linksLegal = [
    { title: "Terms & Conditions", icon: <IoIosHome />, add: "/terms-and-conditions" },
    { title: "Policies", icon: <FaBusinessTime />, add: "/policies" },
]
export const contactIcons = [{
    title: "Youtube",
    icon: <SiYoutube />,
    color: "youtube",
    fcolor: "#FF0000",
    link: "https://www.youtube.com/@AImedicalscriber"
},
{
    title: "LindedIn",
    icon: <SiLinkedin />,
    color: "linkedin",
    fcolor: "#0A66C2",
    link: "https://www.linkedin.com/in/ai-medical-assistance-a20595271"
},
{
    title: "Instagram",
    icon: <SiInstagram />,
    color: "instagram",
    fcolor: "#E4405F",
    link: "https://instagram.com/jasmelacosta?igshid=ZDc4ODBmNjlmNQ=="
},
]

export const adsOptions = [
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Bing', label: 'Bing' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'In an Article', label: 'In an Article' },
    { value: 'Friend', label: 'Friend' },
    { value: 'Google', label: 'Google' },
    { value: 'Ads', label: 'Ads' },
    { value: 'Other', label: 'Other' },
];

export const BillingModes = [
    {
        title: 'Monthly',
        price: '$$/mo'
    },
    {
        title: 'Yearly',
        price: '$$$/yo'
    },
    {
        title: 'Trial',
        price: 'Free'
    },
]