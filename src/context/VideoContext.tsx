import { createContext, ReactNode, useState } from "react";
import { VideoContextType } from "@/types/types";

export const VideoContext = createContext<VideoContextType>(
  {} as VideoContextType
);

type Props = {
  children: ReactNode;
};

export const VideoProvider = ({ children }: Props) => {
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
