"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      {/* Background Radial Circle */}
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
           bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>

      {/* Content Area */}
      <div className="relative">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#98B4CE]">
            Hi, I am
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-[#E48A57]">
            Parth Kashyap
          </h1>
        </div>

        {/* Cursor Icon */}
        <motion.div
          className="hidden md:block absolute left-[20px] md:left-[240px] top-[100px] md:top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height={120}
            width={120}
            alt="cursor"
            draggable="false"
          />
        </motion.div>

        {/* Lightning Icon */}
        <motion.div
          className="hidden md:block absolute right-[20px] md:right-[220px] top-[20px]"
          drag
        >
          <Image
            src={lightning}
            height={100}
            width={100}
            alt="lightning"
            draggable="false"
          />
        </motion.div>

        {/* Intro Text */}
        <p className="text-center text-lg md:text-xl max-w-[300px] md:max-w-[500px] mx-auto mt-6 md:mt-8 text-white/80">
          I am a full stack developer focused on creating websites that are
          innovative and provide the best user experience.
        </p>

        {/* Profile Picture */}
        <Image
          src={profilepic}
          alt="profile"
          className="h-[150px] w-[150px] md:h-auto md:w-auto mx-auto mt-8"
        />
      </div>

      {/* Media Queries for small screens */}
      <style jsx>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 4rem;
          }

          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 200px) {
          h1 {
            font-size: 2.5rem;
          }

          p {
            font-size: 0.75rem;
          }

          .absolute {
            left: 10px !important;
            right: 10px !important;
          }

          .h-[150px] {
            height: 100px !important;
            width: 100px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
