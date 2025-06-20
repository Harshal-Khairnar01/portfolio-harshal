"use client";

import { contact } from "@/lib/action";
import React, { useEffect, useRef } from "react";
import { ImInfinite } from "react-icons/im";
import { useFormState } from "react-dom";

import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import styles from '@/app/styles/text.module.css'

export default function Contact() {
  const [state, formAction] = useFormState(contact, undefined);
  const formRef = useRef(null);
  useEffect(() => {
    state?.success &&
      toast.success(state.name + " your message submitted successfully!");
    formRef.current.reset();
  }, [state?.success]);
  return (
    <>
      <div className="w-full ">
        <Toaster
          className=" bg-white text-red-500"
          position="top-center"
          reverseOrder={false}
        />
        <div className=" my-16">
        <h1 className={` ${styles.head} text-center text-white  text-4xl `}>Contact</h1>
          <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
            --
            <ImInfinite size={35} />
            --
          </h2>
        </div>
        <div className=" lg:w-[80%] w-[90%] lg:px-8 px-3 py-4 mx-auto bg-black rounded-2xl flex flex-col mb-10 hover:-translate-y-2  duration-300">
          <form ref={formRef} action={formAction} className="w-full">
            <div className="w-full lg:gap-24 gap-5  flex justify-between items-center flex-col lg:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className={` ${styles.changa} w-full lg:w-1/2 bg-transparent outline-none lg:p-4 px-2 py-6  font-extralight text-white  border-b border-[#77756e] focus:border-red-500 duration-700  `}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className={` ${styles.changa} w-full lg:w-1/2 bg-transparent outline-none lg:p-4 px-2 py-6  font-extralight text-white  border-b border-[#77756e] focus:border-red-500 duration-700  `}
              />
            </div>
            <div className="w-full mt-16">
              <textarea
                rows={4}
                type="text"
                placeholder="Your Message"
                name="message"
                required
                className={` ${styles.changa} resize-none bg-transparent lg:p-4 px-2 w-full border-b border-[#77756e] font-extralight text-white outline-none focus:border-red-500 duration-700 `}
              />
            </div>
            <div className="mt-10 flex justify-center items-center w-full">
              <button className={` ${styles.head} bg-transparent py-2 px-4 text-white text-lg border-b-2 border-red-500 hover:bg-bg-main hover:border-l-2 duration-100 hover:border-b-0 hover:rounded-r-lg `}>
                Send Message
              </button>
            </div>
            {state?.error && (
              <h1 className="font-bold p-2 text-xs text-red-500 ">
                {state?.error}
                {state?.success}
              </h1>
            )}
          </form>
        </div>

        <div className=" w-[90%] lg:w-[80%] px-16 py-8 mx-auto bg-black rounded-2xl  mb-5 mt-20 hover:-translate-y-2  duration-300 grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className=" flex flex-col gap-4 text-white items-center p-2">
            <h3 className=" text-3xl">
              <FaTelegramPlane />
            </h3>
            <h1 className={` ${styles.changa} text-sm mt-1`}>harshalkhairnar7244@gmail.com</h1>
            <h2 className={` ${styles.lakton} text-xs text-[#77756e]`}>Email</h2>
          </div>

          <div className=" flex flex-col gap-4 text-white items-center p-2">
            <h3 className=" text-3xl">
              <FaLocationDot />
            </h3>
            <h1 className={` ${styles.changa} text-sm mt-1`}>Indore (M.P.)</h1>
            <h2 className={` ${styles.lakton} text-xs text-[#77756e]`}>Address</h2>
          </div>

          <div className=" flex flex-col gap-4 text-white items-center p-2">
            <h3 className=" text-3xl">
              <FaPhoneAlt />
            </h3>
            <h1 className={` ${styles.changa} text-sm mt-1`}>(+91) 626 457 XXXX</h1>
            <h2 className={` ${styles.lakton} text-xs text-[#77756e]`}>Phone</h2>
          </div>
        </div>
      </div>
    </>
  );
}
