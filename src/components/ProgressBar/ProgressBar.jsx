import React from "react";
import styles from "./ProgressBar.module.css";
import stylestext from "@/app/styles/text.module.css";

export default function ProgressBar({ skill, percent }) {
  return (
    <div className={`${styles.progress} my-2 py-1   w-11/12   `}>
      <div className={`${styles.bar}  p-1 `}>
        <div className={styles.subject}>
          <span
            className={`${styles.sspan} text-white  tracking-wider text-[13px] px-1 ${stylestext.lakton}`}
          >
            {skill}
          </span>
        </div>
        <div
          className={`${styles.barline} h-[7px] w-full   relative  bg-bg-main rounded-md`}
        >
          <span
            className={`${styles.bspan} ${styles.sub} h-[7px] absolute rounded-md bg-[#e7212b] ${stylestext.head} `}
            style={{ width: `${percent}%` }}
            data-percent={percent}
          ></span>
        </div>
      </div>
    </div>
  );
}
