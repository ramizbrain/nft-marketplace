import React from "react";
import Image from "next/image";
import ProfileIcon from "public/icons/user.png";
import Logo from "public/nav/logo.png";
import HamburgerMenu from "public/hamburger-white.svg";

const Navigation = () => {
  return (
    <>
      {/* Navigation */}
      <div className="box flex items-center justify-between py-4">
        <div className="flex-none">
          <Image alt="Vercel logo" src={Logo} height={28} />
        </div>

        <div className="flex gap-4 items-center">
          <div className="md:hidden">
            <Image
              className="text-white"
              alt="hamburger menu"
              src={HamburgerMenu}
              height={24}
            />
          </div>
          <div className="hidden md:flex">
            <span className="py-2 px-3 rounded-md hover:bg-[#161414]">
              Marketplace
            </span>
            <span className="py-2 px-3 rounded-md hover:bg-[#161414]">
              Rankings
            </span>
            <span className="py-2 px-3 rounded-md hover:bg-[#161414]">
              Connect a wallet
            </span>

            <div className="flex gap-2 items-center bg-[#A259FF] py-2 px-3 rounded-md">
              <Image
                className="object-none"
                alt="users"
                src={ProfileIcon}
                width={16}
                height={16}
              />
              <p>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
