import Image from "next/image";

import aboutMeImg from "@/assets/images/shapes/aboutme.svg";
import { NoteBook } from "@/components/notebook/NoteBook";
import { Title } from "@/components/title/Title";
import { aboutMeData } from "@/data/about";

export const About = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="𝓐𝓑𝓞𝓤𝓣 𝓜𝓔" />

        <div className="flex justify-between items-center gap-5">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1500"
            className="w-[35%] hidden lg:block"
          >
            <div className="animate-move overflow-hidden w-[300px] xl:w-[350px]">
              <Image
                src={aboutMeImg}
                alt="My Image"
                width={340}
                height={450}
                className="w-full h-full"
              />
            </div>
          </div>

          <div
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="lg:w-[65%]"
          >
            <NoteBook data={aboutMeData} />
          </div>
        </div>
      </div>
    </section>
  );
};
