import { createContext, useContext, useState } from "react";
import { VideoContext } from "@/types/types";

const VideoContext = createContext<VideoContext>({} as VideoContext);

export const useVideoModal = () => useContext(VideoContext);

export const VideoProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setIsOpen(true);
    setVideoSrc(src);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc("");
  };

  return (
    <VideoContext.Provider value={{ isOpen, openModal, closeModal, videoSrc }}>
      {children}
    </VideoContext.Provider>
  );
};
