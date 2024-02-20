import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const socialData = [
  {
    name: "Gmail",
    link: "mailto:ziiadd2211@gmail.com",
    icon: <SiGmail className="absolute text-[20px]" />,
    delay: 300,
  },
  {
    name: "Github",
    link: "https://github.com/ziad-ahmed22",
    icon: <FaGithub className="absolute text-[20px]" />,
    delay: 600,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ziad-ahmed22/",
    icon: <FaLinkedinIn className="absolute text-[20px]" />,
    delay: 900,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/201145814339?text=Hello Ziad",
    icon: <FaWhatsapp className="absolute text-[20px]" />,
    delay: 1200,
  },
];
