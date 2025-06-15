"use client";

import React, { useState } from "react";
import ProjCard from "../ProjCard/ProjCard";
import NewCard from "../NewCard/NewCard";
import { TextRevealCard } from "../TextRevealCard/TextRevealCard";
import styles from "@/app/styles/text.module.css";
import { ImInfinite } from "react-icons/im";
import ProjectModal from "../ProjectModal/ProjectModal";

export default function Portfolio() {
  const children = (
    <div>
      <h1>This is my new Component</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, nemo
        sint! Unde?
      </p>
    </div>
  );

  const projects = [
    {
      link: "https://harshal-khairnar.vercel.app",
      heading: "Personal Portfolio Website",
      desc: "I developed a personal portfolio website to showcase my skills and foster professional growth. Built with Next.js and Tailwind CSS, it integrates MongoDB for seamless data handling and utilizes Node.js and Express.js for robust API functionality. Enhanced with Google Fonts, it embodies a blend of modern design and functional efficiency.",
      img: "/portfolio.png",
      skills: "NextJs, Tailwind Css, NodeJs, ExpressJs, MongoDb ",
      github: "https://github.com/Harshal-Khairnar01/portfolio-harshal",
    },
    {
      link: "https://auth-system-by-harshal.vercel.app",
      heading: "Authentication System",
      desc: "This project is a complete authentication system built using the MERN stack. Users can register, log in, verify their email, and reset their password if forgotten. It also includes protected routes for security and uses a clean and responsive UI designed with Tailwind CSS. The backend is built using Node.js, Express.js, and MongoDB, while the frontend uses React.js.",
      img: "/authSystem.png",
      skills: "React.Js, Node.Js, Express.JS, MongoDB, Tailwind CSS ",
      github: "https://github.com/Harshal-Khairnar01/authentication-client",
    },
    {
      link: "https://snake-game-by-harshal.vercel.app",
      heading: "Snake Game",
      desc: "The Snake Game is a classic arcade-style browser game developed using HTML, CSS, and JavaScript, designed to deliver a smooth and engaging experience across both desktop and mobile devices. Players control the snake using arrow keys in desktop and in mobile there is arrow created on window, guiding it to eat food and grow in length while avoiding collisions. The game features real-time updates, score tracking, game-over detection, and a restart option. Special attention was given to mobile responsiveness, ensuring the game layout adapts perfectly to smaller screens for an optimized and consistent gameplay experience.",
      img: "/snake.png",
      skills: "HTML5, CSS, Javascript",
      github: "https://github.com/Harshal-Khairnar01/snake-game",
    },
    // {
    //   link: "https://next-do-by-harshal.vercel.app/",
    //   heading: "Next Do",
    //   desc: "Next-Do is a feature-rich task management application built with React.js, offering functionalities such as task creation, completion toggling, and deletion with an integrated Undo mechanism that allows recovery within 5 seconds. Leveraging the localStorage API, it ensures persistent state across browser sessions without the need for backend services.",
    //   img: "/todo.png",
    //   skills: "React.js Tailwind Css",
    //   github: "https://github.com/Harshal-Khairnar01/todo-app",
    // },
    {
      link: "https://next-do-by-harshal.vercel.app/",
      heading: "Next Do",
      desc: "Next Do is a modern, responsive, and high-performance Todo application built using React and Redux Toolkit. Designed with scalability and usability in mind, this project demonstrates complete CRUD functionality, state management using Redux, and data persistence through the browser's localStorage.",
      img: "/todo.png",
      skills: "React.js Tailwind Css React-redux redux-toolkit",
      github: "https://github.com/Harshal-Khairnar01/todo-redux",
    },
    {
      link: "https://lockmint-password-generator-by-harshal.vercel.app",
      heading: "Lockmint : secure password generator",
      desc: "Lockmint is a lightweight, user-friendly web application developed using React.js that allows users to generate secure and customizable passwords instantly. It includes options to toggle uppercase, lowercase, numbers, and special characters, along with the ability to set password length via a slider. Upon generation, users can copy the password to the clipboard with a single click. The app ensures randomness and complexity, helping users strengthen their digital security effortlessly.",
      img: "/lockmint.png",
      skills: "React.js Tailwind Css",
      github: "https://github.com/Harshal-Khairnar01/password-generator",
    },
    {
      link: "https://tic-tac-toe-by-harshal.vercel.app",
      heading: "Tic Tac toe Game",
      desc: "The Tic-Tac-Toe game is an interactive two-player web application developed using React.js. It features a clean and responsive user interface where players alternate turns to mark X or 0 on a 3x3 grid. The game detects win conditions, draws, and displays the result instantly. It also includes a reset button to restart the game at any time. The application efficiently uses React state management to track moves, determine outcomes, and render updates in real-time.",
      img: "/ttt.png",
      skills: "React.js",
      github: "https://github.com/Harshal-Khairnar01/tic-tac-toe",
    },
    {
      link: "https://foodiess-heaven.vercel.app",
      heading: "Foodies' Heaven : Recipe Website",
      desc: "I developed a comprehensive full stack recipe website to demonstrate my skills in frontend, backend, and API testing. Users can create accounts, manage their profiles, and upload recipes, all seamlessly integrated with Next.js on the frontend and Node.js with Express.js on the backend. For efficient image handling, I utilized Cloudinary, and MongoDB serves as the database for storing user data. Implementing NextAuth for authentication, I learned to manage different user roles and created an admin dashboard for efficient data management. I created various APIs to handle users, recipes, and chefs data, ensuring a smooth and dynamic user experience. This project provided valuable real-world experience in building a robust, user-friendly platform.",
      img: "/recipe.png",
      skills:
        "NextJs, Tailwind Css, NodeJs, ExpressJs, MongoDb, Cloudinary, NextAuth",
      github: "https://github.com/Harshal-Khairnar01/foodies-heaven-server",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };
  const handleClose = () => setSelectedProject(null);

  return (
    <>
      <div className="my-16  ">
        <h1 className={` ${styles.head} text-center text-white  text-4xl `}>
          Portfolio
        </h1>
        <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
          - -
          <ImInfinite size={35} />- -
        </h2>
      </div>

      <div
        className="w-full  flex  justify-center gap-5 mt-5 lg:mt-0
      "
      >
        <div className=" w-[90%]  ">
          <div
            className=" bg-[#161616]   my-5 w-full mx-auto rounded-3xl lg:px-10 px-5 lg:py-10 py-10 lg:pl-7  grid lg:grid-cols-3 grid-cols-1 gap-10   "
            // style={{
            //   backgroundImage: `url("/bg2.jpg")`,
            //   backgroundSize: "cover",
            //   transition: "background-image 1s ease-in-out",
            // }}
          >
            {projects.map((project) => (
              <ProjCard
                key={project.heading}
                link={project.link}
                heading={project.heading}
                description={project.desc}
                img={project.img}
                skills={project.skills}
                onClick={() => handleOpen(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />

      {/* <NewCard
          img="/logo.png"
          heading="Heading"
          content=" lorem12 hfj fjff hvfjhvdenw dhejdvbf devhfebv fejvhfbe fhf hff fhf fbfh rfnhfh vjfne fdhv fjv fhfjebf fjjgbf fhfn f ghgfbg ghgf fhfbrf fbgvf f f fbfbfbbf"
          link="#"
        /> */}

      {/* <TextRevealCard
        text="My Name is Harshal"
        revealText="I am Harshal Khairnar"
        children={children}
      /> */}
    </>
  );
}
