import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/app/styles/text.module.css";

export default function ProjCard({ heading, link, description, img, skills,github,onClick }) {
  return (
    <>
      {/* <div className=" w-full  bg-[#232323]  rounded-lg flex flex-col  gap-3 p-5 ">
        <div className="  lg:w-2/5 w-full p-2 ">
          <div className=" w-full relative lg:h-[180px] h-[140px] rounded-md overflow-hidden  cursor-pointer ">
            <Link href={link} target=" _blank">
              <Image
                src={img}
                alt={img}
                fill
                className=" hover:scale-105 duration-700"
              />
            </Link>
           
          </div>
        </div>
        <div className={` lg:w-3/5 w-full flex flex-col text-white p-1`}>
          <h1 className={`px-1 text-2xl ${styles.head}   `}>{heading}</h1>
          <p className={`px-1 mt-2 text-gray-300 ${styles.changa}`}>{description}</p>
          <h2 className={` px-1 mt-2 text-base text-gray-200 ${styles.carrios}`}>
            {" "}
            <span className={` text-lg ${styles.head} `}>Technologies:  </span>{skills}
          </h2>
        </div>
      </div> */}

      <div
       onClick={onClick}
      className=" mx-auto   bg-opacity-20 bg-gray-600 w-[300px] h-[340px]  rounded-lg  p-2 cursor-pointer  ">
        <div className="  w-full">
           <div className=" w-full relative  h-[140px] rounded-lg overflow-hidden  cursor-pointer ">
           
              <Image
                src={img}
                alt={heading}
                fill
                className=" hover:scale-105 duration-700"
              />
           
          </div>
        </div>
        <div className=" text-white mt-3">
           <h1 className={`px-1 text-xl text-center ${styles.head}   `}>{heading}</h1>
           <p className={`px-2 mt-2 text-center text-gray-300 ${styles.changa} line-clamp-4`}>{description}</p>
        </div>
      </div>
    </>
  );
}
