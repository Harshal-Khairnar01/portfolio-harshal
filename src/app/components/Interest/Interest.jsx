import React from "react";
import styles from '@/app/styles/text.module.css'

export default function Interest({ int, Icon }) {
  return (
    <div className=" flex gap-1  rounded-lg overflow-hidden group cursor-pointer ">
      <div className="text-red-500 p-2 bg-bg-main   group-hover:bg-opacity-0 duration-700">
        {Icon && <Icon size={25} />}
      </div>
      <h2 className={`p-2 text-white text-xl bg-bg-main w-full group-hover:bg-opacity-0 duration-700 tracking-[1px] ${styles.iceland}`}>{int}</h2>
    </div>
  );
}
