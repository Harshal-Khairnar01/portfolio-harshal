"use client";

import React, { useEffect, useState } from "react";

import styles from "./CircularProgress.module.css";
import textstyles from "@/app/styles/text.module.css";

const useAutoIncrement = (target, speed) => {
  console.log(target, speed);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const increment = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(increment);
          return prev;
        }
      });
    }, 10);
    return () => {
      clearInterval(increment);
    };
  }, []);
  return count;
};
export default function CircularProgress({ target,skill }) {
  const strokeDashOffset = 472 - 472 * (target / 100);
  const count = useAutoIncrement(target, 1000);
  return (
    <div className="w-[185px] mx-auto p-2 flex flex-col justify-center items-center group">
      <div className={styles.skill}>
        <div className={`  ${styles.outer}  flex justify-center items-center`}>
          <div
            className={` flex flex-col justify-center items-center bg-bg-main  ${styles.inner} `}
          >
            <div className={` font-bold text-sm text-white  textstyles.head `}>{count}%</div>
            <h1 className={` text-gray-300  tracking-wider  mt-1 group-hover:text-gray-200 duration-300 text-center ${textstyles.mirza} `}>{skill}</h1>
          </div>
        </div>

        <svg
          className={styles.svg}
          xmlns="https://www.w3.org/2000/svg"
          version="1.1"
          width="150px"
          height="150px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#F2003C" />
              <stop offset="100%" stopColor="#FF2400" />
            </linearGradient>
          </defs>
          <circle
            className={styles.cir}
            cx="75"
            cy="75"
            r="72"
            stroke-linecap="round"
            style={{ "--stroke-dash-offset": strokeDashOffset }}
          />
        </svg>
      </div>
    
    </div>
  );
}
