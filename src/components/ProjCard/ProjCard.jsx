import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/app/styles/text.module.css";

export default function ProjCard({ heading, link, description, img, skills,github,onClick }) {
  return (
    <>
      

      <div
       onClick={onClick}
      className=" mx-auto   bg-opacity-20 bg-gray-600 w-[300px] h-[340px]  rounded-lg  p-2 cursor-pointer  ">
        <div className="  w-full">
           <div className=" w-full relative  h-[140px] rounded-lg overflow-hidden  cursor-pointer ">
           
              <Image
                src={`/project${img}`}
                alt={heading}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 45vw"
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
