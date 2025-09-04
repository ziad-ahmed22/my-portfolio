export const formItems = [
  {
    title: "Full Name",
    name: "name",
    type: "text",
    placeh: "Write your full name",
  },
  {
    title: "E-Mail",
    name: "email",
    type: "email",
    placeh: "Write your E-Mail",
  },
  {
    title: "Phone Number",
    name: "phone",
    type: "text",
    placeh: "Write your Phone Number",
  },
];

export let emptyObj = {
  name: "",
  email: "",
  phone: "",
  msg: "",
};

export const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "test";
export const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "test";
export const API_PUPLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_API_PUPLIC_KEY || "test";
