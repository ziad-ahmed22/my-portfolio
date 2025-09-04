import Image from "next/image";

import { ContactInfo } from "@/sections/contact/ContactInfo";
import { ContactForm } from "@/sections/contact/ContactForm";
import { Title } from "@/components/Title";

import planet from "@/assets/images/shapes/planet.png";

export const Contact = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="Contact Me" />

        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="-mt-5 sm:mt-0 uppercase font-semibold text-white-text text-sm md:text-lg tracking-wide leading-[25px] text-center"
        >
          <span className="!text-main">❤ </span>
          My inbox is always open. I’d love to chat with you
          <span className="!text-main"> ❤</span>
        </p>

        <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ContactForm />
          <ContactInfo />

          <div className="hidden lg:flex w-[700px] h-[700px] animate-rotate absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10">
            <Image
              src={planet}
              alt="planet"
              width={600}
              height={600}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
