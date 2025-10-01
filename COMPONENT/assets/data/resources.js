import { FaBusinessTime } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import {  SiLinkedin, SiInstagram,  SiYoutube } from "react-icons/si";



export let linksLegal = [
    { label: "Terms & Conditions", icon: <IoIosHome />, href: "/terms-and-conditions" },
    { label: "Policies", icon: <FaBusinessTime />, href: "/policies" },
]
export const contactIcons = [{
    title: "Youtube",
    icon: <SiYoutube />,
    color: "youtube",
    fcolor: "#FF0000",
    link: "https://www.youtube.com/@AIscribers"
},
{
    title: "LindedIn",
    icon: <SiLinkedin />,
    color: "linkedin",
    fcolor: "#0A66C2",
    link: "https://www.linkedin.com/company/ai-medical-scribers/"
},
{
    title: "Instagram",
    icon: <SiInstagram />,
    color: "instagram",
    fcolor: "#E4405F",
    link: "https://www.instagram.com/aiscribers/"
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
export const links = [
    { label: 'Features', href: '' },
    { label: 'About', href: '' },
    { label: 'Download', href: '' },
    { label: 'Blogs', href: '' },
    { label: 'Support', href: '' },
]