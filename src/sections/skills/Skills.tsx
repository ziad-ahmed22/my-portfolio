import { SkillsCard } from "@/components/skills-card/SkillsCard";
import { Title } from "@/components/title/Title";
import { mySkills } from "@/data/skills";

export const Skills = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="My Skills" />

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10">
          {mySkills.map((item, idx) => (
            <SkillsCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
