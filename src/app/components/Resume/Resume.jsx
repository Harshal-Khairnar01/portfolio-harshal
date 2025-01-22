import React from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ImInfinite } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa6";

import styles from '@/app/styles/text.module.css'

import EducationContainer from "../EducationContainer/EducationContainer";

export default function Resume() {
  return (
    <div>
      <div className="my-16 n ">
        <h1 className={` ${styles.head} text-center text-white  text-4xl `}>Resume</h1>
        <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
          - -
          <ImInfinite size={35} />- -
        </h2>
      </div>

      <div className="my-5">
        <h1 className="text-center text-white  text-2xl ">Skils</h1>
        <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
          - -
          <FaRegCircle size={15} className=" font-extrabold" />- -
        </h2>
      </div>

      <div className="w-full lg:w-[80%] mx-auto  flex  justify-center gap-5 flex-col lg:flex-row lg:justify-between  ">
        <div className="lg:w-[50%]  w-10/12 mx-auto ">
          <div className=" hover:-translate-y-7 duration-500 mt-3 mb-2 lg:my-8 w-full mx-auto  rounded-xl lg:rounded-3xl px-2  py-5 bg-black flex flex-col items-center ">
            <ProgressBar skill="Core Java" percent={85} />
            <ProgressBar skill="DSA" percent={68} />
            <ProgressBar skill="HTML" percent={79} />
            <ProgressBar skill="CSS" percent={85} />
            <ProgressBar skill="Tailwind CSS" percent={75} />
            <ProgressBar skill="JavaScript" percent={85} />
            <ProgressBar skill="Node & Express JS" percent={67} />
            <ProgressBar skill="React JS" percent={70} />
            <ProgressBar skill="Next JS" percent={85} />
            <ProgressBar skill="MongoDB" percent={54} />
          </div>
        </div>
        <div className="lg:w-[50%]  w-10/12 mx-auto">
          <div className=" hover:-translate-y-7 duration-500 mt-3 mb-2 lg:my-8 w-full mx-auto  rounded-xl lg:rounded-3xl lg:px-5 lg:py-20 bg-black  grid lg:grid-cols-2 lg:gap-y-10 gap-2 py-2  ">
            <CircularProgress target={80} skill="Problem Solving SKills" />
            <CircularProgress target={70} skill="Communication skills" />
            <CircularProgress target={75} skill="Teamwork" />
            <CircularProgress target={85} skill="Adaptability" />
          </div>
        </div>
      </div>

      <div className="w-full  flex  justify-center gap-5 mt-10 lg:mt-0 ">
        <div className="w-[80%] ">
          <div className="my-5">
            <h1 className="text-center text-white  text-2xl ">Education</h1>
            <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
              - -
              <FaRegCircle size={15} className=" font-extrabold" />- -
            </h2>
          </div>
          <div className=" hover:-translate-y-7 duration-500 my-8 w-full mx-auto rounded-3xl lg:px-20 lg:py-10 py-10 pl-7 bg-black flex flex-col gap-1 ">
            <EducationContainer
              course="Integrated Master Of Computer Apllications"
              duration="2021 - 2026 | Computer Application"
              institute="Acropolis Institute Of Technology, Indore"
              marks="8.31 CGPA"
            />
            <EducationContainer
              course="Class XII"
              duration="2021 | PCM"
              institute="Nehru Smruti Higher Secondary School, Sendhwa"
              marks="97.4 Percentage"
            />
            <EducationContainer
              course="Class X"
              duration="2019"
              institute="Premsukh Public High School, Sendhwa"
              marks="96.6 Percentage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
