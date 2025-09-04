"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";

import { DetailsProvider } from "@/context/DetailsContext";
import { VideoProvider } from "@/context/VideoContext";

import { DetailsModal } from "@/components/modals/DetailsModal";
import { VideoModal } from "@/components/modals/VideoModal";
import { BackShape } from "@/components/shapes/BackShape";
import { BgShape } from "@/components/shapes/BgShape";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PreLoader } from "@/components/Preloader";
import { Scroller } from "@/components/Scroller";
import { Social } from "@/components/Social";
import { Hi } from "@/components/Hi";

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
