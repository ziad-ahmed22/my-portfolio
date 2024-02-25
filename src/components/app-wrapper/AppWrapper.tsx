"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";

import { DetailsProvider } from "@/context/DetailsContext";
import { VideoProvider } from "@/context/VideoContext";

import { DetailsModal } from "@/components/details-modal/DetailsModal";
import { VideoModal } from "@/components/video-modal/VideoModal";
import { PreLoader } from "@/components/preloader/Preloader";
import { Scroller } from "@/components/scroller/Scroller";
import { BgShape } from "@/components/bg-shape/BgShape";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Social } from "@/components/social/Social";
import { Hi } from "@/components/hi/Hi";
import { BackShape } from "../back-shape/BackShape";

export default function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [hi, setHi] = useState(true);

  useEffect(() => {
    AOS.init();

    new Promise((resolve): void => {
      setTimeout(() => {
        setLoading(false);
        resolve("");
      }, 1750);
    }).then(() => {
      setTimeout(() => {
        setHi(false);
      }, 1000);
    });
  }, []);

  if (loading) return <PreLoader />;

  if (hi) return <Hi />;

  return (
    <VideoProvider>
      <DetailsProvider>
        <Element name="nav">
          <Navbar />
        </Element>

        {children}

        <Footer />

        <Social />
        <Scroller />
        <BgShape />
        <BackShape />

        <VideoModal />
        <DetailsModal />

        <Toaster position="top-left" reverseOrder={false} />
      </DetailsProvider>
    </VideoProvider>
  );
}
