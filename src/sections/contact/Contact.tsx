import Image from "next/image";

import planet from "@/assets/images/shapes/planet.png";
import { ContactInfo } from "@/components/contact-info/ContactInfo";
import { ContactForm } from "@/components/contact-form/ContactForm";
import { Title } from "@/components/title/Title";

export const Contact = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓜𝓮" />

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
