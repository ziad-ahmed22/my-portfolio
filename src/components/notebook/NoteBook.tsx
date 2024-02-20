import { GiBurningDot } from "react-icons/gi";
import "./notebook.css";

type Props = {
  data: { text: string; delay: number }[];
};

export const NoteBook = ({ data }: Props) => {
  return (
    <div className="rounded-2xl notebook bg-[#eef6fe] p-5 ps-9 sm:ps-12 rotate-[-1deg] sm:rotate-0">
      {data.map(({ text, delay }, idx) => (
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay={delay}
          key={idx}
          className="text-main2 font-medium leading-8 text-base md:text-lg relative duration-500 hover:translate-x-4 mb-8 last-of-type:mb-0"
        >
          <GiBurningDot className="rounded-full inline-block text-[#eef6fe] bg-main2 mb-[6px] text-lg me-3" />
          {text}
        </p>
      ))}
    </div>
  );
};
