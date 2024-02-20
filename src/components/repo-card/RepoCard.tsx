type Props = {
  name: string;
  url: string;
};

export const RepoCard = ({ name, url }: Props) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="bg-body-bg2 py-3 px-4 text-white-text flex-between gap-3 rounded-xl border-l-2 border-main hover:shadow hover:shadow-main duration-300"
    >
      <span className="truncate font-semibold tracking-wide text-base">
        {name}
      </span>

      <a
        className="bg-main2 font-semibold tracking-wide text-sm rounded-xl py-1 px-3 hover:bg-main duration-300 whitespace-nowrap"
        href={url}
        target="blank"
      >
        Repo Link
      </a>
    </div>
  );
};
