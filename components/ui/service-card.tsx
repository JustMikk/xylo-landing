"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group hover:bg-cyan-800/30 p-4 rounded-lg"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-cyan-600 group-hover:bg-cyan-800/50 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="bg-gradient-to-bl bg-clip-text text-transparent from-sky-700/60 via-cyan-600 to-teal-400 text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-white/70 text-md font-medium mb-4">{description}</p>
      <Link
        href="#contact"
        className="text-white/70 text-sm hover:text-purple-400"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}
