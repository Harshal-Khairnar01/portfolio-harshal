"use client";

import React, { useState, useEffect } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { TextRevealCard } from "../TextRevealCard/TextRevealCard";

import styles from "@/app/styles/text.module.css";
import { BackgroundBeams } from "../BackgroundBeam/BackgroundBeam";

export default function Home({ images, roles }) {
  
  const [roleIndex, setRoleIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen duration-150 flex justify-center items-center flex-col gap-3 bg-bg-main
       overflow-hidden   "
    >
      <BackgroundBeams/>
      {/* <div className=" lg:hidden   flex justify-center items-center flex-col">
        <h1
          className={` font-extrabold lg:text-6xl  text-[45px] text-white border-white  text-center px-10 lg:px-0 leading-[3.2rem]  ${styles.kanti} `}
        >
          Harshal Khairnar
        </h1>
        <h2
          className={`lg:text-3xl py-2 text-xl  font-semibold text-white px-1 ${styles.sen}`}
        >
          I am a{" "}
          <span className="lg:text-4xl text-2xl">{roles[roleIndex]}</span>
        </h2>
      </div> */}
      <div className="  lg:block">
        <TextRevealCard
          text="Harshal Khairnar"
          revealText="Full Stack Developer"
          className={" bg-transparent border-none"}
        />
      </div>

      <div className="absolute bottom-20  lg:right-2  lg:w-14 lg:h-64 lg:top-0 lg:p-2">
        <SocialLinks />
      </div>
    </div>
  );
}
