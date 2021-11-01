import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

export const navbarLinks = [
    {
        url: "/",
        text: "Home",
        subLinks: [
            {
                url: "/",
                text: "Sub Link 1"
            },
            {
                url: "/",
                text: "Sub Link 2"
            },
            {
                url: "/",
                text: "Sub Link 3"
            },
        ]
    },
    {
        url: "/",
        text: "About",
        subLinks: null
    },
]

export const footerLinks = [
    {
        url: "/impressum",
        text: "Impressum",
    },
    {
        url: "/datenschutzerklaerung",
        text: "Datenschutzerkärung",
    },
    {
        url: "/",
        text: "Kontakt",
    },
]