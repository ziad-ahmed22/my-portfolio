type Props = {
  item: { name: string; icon: JSX.Element };
};

export const SkillsCard = ({ item }: Props) => {
  const { name, icon } = item;

  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1500"
      className="group relative bg-body-bg2 rounded-2xl px-5 pt-14 pb-8 mt-5 border-[3px] border-body-bg2 hover:border-main transition-transform duration-300"
    >
      <div className="absolute bg-main text-white-text2 left-[50%] translate-x-[-50%] top-[-30px] w-[60px] h-[56px] text-3xl flex-center rounded-xl group-hover:top-[-35px] duration-300">
        {icon}
      </div>

      <h3 className="text-white-text font-semibold text-md sm:text-lg tracking-wide text-center group-hover:scale-110 duration-300">
        {name}
      </h3>
    </div>
  );
};
