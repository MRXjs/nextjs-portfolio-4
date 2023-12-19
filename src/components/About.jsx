"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";

const statusData = [
  {
    firstLineText: "Year of",
    secondLineText: "Experience",
    start: 0,
    end: 3,
    duration: 3,
  },
  {
    firstLineText: "Projects",
    secondLineText: "Completed",
    start: 0,
    end: 100,
    duration: 3,
  },
  {
    firstLineText: "Satisfied",
    secondLineText: "Clients",
    start: 0,
    end: 50,
    duration: 3,
  },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" ref={ref} className="section">
      <div className="container mx-auto">
        <div className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-no-repeat bg-contain bg-about h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-4 h3">
              I'm a freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className="mb-6">
              Tempor excepteur velit elit consequat nulla mollit fugiat occaecat
              esse officia cillum enim. Exercitation sint mollit id adipisicing
              irure. Proident commodo enim cupidatat sit pariatur nisi ex
              adipisicing dolor excepteur nisi culpa laboris. Do consequat
              proident velit magna sint.
            </p>
            {/* states */}
            <div className="flex mb-12 gap-x-6 lg:gap-x-10">
              {statusData.map((item, index) => (
                <div key={`status${index}`}>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp
                        start={item.start}
                        end={item.end}
                        duration={item.duration}
                      />
                    ) : null}
                  </div>
                  <div className="text-sm font-primary tracking-[2px]">
                    {item.firstLineText}
                    <br />
                    {item.secondLineText}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact me</button>
              <Link href={""} className="text-gradient btn-link">
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
