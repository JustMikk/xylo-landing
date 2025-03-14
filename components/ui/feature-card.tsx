"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  text: string
  delay?: number
}

export default function FeatureCard({ icon, text, delay = 0 }: FeatureCardProps) {
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
      <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        {icon}
      </div>
      <div className="bg-gray-900/60 p-4 rounded-lg border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.2)] h-full">
        <p className="text-sm text-center text-white/80">{text}</p>
      </div>
    </motion.div>
  )
}

