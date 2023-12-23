"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import img1 from "@/assets/portfolio-img1.jpg";
import img2 from "@/assets/portfolio-img2.jpg";
import img3 from "@/assets/portfolio-img3.jpg";
import Image from "next/image";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="leading-tight h2 text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Dolor veniam mollit reprehenderit deserunt nostrud deserunt.
                Nostrud aliquip ipsum id eiusmod cupidatat enim irure dolore do.
                Proident aute dolore sit
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="relative overflow-hidden border-2 border-white/50 group rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <Image
                src={img1}
                alt=""
                className="transition-all duration-500 group-hover:scale-125"
              />
              {/* prettitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-16"
          >
            {/* image */}
            <div className="relative overflow-hidden border-2 border-white/50 group rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <Image
                src={img2}
                alt=""
                className="transition-all duration-500 group-hover:scale-125"
              />
              {/* prettitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="relative overflow-hidden border-2 border-white/50 group rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <Image
                src={img3}
                alt=""
                className="transition-all duration-500 group-hover:scale-125"
              />
              {/* prettitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
