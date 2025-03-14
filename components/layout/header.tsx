"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      id="header"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3.5" />
              <path d="M20 14v4a2 2 0 0 1-2 2h-2" />
              <path d="M13 18h.01" />
              <path d="M17 18h.01" />
              <path d="M13 14h.01" />
              <path d="M17 14h.01" />
            </svg>
          </div>
          <span className="text-xl font-bold">Tech Yes!</span>
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
            href="#"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#"
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
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
