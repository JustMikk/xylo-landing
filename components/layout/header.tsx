"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="fixed flex justify-center top-0 z-50 w-full transition-all duration-300"
      id="header"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-2">
            <Image
              className="mt-5"
              src="/images/logo.png"
              width={150}
              height={150}
              alt="Xylo logo"
            />
            <span className="text-xl font-bold text-wrap hidden lg:block">
              Xylo Digital Solutions
            </span>
          </div>
        </motion.div>
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about-us"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#Blog"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </motion.nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-gradient-to-bl from-sky-700/60 via-cyan-600 to-teal-400 hover:bg-cyan-700 text-white rounded-full">
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
