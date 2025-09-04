"use client";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

export const WithModal = ({ children, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return <>{children}</>;
};
