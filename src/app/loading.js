import React from "react";
import Loader from "./components/Loader/Loader";

export default function loading() {
  return (
    <div className="w-full h-screen bg-bg-main">
      {/* <h1 className="text-2xl font-bold text-red-500">Loading...........</h1>
    <p>We can add loader component here here</p> */}
      <Loader />
    </div>
  );
}
