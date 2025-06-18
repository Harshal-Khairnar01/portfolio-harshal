"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "JavaScrip Full Course Online",
    img: "/certificates/jsCertificate.jpg",
  },
  {
    id: 2,
    title: "Fundamentals of Database",
    img: "/certificates/dbmsCertificate.jpg",
  },
  {
    id: 3,
    title: "React Js Course Online",
    img: "/certificates/reactCertificate.jpg",
  },
  {
    id: 4,
    title: "Programming using Java",
    img: "/certificates/javaCertificate.jpg",
  },
];
const CARD_HEIGHT = 100;

const CertificateShowCase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className=" lg:h-[600px] h-[400px] w-full    flex justify-center items-center px-4 lg:py-10">
      <div className="relative w-11/12 w lg:w-[600px] h-3/5  lg:h-[400px] ">
        {certificates.map((cert, index) => {
          const isHovered = hoveredId === cert.id;

          return (
            <motion.div
              key={cert.id}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute  top-0 left-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-xl transition-all duration-500 border border-white"
              style={{
                zIndex: isHovered ? 999 : index,
              }}
              animate={{
                y: isHovered ? -20 : index * 5,
                scale: isHovered ? 1.15 : 1,
                rotate: isHovered ? 0 : index * 2.3,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <div className="h-[5%] text-gray-300 flex  justify-end  items-start font-medium  px-2 text-[8px] bg-black">
                {cert.title}
              </div>

              <div className="h-[95%]  bg-gray-100">
                <Image
                  src={cert.img}
                  alt={cert.title}
                  width={2000}
                  height={2000}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificateShowCase;
