"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-xs text-white/60 mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
      <div className="bg-gradient-to-r h-[0.5px] mt-4 from-white/50 via-white/10 through to-black" />
    </motion.div>
  );
}
