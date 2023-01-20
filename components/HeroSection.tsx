import React from "react";
import Image from "next/image";
import HeroImage from "public/hero-image.png";
import Avatar from "public/avatar.png";
import RocketLaunch from "public/RocketLaunch.svg";

const HeroSection = () => {
  return (
    // Split 2 column di desktop version
    <div className="flex flex-col md:justify-between gap-8 md:flex-row md:items-center ">
      {/* Column 1 : Desktop Section Kiri */}
      <div className=" flex flex-col gap-10 max-w-[600px] ">
        {/* Headline */}
        <div className="grid gap-2.5">
          <h1 className="heading-xl font-semibold md:heading-large lg:heading-2xl">
            Discover digital art & Collect NFTs
          </h1>
          <p className="base-medium">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        {/* NFT Card Mobile */}
        <div className="rounded md:hidden overflow-hidden">
          <div className="md:max-w-[330px] lg:max-w[510px] ">
            <Image alt="hero image" src={HeroImage} sizes="(width: 100%)" />
          </div>
          <div className="flex flex-col p-[20px] gap-[10px] bg-[#3B3B3B]">
            <p className="text-[22px] font-[600]">Space Walking</p>
            <div className="flex items-center gap-2">
              <Image alt="profile user" src={Avatar} width={24} height={24} />
              <p>ramizbrain</p>
            </div>
          </div>
        </div>
        {/* Button Get Started */}
        <button className=" md:w-fit md:px-[50px] gap-3 flex h-[60px] items-center justify-center bg-[#A259FF] rounded-[20px]">
          <Image alt="rocket launch icon" src={RocketLaunch} />
          <span>Get Started</span>
        </button>
        {/* Statistic */}
        <div className="flex justify-between md:justify-start md:gap-10 ">
          <div>
            <h5 className="h5 font-semibold">240k+</h5>
            <span className="caption">Total Sale</span>
          </div>
          <div>
            <h5 className="h5 font-semibold">100k+</h5>
            <span className="caption">Auctions</span>
          </div>
          <div>
            <h5 className="h5 font-semibold">240k+</h5>
            <span className="caption">Artists</span>
          </div>
        </div>
      </div>
      {/* Column 2 : Desktop Section Kanan */}
      <div className="hidden md:flex">
        {/* NFT Card Mobile */}
        <div className="rounded overflow-hidden">
          <div className="w-full sm:max-w-[330px] md:max-w-[510px] ">
            <Image alt="hero image" src={HeroImage} sizes="(max-width: 100%)" />
          </div>
          <div className="flex flex-col p-[20px] gap-[10px] bg-[#3B3B3B]">
            <p className="text-[22px] font-[600]">Space Walking</p>
            <div className="flex items-center gap-2">
              <Image alt="profile user" src={Avatar} width={24} height={24} />
              <p>ramizbrain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
