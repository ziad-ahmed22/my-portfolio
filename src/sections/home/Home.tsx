"use client";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import Image from "next/image";

import profileImgMobile from "@/assets/images/profile/ziad1.webp";
import profileImgPc from "@/assets/images/profile/ziad4.webp";
import { homeData } from "@/data/home";
import "./home.css";

export const Home = () => {
  const { name, title, description, skills, phone, cv } = homeData;

  return (
    <section className="min-h-screen relative pt-[100px] sm:pt-[140px] mb-10 lg:mb-0 overflow-hidden">
      <div className="lg:hidden absolute bg-main w-[140%] top-[-200px] sm:top-[-150px] left-[50%] translate-x-[-50%] -z-10 h-[60vh] rounded-b-[50%]"></div>

      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Info */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="text-white-text w-full lg:w-[60%] order-2 lg:order-1"
          >
            <span className="text-main text-base md:text-xl font-semibold tracking-wide">
              👋 𝓗𝓮𝓵𝓵𝓸 𝓣𝓱𝓮𝓻𝓮, 𝓘❜𝓶 👋
            </span>

            <h1 className="font-extrabold mt-5 mb-5 lg:mb-10 tracking-wide text-xl md:text-5xl">
              {name}
            </h1>

            <h2 className="font-semibold mb-5 lg:mb-10 tracking-wide text-lg md:text-3xl">
              {title}{" "}
              <Typewriter
                words={["React Js", "Next Js"]}
                loop
                cursor
                cursorStyle={<span className="text-main">|</span>}
              />
            </h2>

            <p className="mb-10 text-lg md:text-xl tracking-wider !leading-8">
              {description}
            </p>

            <div className="flex gap-3 flex-wrap mb-14">
              {skills.map((skill) => (
                <Link
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay={skill.delay}
                  key={skill.name}
                  className="cursor-pointer rounded-full bg-main px-2 text-[14px] font-medium border-2 border-main bg-opacity-60 hover:bg-opacity-100 duration-200"
                  to="skills"
                  // offset={15}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {skill.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-5">
              <a
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-delay="200"
                href={`tel:${phone}`}
                target="blank"
                className="group bg-hover flex items-center gap-3 bg-main rounded-xl px-4 py-2 text-base md:text-lg font-medium"
              >
                Hire Me
                <BsFillTelephoneOutboundFill className="group-hover:animate-move-up-right" />
              </a>

              <a
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-delay="400"
                href={cv}
                target="blank"
                className="group bg-hover flex items-center gap-3 bg-body-bg2 rounded-xl px-4 py-2 text-base md:text-lg font-medium"
              >
                Download CV
                <FaDownload className="group-hover:animate-move-up-down" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="profile-img w-full lg:w-[40%] flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="hidden lg:flex img relative"
            >
              <span className="shape absolute w-[320px] h-[320px] left-[-5px] top-[-15px] -z-10"></span>
              <Image
                src={profileImgPc}
                width={300}
                height={500}
                alt="Profile Image"
                className="object-cover"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="lg:hidden relative rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] overflow-hidden mb-10"
            >
              <Image
                src={profileImgMobile}
                width={300}
                height={500}
                alt="Profile Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
