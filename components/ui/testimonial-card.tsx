"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-6">
        <Image src="/placeholder.svg?height=60&width=60" width={60} height={60} alt={name} className="rounded-full" />
      </div>
      <div className="text-green-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M11.3 3.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l2.3-2.3H7a1 1 0 1 1 0-2h6.6l-2.3-2.3a1 1 0 0 1 0-1.4z" />
          <path d="M12.7 20.7a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.4 1.4L10.4 15H17a1 1 0 1 1 0 2h-6.6l2.3 2.3a1 1 0 0 1 0 1.4z" />
        </svg>
      </div>
      <p className="text-white mb-4">"{quote}"</p>
      <div className="text-white/70 text-sm">
        {name}
        <br />
        {role}
      </div>
    </motion.div>
  )
}

