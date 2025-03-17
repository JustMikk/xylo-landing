"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TbQuoteFilled } from "react-icons/tb";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gray-900 relative p-6 rounded-lg"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-6">
        <Image
          src="/images/profile.jpg"
          width={80}
          height={80}
          alt={name}
          className="rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="text-cyan-400 mb-4 flex justify-center">
        <TbQuoteFilled size={50} className="" />
      </div>
      <p className="text-white text-2xl mb-4">"{quote}"</p>
      <div className="text-white/70 text-lg">
        {name}
        <br />
        {role}
      </div>
    </motion.div>
  );
}
