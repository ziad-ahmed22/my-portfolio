"use client";
import { navLinks } from "./navLinks";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleShowNav = (e: any) => {
    if (e.target.dataset.name === "open-icon") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  const handleSetActive = (to: any) => {
    setActiveLink(to);
  };

  useEffect(() => {
    window?.addEventListener("click", handleShowNav);

    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      {/* Big Screens */}
      <nav
        data-aos="fade-up"
        data-aos-duration="1500"
        className="fixed z-50 w-full hidden lg:flex"
      >
        <div className="container">
          <div className="bg-body-bg2 p-[6px] text-white-text flex justify-between items-center rounded-xl mt-1 select-none">
            <div className="text-main p-[6px] text-3xl font-bold tracking-widest">
              {"< Ⲍ⫯Ꭿᖱ />"}
            </div>

            <ul className="flex gap-2">
              {navLinks.map(({ path, body, delay }, idx) => (
                <li
                  key={idx}
                  data-aos="zoom-in-down"
                  data-aos-duration="1500"
                  data-aos-delay={delay}
                >
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={10}
                    activeClass="active"
                    onSetActive={handleSetActive}
                    className={`cursor-pointer py-[6px] px-3 rounded-xl font-medium text-lg hover:bg-main duration-100 ${
                      activeLink === path ? "bg-main" : ""
                    }`}
                    onClick={() => setShowNav(false)}
                  >
                    {body}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Small Screens */}
      {/* {showNav && ( */}
      <nav
        className={`bg-body-bg2 rounded-xl fixed z-50 !left-[50%] !translate-x-[-50%] w-[70%] max-w-[370px] lg:hidden
          ${
            showNav
              ? "bottom-[20px] animate-show-nav"
              : "bottom-[-180px] animate-hide-nav"
          }
          `}
      >
        <ul className="flex gap-2 sm:gap-3 flex-wrap p-3 sm:p-5 justify-center items-center">
          {navLinks.map(({ path, body }, idx) => (
            <li key={idx}>
              <Link
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                // offset={10}
                activeClass="active"
                onSetActive={handleSetActive}
                className={`cursor-pointer py-1 text-white-text rounded-lg border-2 border-white-text font-medium flex justify-center w-[100px] text-sm hover:bg-main duration-100 ${
                  activeLink === path ? "bg-main" : ""
                }`}
                onClick={() => setShowNav(false)}
              >
                {body}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* )} */}

      {/* Icons */}
      <div className="bg-main fixed bottom-4 right-4 z-50 w-9 h-9 rounded-md text-white-text flex-center text-3xl overflow-hidden cursor-pointer lg:hidden p-1">
        {showNav ? (
          <MdOutlineClose className="w-full h-full" onClick={handleShowNav} />
        ) : (
          <RiMenu5Fill
            className="w-full h-full"
            data-name="open-icon"
            onClick={handleShowNav}
          />
        )}
      </div>
    </>
  );
};
