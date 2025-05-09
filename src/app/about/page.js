import Image from "next/image";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

import { FaLaptopCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImInfinite } from "react-icons/im";

import { FaRegCircle } from "react-icons/fa";

import { TbMovie } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { GiBiceps } from "react-icons/gi";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { FaImage } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

import styles from "../styles/text.module.css";

import Link from "next/link";
import Interest from "../components/Interest/Interest";

export default function page() {
  return (
    <>
      <div className=" w-full  bg-bg-main">
        <div className="my-20">
          <h1 className={` ${styles.head} text-center text-white  text-4xl `}>
            About Me
          </h1>
          <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
            --
            <ImInfinite size={35} />
            --
          </h2>
        </div>
        <div className=" lg:w-[81%] w-[85%] lg:p-10 p-5 mx-auto bg-black rounded-2xl flex flex-col mb-10 ">
          <div className="flex flex-col lg:flex-row  ">
            <div className="lg:w-[30%] w-full  ">
              <div className=" relative    w-full    overflow-hidden  flex justify-center items-center lg:justify-normal ">
                <div className=" rounded-full relative  overflow-hidden w-[280px] lg:mt-2">
                  <Image
                    alt="Harshal Khairnar"
                    width={560}
                    height={500}
                    src="/harshprof3.jpg"
                    className=" hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] w-full lg:py-4 lg:px-2 px-3 py-3 mt-3 lg:mt-0  ">
              <h1
                className={`text-white lg:text-xl text-2xl font-bold ${styles.head}`}
              >
                Harshal Khairnar
              </h1>
              <h2 className="text-red-500 text-sm flex gap-3 my-1 items-center tracking-wider">
                {" "}
                <span>
                  <FaMapLocationDot size={16} />
                </span>{" "}
                Indore, India
              </h2>
              <p
                className={`text-white  font-mirza mt-5  lg:leading-[1.8rem] text-[1.2rem] lg:text-xl leading-[1.6rem] ${styles.mirza}  `}
              >
                Hello, I&apos;m Harshal Khairnar, a dedicated Computer Science
                student pursuing Integrated Masters of Computer Applications at
                Acropolis Institute of Technology & Research, Indore, I have
                immersed myself in cutting-edge technologies like Next.js,
                Node.js, Express.js, MongoDB, and React.js. My passion for
                continuous learning keeps me updated with the latest tech
                trends. I thrive in team environments and believe in the power
                of collaboration. With a love for teaching and photography, I
                bring creativity and problem-solving skills to my work. As a
                foodie who enjoys trying new dishes, I bring unique energy to
                any team. I am eager to leverage my skills and passion for
                technology to contribute effectively to a dynamic team
              </p>
            </div>
          </div>
          <div className="lg:flex lg:px-4 px-1 py-4 lg:mt-14 mt-8 lg:gap-6 grid grid-cols-2 gap-2 ">
            <div className="flex gap-1  lg:w-[260px] ">
              <div className=" lg:w-[46px] lg:h-[46px] w-12 h-12 rounded-full text-white border-2  border-red-500 flex justify-center items-center">
                <TiStarFullOutline size={25} />
              </div>
              <div className="flex flex-col  justify-center ">
                <h1
                  className={`text-white uppercase  text-sm lg:text-base ${styles.carrios}`}
                >
                  Fresher
                </h1>
                <h3 className="text-red-500 text-[10px]">Experience</h3>
              </div>
            </div>
            <div className="flex gap-1   lg:w-[230px]">
              <div className=" lg:w-[46px] lg:h-[46px] w-12 h-12 rounded-full text-white  border-2 border-red-500 flex justify-center items-center">
                <FaGraduationCap size={25} />
              </div>
              <div className="flex flex-col  justify-center ">
                <h1
                  className={`text-white uppercase  text-sm lg:text-base ${styles.carrios}`}
                >
                  Learning
                </h1>
                <h3 className="text-red-500 text-[10px]">Continue</h3>
              </div>
            </div>
            <div className="flex gap-1  lg:w-[230px] ">
              <div className=" lg:w-[46px] lg:h-[46px] w-12 h-12 rounded-full text-white border-2  border-red-500 flex justify-center items-center">
                <FaLaptopCode size={25} />
              </div>
              <div className="flex flex-col  justify-center ">
                <h1
                  className={`text-white uppercase  text-sm lg:text-base ${styles.carrios}`}
                >
                  To Hire
                </h1>
                <h3 className="text-red-500 text-[10px]">Available</h3>
              </div>
            </div>
            <Link
              href="/Harshal-Khairnar-Resume-1.pdf"
              target="_blank"
              className="flex gap-1 justify-center items-center border-red-500  border-b-2 hover:border-l-2 hover:border-b-0 duration-100 hover:bg-bg-main hover:rounded-r-md  "
            >
              <h1
                className={` text-white   cursor-pointer p-3 tracking-wider text-sm  lg:text-base hover:text-red-500 ${styles.carrios} `}
              >
                Download Resume
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-20 mb-10">
            <h1 className="text-center text-white  text-2xl ">My Interests</h1>
            <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
              --
              <FaRegCircle size={15} className=" font-extrabold" />
              --
            </h2>
          </div>
          <div className=" lg:w-[81%] w-[85%] p-12 mx-auto bg-black rounded-2xl  mb-10 grid lg:grid-cols-4 lg:gap-12 grid-cols-1 gap-12 ">
            <Interest Icon={TbMovie} int="Movies" />
            <Interest Icon={PiForkKnifeFill} int="Cooking" />
            <Interest Icon={IoColorPaletteSharp} int="Drawing" />
            <Interest Icon={ImHeadphones} int="Music" />
            <Interest Icon={GiBiceps} int="Workout" />
            <Interest Icon={FaImage} int="Photography" />
            <Interest Icon={FaLaptop} int="Programming" />
            <Interest Icon={FaBook} int="Teaching" />
          </div>
        </div>
        {/* <div>
          <div className="mt-20 mb-10">
            <h1 className="text-center text-white  text-2xl ">Wish List</h1>
            <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
              --
              <FaRegCircle size={15} className=" font-extrabold" />
              --
            </h2>
          </div>
          <div className=" lg:w-[81%] w-[85%] p-12 mx-auto bg-black rounded-2xl  mb-10 grid grid-cols-4 gap-12 ">
            <Interest Icon={TbTargetArrow} int="Movies" />
            <Interest Icon={FiTarget} int="Cooking" />
            
          </div>
        </div> */}
      </div>
    </>
  );
}

// Hello, I'm Harshal Khairnar, a student who persuing Integrated Master of Computer Applications from Acropolis Institute of Technology & Research, Indore. I am a Fresher and I have no work Experience. I want to learn new technologies to grow my skills. I think learning never ends, we are learners in every stage of life. I believe in team working, working together on a project is more effective than working alone. I like to watch movie when I feel bored. I like teaching and also love photography a little bit. The secret of creativity is knowing how to hide your sources. I am very foodie. I like to eat new dishes.
