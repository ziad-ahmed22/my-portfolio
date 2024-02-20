"use client";
import { useEffect, useState } from "react";

import { WorksCard } from "@/components/works-card/WorksCard";
import { Title } from "@/components/title/Title";
import { WorkCard } from "@/types/types";
import { myWorks } from "@/data/works";
import { catItems } from "./catItems";

export const Works = () => {
  const [data, setData] = useState<WorkCard[]>(myWorks);
  const [cat, setCat] = useState("all");
  const [activeCat, setActiveCat] = useState("all");

  useEffect(() => {
    if (cat === "all") {
      setData(myWorks);
    } else {
      setData(myWorks.filter((item) => item.type === cat));
    }
  }, [cat]);

  const handleCatClick = (e: any) => {
    setCat(e.target.dataset.cat);
    setActiveCat(e.target.dataset.cat);
  };

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="𝓜𝔂 𝓦𝓸𝓻𝓴𝓼" />

        <ul
          data-aos="fade-down"
          data-aos-duration="1500"
          className="flex-center flex-wrap gap-2 sm:gap-5 mb-16"
        >
          {catItems.map(({ name, cat }, idx) => (
            <li
              key={idx}
              onClick={handleCatClick}
              data-cat={cat}
              className={`py-1 px-2 sm:px-4 text-white-text font-semibold tracking-wide rounded-xl cursor-pointer text-sm md:text-lg hover:bg-main duration-200 ${
                activeCat === cat
                  ? "bg-main shadow-lg shadow-main2"
                  : "bg-main2"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map((item, idx) => (
            <WorksCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
