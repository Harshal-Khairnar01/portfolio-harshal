import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import SLink from "./SLink";

export default function SocialLinks() {
  return (
    <div className=" flex lg:flex-col gap-10 lg:gap-6 justify-center items-center pt-3 z-30">
      <SLink
        Icon={FaLinkedinIn}
        link="https://www.linkedin.com/in/harshal-khairnar0"
      />
      <SLink Icon={FaGithub} link="https://github.com/Harshal-Khairnar01" />
      <SLink
        Icon={SiLeetcode}
        link="https://leetcode.com/u/harshalkhairnar7244"
      />
      <SLink Icon={FaTwitter} link="https://twitter.com/HarshalKha25502" />
      <SLink
        Icon={FaInstagram}
        link="https://www.instagram.com/harshal.khairnar_"
      />
      <SLink
        Icon={FaFacebookF}
        link="https://www.facebook.com/harshal.khairnar.984"
      />
    </div>
  );
}
