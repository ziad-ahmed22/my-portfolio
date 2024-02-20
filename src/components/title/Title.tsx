type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="group relative text-center uppercase text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white-text2 mb-16 sm:mb-20"
    >
      {title}
      <span className="absolute left-[50%] translate-x-[-50%] top-[-25px] sm:top-[-35px] md:top-[-45px] opacity-15 z-[-5] text-5xl sm:text-6xl md:text-[80px] select-none w-full text-main group-hover:text-white-text2 duration-300">
        {title}
      </span>
    </div>
  );
};
