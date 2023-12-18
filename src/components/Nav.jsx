"use client";
import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const navLinkData = [
  { icon: <BiHomeAlt />, path: "home", offset: true },
  { icon: <BiUser />, path: "about" },
  { icon: <BsClipboardData />, path: "services" },
  { icon: <BsBriefcase />, path: "work" },
  { icon: <BsChatSquareText />, path: "contact" },
];

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-8">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          {navLinkData.map((link, index) => (
            <Link
              to={link.path}
              key={`navLink${index}`}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={link.offset ? -200 : 0}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
