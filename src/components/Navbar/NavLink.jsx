import Link from "next/link";
import React from "react";
import styles from '@/app/styles/text.module.css'

export default function NavLink({ Icon, name, link,pathname }) {
  return (
    <div className="lg:w-[150px] w-20 flex flex-col justify-center items-center    ">
      <Link
        href={link}
        className={`hover:text-red-500 h-10   flex justify-center items-center duration-100   relative group ${link==pathname?"text-4xl text-red-500":"text-2xl text-white "}`}
      >
        <h1 className={`text-white p-3 rounded-lg bg-black absolute -top-[74px] hidden group-hover:block duration-150 text-sm ${styles.head} `}>{name}</h1>
        {Icon && <Icon  />}
      </Link>
    </div>
  );
}
