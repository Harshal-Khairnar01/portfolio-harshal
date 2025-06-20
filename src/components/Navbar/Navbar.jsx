"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { IoMdMenu } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    setIsNavbarVisible(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`${styles.menu} absolute text-white top-2 right-1 text-3xl z-30 lg:hidden transition-all duration-200 `}
        onClick={toggleNavbar}
      >
        {/* <IoMdMenu /> */}
        {isNavbarVisible ? <IoMdClose /> :   <CgMenuRightAlt />}
      </div>
      <div
        className={` ${
          pathname === "/"
            ? "bg-opacity-0 z-50"
            : "lg:w-44 bg-bg-main lg:bg-opacity-100 bg-opacity-0 lg:block h-screen w-20 lg:relative fixed top-0 left-0 z-50   "
        } ${isNavbarVisible ? "block  " : "hidden lg:block"} `}
      >
        <div
          className={`flex flex-col gap-1${
            pathname === "/"
              ? " absolute top-0 left-0 h-screen lg:w-[158px]"
              : " lg:w-[158px] lg:h-screen lg:fixed  h-screen w-20"
          }`}
        >
          <div
            className={`w-full h-36 bg-bg-sec flex justify-center items-center relative ${
              pathname === "/"
                ? "bg-opacity-70"
                : " bg-opacity-80 lg:bg-opacity-100"
            }`}
          >
            <Image src="/logo.png" alt="Harshal Khairnar" width={65} height={200} />
          </div>
          <div
            className={`bg-bg-sec w-full h-screen flex flex-col gap-7 pt-24 ${
              pathname === "/"
                ? "bg-opacity-70"
                : " lg:bg-opacity-100 bg-opacity-80"
            }`}
          >
            <NavLink Icon={IoHome} link="/" name="Home" pathname={pathname} />
            <NavLink
              Icon={FaUserAlt}
              link="/about"
              name="About"
              pathname={pathname}
            />
            <NavLink
              Icon={FaAddressBook}
              link="/resume"
              name="Resume"
              pathname={pathname}
            />
            <NavLink
              Icon={IoBriefcase}
              link="/portfolio"
              name="Portfolio"
              pathname={pathname}
            />
            <NavLink
              Icon={FaEnvelope}
              link="/contact"
              name="Contact"
              pathname={pathname}
            />
          </div>
        </div>
      </div>
    </>
  );
}
