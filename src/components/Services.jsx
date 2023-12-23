"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";

// services data
const services = [
  {
    name: "UI / UX",
    description:
      "Veniam incididunt labore excepteur ipsum cupidatat deserunt. Magna non veniam non enim et",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Veniam incididunt labore excepteur ipsum cupidatat deserunt. Magna non veniam non enim et",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Veniam incididunt labore excepteur ipsum cupidatat deserunt. Magna non veniam non enim et",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Veniam incididunt labore excepteur ipsum cupidatat deserunt. Magna non veniam non enim et",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 bg-no-repeat lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="mb-6 text-accent h2">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  key={`service${index}`}
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="leading-tight font-secondary">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end flex-1">
                    <Link
                      href={""}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </Link>
                    <Link href={""} className="text-sm text-gradient">
                      {link}
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
