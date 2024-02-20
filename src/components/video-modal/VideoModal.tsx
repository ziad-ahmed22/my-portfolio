"use client";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
import toast from "react-hot-toast";

import { useVideoModal } from "@/context/VideoContext";
import { WithModal } from "../with-modal/WithModal";

export const VideoModal = () => {
  const { isOpen, closeModal, videoSrc } = useVideoModal();

  const handleError = () => {
    toast.error("Sorry! Something Went Wrong");
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <WithModal isOpen={isOpen}>
      <div className="bg-black bg-opacity-80 fixed inset-0 !z-[999999]">
        <div className="outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] h-[300px] sm:h-[400px] md:h-[500px] max-h-[80vh]">
          <div className="animate-modal w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-[-50px] right-2 z-[9999999] text-2xl text-white hover:scale-125 duration-200 transition-all"
            >
              <IoClose />
            </button>

            <div className="w-full h-full rounded overflow-hidden bg-white-text p-1">
              <ReactPlayer
                url={videoSrc}
                controls
                playing
                width="100%"
                height="100%"
                onError={handleError}
              />
            </div>
          </div>
        </div>
      </div>
    </WithModal>
  );
};
