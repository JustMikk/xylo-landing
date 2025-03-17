"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  text: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  text,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-24 h-44 rounded-full bg-gradient-to-b from-sky-700/60 via-cyan-600 to-teal-400 flex items-center justify-center mb-4 border border-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        {icon}
      </div>
      <div className="max-w-72 bg-gradient-to-b from-gray-900/60 to-transparent p-4 rounded-lg border-t border-l border-r border-cyan-500/20 shadow-[0_-4px_0_0_rgba(0,0,0,0),4px_0_40px_rgba(6,182,212,0.2),-4px_0_40px_rgba(6,182,212,0.2),0_0_40px_rgba(6,182,212,0.2)] h-full">
        <p className="text-lg text-wrap text-center text-white/80">{text}</p>
      </div>
    </motion.div>
  );
}
