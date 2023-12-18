import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
