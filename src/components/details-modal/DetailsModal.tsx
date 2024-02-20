"use client";
import { BsBrowserEdge } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import { useDetailsModal } from "@/context/DetailsContext";
import { WithModal } from "../with-modal/WithModal";

export const DetailsModal = () => {
  const { isOpen, closeModal, details } = useDetailsModal();

  if (!isOpen) return null;

  return (
    <WithModal isOpen={isOpen}>
      <div className="bg-black bg-opacity-80 fixed inset-0 !z-[999999]">
        <div className="outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw]">
          <div className="animate-modal w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-[-50px] right-2 z-[9999999] text-2xl text-white hover:scale-125 duration-200 transition-all"
            >
              <IoClose />
            </button>

            <div className="w-full h-full rounded-2xl overflow-hidden bg-body-bg2 p-5 min-h-[50vh]">
              {details.map((item, idx) => (
                <p
                  key={idx}
                  className="text-white-text text-sm text-justify sm:text-start md:text-base tracking-wide !leading-8 font-semibold mb-4 last-of-type:mb-0"
                >
                  <BsBrowserEdge className="inline-block text-main text-2xl me-3" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WithModal>
  );
};
