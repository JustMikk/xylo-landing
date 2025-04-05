"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import { CircleCheck, DatabaseIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 mx-auto md:px-6">
        <SectionHeader title="WHO WE ARE" />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full py-8"
        >
          <div className="flex gap-6">
            <div className="flex items-center justify-center rounded-full bg-cyan-500 border border-cyan-500 bg-cyan-700/60 shadow-[0_0_15px_rgba(168,85,247,0.5)] w-12 h-12 p-3">
              <DatabaseIcon className="text-white/90 text-xl" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              We are a{" "}
              <span className="bg-gradient-to-bl bg-clip-text text-transparent from-sky-700/60 via-cyan-600 to-teal-400">
                group of experts
              </span>{" "}
              looking to help companies leverage technology to do more than they
              had ever thought possible.
            </h2>
          </div>
          <p className="text-white/70 text-lg sm:text-xl md:text-2xl mb-6">
            We offer the full range of services to provide comprehensive
            solutions for your business. From systems design to development and
            beyond, we're here to help you succeed.
          </p>
        </motion.div>
        <motion.div
          className="relative "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 justify-between gap-6 w-full">
            <div className="relative m-12 bg-gradient-to-bl from-sky-700/60 via-cyan-600 to-teal-400 hover:shadow-[0_-4px_0_0_rgba(0,0,0,0),4px_0_40px_rgba(6,182,212,0.2),-4px_0_40px_rgba(6,182,212,0.2),0_0_40px_rgba(6,182,212,0.2)] group hover:p-8 hover:rotate-2 transition-transform rounded-lg overflow-hidden">
              <Image
                src="/images/team-work.png?height=100&width=100"
                width={500}
                height={300}
                alt="Team working together"
                className="w-full h-auto group-hover:-rotate-3 transition-transform rounded-lg"
              />
            </div>
            <div className="mt-6 flex flex-col gap-8 justify-center items-center">
              <ul className="flex flex-col gap-4 text-lg text-wrap">
                <li className="flex gap-2 text-white/70">
                  <CircleCheck className="w-6 h-6 text-cyan-500" />
                  We always focus on technical excellence
                </li>
                <li className="flex gap-2 text-white/70">
                  <CircleCheck className="w-6 h-6 text-cyan-500" />
                  Talented team with decades of experience in software
                  development
                </li>
                <li className="flex gap-2 text-white/70">
                  <CircleCheck className="w-6 h-6 text-cyan-500" />
                  We're consultants, doers, and partners for brands
                </li>
              </ul>
              <div className="w-full text-center">
                <div className="text-cyan-500 font-script text-2xl">
                  Henok Assefa
                </div>
                <div className="text-lg text-white/70">
                  CEO, Xylo Digital Solutions
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
