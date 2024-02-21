import { ExperienceCard } from "@/components/experience-card/ExperienceCard";
import { Title } from "@/components/title/Title";
import { myExperience } from "@/data/experience";

export const Experience = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="My Experience" />

        <div className="flex flex-col gap-9 lg:gap-14">
          {myExperience.map((item, idx) => (
            <ExperienceCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
