"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbQuoteFilled } from "react-icons/tb";
import { User } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc?: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  imageSrc,
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
        {imageSrc ? (
          <Image
            src={imageSrc}
            width={80}
            height={80}
            alt={name}
            className="rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2"
          />
        ) : (
          <div className="w-20 h-20 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 flex items-center justify-center">
            <User className="w-10 h-10 text-gray-400" />
          </div>
        )}
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
