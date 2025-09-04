"use client";
import { useRef, useEffect } from "react";

export const Scroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (scrollerRef.current) {
        scrollerRef.current.style.width = `${(scrollTop / height) * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="fixed top-0 left-0 z-50 bg-[#93C90E] bg-opacity-90 w-0 h-1 rounded"
    ></div>
  );
};
