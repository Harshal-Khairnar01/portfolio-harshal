import React from "react";
import Home from "./components/Home/Home";

export default function page() {
  const images = [
"https://res.cloudinary.com/dpzpmj1mw/image/upload/v1716041369/harshal-portfolio/blae17pdzvqzmm8egtxd.jpg",
"https://res.cloudinary.com/dpzpmj1mw/image/upload/v1716041333/harshal-portfolio/eqlximmnueicf7ciqtqu.jpg",
"https://res.cloudinary.com/dpzpmj1mw/image/upload/v1716041328/harshal-portfolio/c5uhcbikls9nisny1a0o.jpg",
"https://res.cloudinary.com/dpzpmj1mw/image/upload/v1716041328/harshal-portfolio/omagi2jcfroa7g97ywce.jpg",
"https://res.cloudinary.com/dpzpmj1mw/image/upload/v1716041322/harshal-portfolio/llgvejm5zei4p9avtxqj.jpg"

  ];
  const roles = ["Student", "Fresher", "Developer"];
  return (
    <>
      <Home images={images} roles={roles} />
    </>
  );
}
