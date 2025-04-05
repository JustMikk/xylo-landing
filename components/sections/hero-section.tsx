"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import { ArrowDownCircle, ChevronDownCircle, Cpu, Network } from "lucide-react";
import { AiOutlineSolution } from "react-icons/ai";
import { GiProcessor } from "react-icons/gi";
import { ImConnection } from "react-icons/im";
import { FaConnectdevelop } from "react-icons/fa";
import { BiChip } from "react-icons/bi";
import { IoArrowDownOutline } from "react-icons/io5";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cyan-900/40 to-black">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Xylo Digital Solutions
          <br />
          Your guide in the{" "}
          <span className="bg-gradient-to-bl bg-clip-text text-transparent from-sky-700/60 via-cyan-600 to-teal-400">
            digital age
          </span>
          .
        </motion.h1>
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="#services">
            <Button className="bg-gradient-to-bl from-sky-700/60 via-cyan-600 to-teal-400 hover:bg-cyan-700 text-white rounded-full px-8">
              Get Started
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <FeatureCard
            icon={<FaConnectdevelop className="text-4xl text-white/90" />}
            text="Bring together people, process and technology"
            delay={0}
          />

          <FeatureCard
            icon={<BiChip className="text-4xl text-white/90" />}
            text="Custom solutions designed to meet your needs"
            delay={0.1}
          />

          <FeatureCard
            icon={<AiOutlineSolution className="text-4xl text-white/90" />}
            text="Create elegant solutions for the tasks you need"
            delay={0.2}
          />
        </motion.div>

        <motion.div
          className="mt-12 group flex-col !bg-black justify-center items-center gap-4 text-center text-white/60 text-lg shadow-[0_-4px_0_0_rgba(0,0,0,0),4px_0_40px_rgba(0,0,0,0),-4px_0_40px_rgba(0,0,0,0),0_0_40px_rgba(0,0,0,0),0_-10px_20px_rgba(0,0,0,0)] z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Scroll to learn more{" "}
          <Link href="#services">
            <ChevronDownCircle className="text-2xl mx-auto cursor-pointer my-4 text-white/70 group-hover:scale-110 ease-in-out duration-200 delay-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
