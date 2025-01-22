import React from "react";
import ProjCard from "../ProjCard/ProjCard";
import NewCard from "../NewCard/NewCard";
import { TextRevealCard } from "../TextRevealCard/TextRevealCard";
import styles from "@/app/styles/text.module.css";
import { ImInfinite } from "react-icons/im";

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
      link: "https://harshal-khairnar.vercel.app/",
      heading: "Personal Portfolio Website",
      desc: "I developed a personal portfolio website to showcase my skills and foster professional growth. Built with Next.js and Tailwind CSS, it integrates MongoDB for seamless data handling and utilizes Node.js and Express.js for robust API functionality. Enhanced with Google Fonts, it embodies a blend of modern design and functional efficiency.",
      img: "/portfolio.png",
      skills: "NextJs, Tailwind Css, NodeJs, ExpressJs, MongoDb ",
    },
    {
      link: "https://foodiess-heaven-recipes.vercel.app/",
      heading: "Foodies' Heaven : Recipe Website",
      desc: "I developed a comprehensive full stack recipe website to demonstrate my skills in frontend, backend, and API testing. Users can create accounts, manage their profiles, and upload recipes, all seamlessly integrated with Next.js on the frontend and Node.js with Express.js on the backend. For efficient image handling, I utilized Cloudinary, and MongoDB serves as the database for storing user data. Implementing NextAuth for authentication, I learned to manage different user roles and created an admin dashboard for efficient data management. I created various APIs to handle users, recipes, and chefs data, ensuring a smooth and dynamic user experience. This project provided valuable real-world experience in building a robust, user-friendly platform.",
      img: "/recipe.png",
      skills:
        "NextJs, Tailwind Css, NodeJs, ExpressJs, MongoDb, Cloudinary, NextAuth",
    },
  ];

  return (
    <>
      <div>
        <div className="my-16 n ">
          <h1 className={` ${styles.head} text-center text-white  text-4xl `}>
            Portfolio
          </h1>
          <h2 className="text-red-500 flex  gap-2 font-bold text-xl justify-center items-center">
            - -
            <ImInfinite size={35} />- -
          </h2>
        </div>
      </div>

      <div className="w-full  flex  justify-center gap-5 mt-5 lg:mt-0 ">
        <div className="lg:w-[80%] w-[90%] ">
          <div className=" hover:-translate-y-7 duration-500 my-8 w-full mx-auto rounded-3xl lg:px-10 px-5 lg:py-10 py-10 lg:pl-7 bg-black grid lg:grid-cols-1 grid-cols-1 gap-10   ">
            {projects.map((project) => (
              <ProjCard
                key={project.heading}
                link={project.link}
                heading={project.heading}
                description={project.desc}
                img={project.img}
                skills={project.skills}
              />
            ))}
          </div>
        </div>
      </div>

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
