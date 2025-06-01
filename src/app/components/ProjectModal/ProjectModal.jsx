import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import styles from "../../styles/text.module.css";


export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-80 flex justify-center items-center z-50">
      <div className=" bg-[#484747]  bg-opacity-35 w-[90%] max-w-2xl p-5 rounded-2xl relative text-white border-2 border-gray-500">
        <button
          onClick={onClose}
          className="absolute font-bold hover:scale-110  hover:text-gray-400 duration-300 top-3 right-3 text-white text-2xl"
        >
          <IoClose />
        </button>

        <div className=" mt-4">
          <Image
            src={project.img}
            alt={project.heading}
            width={500}
            height={300}
            className="rounded-md w-full object-cover"
          />

          <h1 className={`text-3xl font-bold mt-2 ${styles.head}`}>{project.heading}</h1>
          <p className={`text-gray-300 mt-2 text-sm ${styles.changa}` }>{project.desc}</p>
          <p  className={`${styles.head}  `}>
            <strong>Technologies:</strong> {project.skills}
          </p>
          <div className="mt-2 flex justify-center items-center gap-14">
            <Link
              className={`${styles.changa} flex gap-2 items-center px-2 py-1  bg-black rounded-md  `}
              target="_blank"
              href={project.link}
            >
              <FiExternalLink
                size={18}
                className="hover:text-gray-400 transition duration-300"
              />
              Live Preview
            </Link>
            <Link
              className={`${styles.changa} flex gap-2 items-center px-2 py-1  bg-black rounded-md  `}
              target="_blank"
              href={project.github}
            >
              <FaGithub
                size={18}
                className="hover:text-gray-400 transition duration-300"
              />
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
