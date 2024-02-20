"use client";
import { Element } from "react-scroll";

import { Experience } from "@/sections/experience/Experience";
import { Contact } from "@/sections/contact/Contact";
import { Skills } from "@/sections/skills/Skills";
import { Repos } from "@/sections/repos/Repos";
import { Works } from "@/sections/works/Works";
import { About } from "@/sections/about/About";
import { Home } from "@/sections/home/Home";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="works">
        <Works />
      </Element>

      <Element name="repos">
        <Repos />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </main>
  );
}
