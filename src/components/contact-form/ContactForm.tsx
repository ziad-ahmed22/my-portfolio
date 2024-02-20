"use client";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useState } from "react";

import { ContactData } from "@/types/types";
import { Spinner } from "../spinner/Spinner";
import {
  API_PUPLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  emptyObj,
  formItems,
} from "./formData";

export const ContactForm = () => {
  const [data, setData] = useState<ContactData>(emptyObj);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const form_data = {
    from_name: data.name,
    form_email: data.email,
    form_phone: data.phone,
    form_message: data.msg,
  };

  const sendEmail = async () => {
    setLoading(true);
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, form_data, API_PUPLIC_KEY).then(
      (response) => {
        toast.success("Email Sent Succefully");
        setData(emptyObj);
      },
      (error) => {
        toast.error("Error! Email Not Send");
      }
    );
    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, phone, msg } = data;

    if (name !== "" && email !== "" && phone !== "" && msg !== "") {
      sendEmail();
    } else {
      toast.error("Please Fill All Fields");
    }
  };

  return (
    <form
      data-aos="fade-up-right"
      data-aos-duration="1500"
      data-aos-delay="300"
      className="bg-body-bg2 p-5 sm:p-8 rounded-xl lg:bg-opacity-70"
      onSubmit={handleSubmit}
    >
      {/* Inputs */}
      {formItems.map(({ name, title, type, placeh }, idx) => (
        <div key={idx}>
          <label
            htmlFor={name}
            className="block mb-2 font-semibold tracking-wide text-white-text"
          >
            {title} :
          </label>
          <input
            id={name}
            dir="auto"
            type={type}
            value={data[name]}
            onChange={handleChange}
            placeholder={placeh}
            className="lg:bg-opacity-70 mb-6 w-full py-[6px] px-[10px] bg-body-bg text-white-text2 border border-body-bg rounded-lg caret-main placeholder:text-white-text placeholder:opacity-50 focus:placeholder:opacity-0  "
          />
        </div>
      ))}

      {/* Textarea */}
      <div>
        <label
          htmlFor="msg"
          className=" block mb-2 font-semibold tracking-wide text-white-text"
        >
          Message :
        </label>
        <textarea
          id="msg"
          dir="auto"
          value={data.msg}
          onChange={handleChange}
          placeholder="Write your Message"
          className="lg:bg-opacity-70 mb-6 w-full py-[6px] px-[10px] bg-body-bg text-white-text2 border border-body-bg rounded-lg caret-white-text placeholder:text-white-text placeholder:opacity-50 focus:placeholder:opacity-0 focus:border-white-text h-28 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          disabled={loading}
          type="submit"
          className="block mx-auto bg-main text-white-text text-lg font-semibold tracking-wide rounded-lg p-2 w-32 bg-hover disabled:cursor-not-allowed"
        >
          {loading ? <Spinner /> : "Send"}
        </button>
      </div>
    </form>
  );
};
