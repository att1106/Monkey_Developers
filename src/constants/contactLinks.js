import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";

export const contactLinks = [
    {
        icon: FiInstagram,
        url: "/"
    },
    {
        icon: FiFacebook,
        url: "/"
    },
    {
        icon: FiTwitter,
        url: "/"
    },
    {
        icon: FiMail,
        url: "/",
        onClick: () => window.location.href = `mailto:vducnguyen92@yahoo.com`
    },
]