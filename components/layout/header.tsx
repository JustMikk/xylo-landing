"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const NavLinks = () => (
    <>
      <Link
        href="#"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        Home
      </Link>
      <Link
        href="#about-us"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "about-us" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "about-us" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        About Us
      </Link>
      <Link
        href="#services"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "services" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "services" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        Services
      </Link>
      <Link
        href="#process"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "process" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "process" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        Process
      </Link>
      <Link
        href="#testimonial"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "testimonial" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "testimonial" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        Testimonial
      </Link>
      <Link
        href="#contact"
        className={`text-sm font-medium transition-all relative ${
          activeSection === "contact" ? "text-white" : "text-white/70 hover:text-white"
        } ${
          activeSection === "contact" &&
          "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-500"
        }`}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header
      className="fixed flex justify-center top-0 z-50 w-full transition-all duration-300"
      id="header"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-2">
            <Image
              className="hidden sm:block"
              src="/images/logo.png"
              width={110}
              height={110}
              alt="Xylo logo"
            />
            <span className="text-base sm:text-lg font-bold text-wrap hidden sm:block">
              Xylo Digital Solutions
            </span>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLinks />
        </motion.nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              {/* Side Menu */}
              <motion.div
                className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm border-l border-purple-900/20 p-4 z-50 md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="flex flex-col items-center gap-6">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    onClick={toggleMenu}
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                  <div className="flex items-center gap-2 mt-8">
                    <Image
                      src="/images/logo.png"
                      width={80}
                      height={80}
                      alt="Xylo logo"
                      className="sm:hidden"
                    />
                    <span className="text-lg font-bold text-white sm:hidden">
                      Xylo Digital Solutions
                    </span>
                  </div>
                  <nav className="flex flex-col items-center gap-4 w-full">
                    <NavLinks />
                  </nav>
                  <Link href="#contact" className="w-full">
                    <Button className="w-full bg-gradient-to-bl from-sky-700/60 via-cyan-600 to-teal-400 hover:bg-cyan-700 text-white rounded-full">
                      Lets Talk
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#contact">
            <Button className="bg-gradient-to-bl from-sky-700/60 via-cyan-600 to-teal-400 hover:bg-cyan-700 text-white rounded-full">
              Lets Talk
            </Button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
