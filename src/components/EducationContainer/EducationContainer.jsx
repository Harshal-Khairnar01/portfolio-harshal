import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import styles from '@/app/styles/text.module.css'


export default function EducationContainer({
  course,
  duration,
  institute,
  marks,
}) {
  return (
    <div className=" text-white relative py-2 px-3 my-2  duration-300  flex gap-2 z-30  group">
        <div className=" absolute w-5   h-5 -left-6 top-2 bg-red-700 rounded-full z-20 border-2 border-[#272727]  group-hover:border-red-900 duration-300 group-hover:bg-[#171717] hidden lg:block  ">

        </div>
      <div className=" z-10 h-40 m-0  -left-4 -top-1 absolute border-2 border-[#171717] group-hover:border-red-900 duration-700 hidden lg:block"></div>
      <div>
        <h1 className={` text-[20px] ${styles.tittilium}`}>{course}</h1>
        <h2 className={`lg:flex lg:items-center gap-2 lg:text-[11px] text-[14px] mt-3 text-red-500 font-semibold ${styles.lakton}`}>
          <FaCalendarAlt className=" inline  lg:block" /> <span>{duration}</span>{" "}
        </h2>
        <h3 className={`text-[17px] mt-3 ${styles.aleya}`}>{institute}</h3>
        <h4 className={` mt-3 lg:text-[17px] text-[17px] ${styles.tittilium}`}>{marks}</h4>
      </div>
    </div>
  );
}
