import { socialData } from "@/data/social";

export const Social = () => {
  return (
    <>
      {/* Big Screens */}
      <div
        data-aos="fade-up-right"
        data-aos-duration="1500"
        data-aos-delay="1800"
        className="flex-col fixed bottom-3 left-3 z-50 hidden lg:flex"
      >
        {socialData.map(({ name, link, icon }, idx) => (
          <a
            href={link}
            key={idx}
            target="blank"
            className="bg-transparent text-white-text p-3 flex items-center h-[45px] w-[45px] overflow-hidden relative duration-500 hover:w-full"
          >
            {icon}
            <span className="ml-[33px]">{name}</span>
          </a>
        ))}
      </div>

      {/* Small Screens */}
      <div className="flex flex-row gap-5 bg-[#ffffff1e] w-[96%] rounded-xl justify-center items-center absolute top-2 left-[50%] translate-x-[-50%] p-2 z-50 lg:hidden">
        {socialData.map(({ link, icon, delay }, idx) => (
          <a
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-delay={delay}
            href={link}
            key={idx}
            target="blank"
            className="text-white-text rounded-full h-[40px] w-[40px] duration-200 flex-center hover:bg-main"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};
