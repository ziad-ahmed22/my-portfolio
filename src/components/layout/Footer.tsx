import { FaCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex-center bg-body-bg2 text-white-text py-4 px-1 text-[12px] sm:text-lg font-semibold tracking-wide uppercase">
      <FaCopyright className="mt-[-2px] me-2" />
      <span>Copyright 2023 | All Rights Reserved 😍</span>
    </div>
  );
};
