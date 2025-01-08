import React from "react";
import logo from "../../assets/images/logo/logo1.png";
import { landingPageNavLinks } from "../../data/constant";
import { Link as ReactScrollLink } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-sm text-primary">
      <div className="flex wrapper items-center gap-8 justify-between">
        <ReactScrollLink
          to="banner"
          className="cursor-pointer p-5"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
            className="h-[3rem] md:h-[3.5rem] object-contain"
          />
        </ReactScrollLink>
        <div className="hidden md:flex items-center gap-10">
          {landingPageNavLinks.map((item) => (
            <>
              {item.label !== "Home" ? (
                <ReactScrollLink
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-70}
                  activeClass="active-item"
                  className="text-sm cursor-pointer text-gray-800 hover:text-primary transition-all duration-300"
                  key={item.id}
                  to={item.link}
                >
                  {item.label}
                </ReactScrollLink>
              ) : (
                <Link
                  to={"/"}
                  className="text-sm cursor-pointer text-gray-800 hover:text-primary transition-all duration-300"
                >
                  {item.label}
                </Link>
              )}
            </>
          ))}
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#000000"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            width="auto"
            height="auto"
            src={logo}
            alt="logo"
            className="h-[2.5rem] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {landingPageNavLinks.map(({ label, link, id }) => (
            <>
              {label !== "Home" ? (
                <ReactScrollLink
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-70}
                  activeClass="active-item"
                  className="text-sm cursor-pointer text-gray-800 hover:text-primary transition-all duration-300"
                  key={id}
                  to={link}
                >
                  {label}
                </ReactScrollLink>
              ) : (
                <Link
                  to={"/"}
                  className="text-sm cursor-pointer text-gray-800 hover:text-primary transition-all duration-300"
                >
                  {label}
                </Link>
              )}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
