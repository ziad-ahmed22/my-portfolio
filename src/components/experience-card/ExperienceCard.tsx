import { ExperienceCard as ExperienceCardTypes } from "@/types/types";

import { IoLocationSharp } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

type Props = {
  item: ExperienceCardTypes;
};

export const ExperienceCard = ({ item }: Props) => {
  const { from, to, title, location, description, reverse } = item;

  return (
    <div
      data-aos={reverse ? "fade-up-left" : "fade-up-right"}
      data-aos-duration="1500"
      className="group w-full lg:w-1/2 flex flex-row justify-start gap-8 even:ms-auto even:flex-row-reverse even:justify-end"
    >
      <div className="relative bg-body-bg2 rounded-2xl p-5 text-white-text tracking-wide flex-1">
        <h2 className="mb-5 text-main text-xl font-semibold flex items-center gap-2">
          <IoLocationSharp className="text-main text-2xl" />
          {location}
        </h2>

        <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">
          {title}
        </h3>

        <p className="font-medium text-base md:text-lg mb-6">{description}</p>

        <div className="flex flex-row gap-3 items-center justify-end">
          <span className="bg-main2 text-white-text rounded-xl py-1 px-3 font-medium text-sm group-hover:bg-body-bg group-hover:text-main !duration-300:">
            {from}
          </span>
          <span className="text-main text-2xl">:</span>
          <span className="bg-main2 text-white-text rounded-xl py-1 px-3 font-medium text-sm group-hover:bg-body-bg group-hover:text-main !duration-300:">
            {to}
          </span>
        </div>
      </div>

      <div className="w-[5px] bg-white-text relative rounded-md hidden lg:flex group-hover:bg-main2 !duration-300">
        <SiNextdotjs className="w-9 h-9 p-[6px] bg-white-text text-main2 rounded-full flex-center absolute top-0 left-[50%] -translate-x-1/2 group-hover:bg-main group-hover:text-white-text !duration-300" />
      </div>
    </div>
  );
};
