import React from "react";
import Home from "./components/Home/Home";

export default function page() {
  const images = [
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg4.jpg",
    "/bg5.jpg",
    "/bg6.jpg",

  ];
  const roles = ["Student", "Fresher", "Developer"];
  
  return (
    <>
      <Home images={images} roles={roles} />
    </>
  );
}
