"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/ui/feature-card"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900/40 to-black">
      <div className="container px-4 md:px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Tech Yes! Solutions.
          <br />
          Your guide in the <span className="text-purple-500">digital age</span>.
        </motion.h1>
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">Get Started</Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a4.2 4.2 0 0 0 4 4 4.2 4.2 0 0 1 3 2 4.2 4.2 0 0 1-1 5 4.2 4.2 0 0 0-2 4 4.2 4.2 0 0 1-4 3 4.2 4.2 0 0 1-4-3 4.2 4.2 0 0 0-2-4 4.2 4.2 0 0 1-1-5 4.2 4.2 0 0 1 3-2 4.2 4.2 0 0 0 4-4" />
              </svg>
            }
            text="Build a digital presence that's modern and dynamic"
            delay={0}
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-400"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h.01" />
                <path d="M12 7h.01" />
                <path d="M17 7h.01" />
                <path d="M7 12h.01" />
                <path d="M12 12h.01" />
                <path d="M17 12h.01" />
                <path d="M7 17h.01" />
                <path d="M12 17h.01" />
                <path d="M17 17h.01" />
              </svg>
            }
            text="Create elegant solutions for the tasks you need"
            delay={0.1}
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-400"
              >
                <rect width="18" height="14" x="3" y="3" rx="2" />
                <path d="M3 7h18" />
                <path d="M7 21h10" />
                <path d="M9 17v4" />
                <path d="M15 17v4" />
              </svg>
            }
            text="Software that gets the job done and scales with you"
            delay={0.2}
          />
        </motion.div>

        <motion.div
          className="mt-12 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          EASY TO USE
        </motion.div>
      </div>
    </section>
  )
}

