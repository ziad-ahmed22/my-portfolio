"use client";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

import { useDetailsModal } from "@/context/DetailsContext";
import { useVideoModal } from "@/context/VideoContext";
import { WorkCard } from "@/types/types";

type Props = {
  item: WorkCard;
};

export const WorksCard = ({ item }: Props) => {
  const { openModal } = useVideoModal();
  const { openModal: openDetailsModal } = useDetailsModal();
  const { id, title, image, demo_url, repo_url, video_url, skills, details } =
    item;

  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1500"
      className="group relative bg-body-bg2 rounded-[40px] p-5 hover:-translate-y-4 transition-transform duration-300 overflow-hidden"
    >
      <div className="rounded-[20px] overflow-hidden relative h-[220px]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full"
        />

        <Tooltip
          id={id.toString()}
          className="!bg-body-bg2 !font-semibold !rounded-full z-10"
        />

        <div className="absolute inset-0 bg-[#0a0000a6] flex flex-col items-center justify-center gap-5 opacity-0  group-hover:opacity-100 duration-500">
          <div className="flex gap-5">
            {repo_url && (
              <a
                href={repo_url}
                target="blank"
                className="bg-main rounded-2xl h-12 w-12 flex-center text-2xl text-white-text2 translate-y-[-30px] group-hover:translate-y-0 hover:bg-body-bg2 duration-500"
                data-tooltip-id={id.toString()}
                data-tooltip-content="Show Repo"
              >
                <BsGithub />
              </a>
            )}

            {demo_url && (
              <a
                href={demo_url}
                target="blank"
                className="bg-main rounded-2xl h-12 w-12 flex-center text-2xl text-white-text2 translate-y-[-30px] group-hover:translate-y-0 hover:bg-body-bg2 duration-500"
                data-tooltip-id={id.toString()}
                data-tooltip-content="Live View"
              >
                <BsBoxArrowUpRight />
              </a>
            )}

            {video_url && (
              <span
                onClick={() => openModal(video_url)}
                className="cursor-pointer bg-main rounded-2xl h-12 w-12 flex-center text-2xl text-white-text2 translate-y-[-30px] group-hover:translate-y-0 hover:bg-body-bg2 duration-500"
                data-tooltip-id={id.toString()}
                data-tooltip-content="Demo Video"
              >
                <IoMdEye />
              </span>
            )}
          </div>

          {details && (
            <button
              className="text-white-text bg-main translate-y-[90px] group-hover:translate-y-[50px] transition-transform delay-300 hover:bg-body-bg2 duration-300 text-sm rounded-xl font-semibold tracking-wide px-3 py-1"
              onClick={() => openDetailsModal(details)}
            >
              Details
            </button>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h5 className="text-center text-lg lg:text-xl tracking-wide text-white-text font-bold">
          {title}
        </h5>

        <div className="mt-5 flex-center gap-3 flex-wrap">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-white-text bg-main2 text-sm rounded-xl font-semibold tracking-wide px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
