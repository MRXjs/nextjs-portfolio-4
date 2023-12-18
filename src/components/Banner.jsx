"use client";
import React from "react";
import bannerImg from "@/assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import Link from "next/link";

const socialLinksData = [
  { icon: <FaYoutube />, path: "https://www.youtube.com" },
  { icon: <FaGithub />, path: "https://www.github.com" },
  { icon: <FaDribbble />, path: "https://www.Dribbble.com" },
];

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Sures <span>Ranathunga</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto mb-8 lg:mx-0"
            >
              Excepteur enim eiusmod velit excepteur reprehenderit amet labore
              nulla. Fugiat fugiat eiusmod reprehenderit nulla
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <Link href={"/"} className="text-gradient btn-link">
                My Portfolio
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {socialLinksData.map((item, index) => (
                <Link key={index} href={item.path}>
                  {item.icon}
                </Link>
              ))}
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 hidden lg:flex max-w-[320px] lg:max-w-[482px]"
          >
            <Image src={bannerImg} alt="profile image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
