import React from "react";
import styles from "./NewCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NewCard({img,heading,content,link}) {
  return (
    <div className={`${styles.container} relative flex justify-center items-center p-5`}>
      <div className={`${styles.card} relative w-[350px] h-[200px] bg-[#fff] duration-[0.5s]`}>
        <div className={`${styles.lines} absolute  bg-[#000] `}></div>
        <div className={`${styles.imgBx} absolute -top-[50px] left-[50%] w-[150px] h-[150px] bg-[#000] flex justify-center items-center`}>
          <Image src={img} className={`${styles.img}`} alt="" width={200} height={200} />
        </div>
        <div className={`${styles.content} flex justify-center items-end `}>
          <div className={`${styles.details} px-4  py-5 flex justify-center flex-col`}>
            <h2 className=" text-[#ff3838] font-bold text-2xl text-center ">{heading}</h2>
            <p className={`${styles.para} text-white opacity-0 text-justify`}>
              {" "}
              {content}
            </p>
            <Link
              className={`${styles.link} px-2 py-2 bg-[#ff3838] text-[#292929]  font-bold opacity-0 rounded-md  mx-auto `}
              href={link}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
