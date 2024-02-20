import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { MdDataObject } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiNextui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const mySkills = [
  { name: "HTML 5", icon: <FaHtml5 /> },
  { name: "CSS 3", icon: <IoLogoCss3 /> },
  { name: "JS & ES6", icon: <IoLogoJavascript /> },
  { name: "Responsive", icon: <MdOutlinePhoneIphone /> },
  { name: "APIs", icon: <TbApi /> },
  { name: "Sass", icon: <SiSass /> }, // FaSass
  { name: "Typescript", icon: <BiLogoTypescript /> },
  { name: "OOP", icon: <MdDataObject /> },
  { name: "React Js", icon: <FaReact /> },
  { name: "Next Js", icon: <SiNextdotjs /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "Next UI", icon: <SiNextui /> },
  { name: "Git", icon: <FaGitSquare /> },
  { name: "Github", icon: <FaGithub /> },
];
