"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-start flex-1 "
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase text-accent">
                Get in touch
              </h4>
              <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start flex-1 p-6 pb-24 border rounded-2xl gap-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
            />
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Your Message"
              className="w-full py-12 mb-12 transition-all bg-transparent border-b outline-none resize-none placeholder:text-white focus:border-accent"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
