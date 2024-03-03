import { MdLocationOn } from "react-icons/md";
import { contactInfo } from "@/data/contact";

export const ContactInfo = () => {
  return (
    <div
      data-aos="fade-up-left"
      data-aos-duration="1500"
      data-aos-delay="300"
      className="flex flex-col gap-5 mt-1"
    >
      <div className="lg:bg-opacity-70 bg-hover2 bg-body-bg2 text-white-text border border-white-text flex flex-col items-center gap-4 rounded-xl p-6 tracking-wide relative overflow-hidden z-20">
        <MdLocationOn className="text-3xl" />
        <span>Cairo, Egypt</span>
        {/* <span>Easy Relocating</span> */}
      </div>

      {contactInfo.map(({ name, link, icon }, idx) => (
        <a
          key={idx}
          href={link}
          target="blank"
          className="lg:bg-opacity-70 bg-hover2 bg-body-bg2 text-white-text border border-white-text flex flex-col items-center gap-5 rounded-xl p-6 tracking-wide relative overflow-hidden z-20 "
        >
          {icon}
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};
