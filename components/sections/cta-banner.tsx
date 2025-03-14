"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <motion.section
      className="w-full py-12 bg-purple-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Move even faster with <span className="font-bold">Tech Yes!</span>
            </h2>
            <p className="text-white/90">Your guide in the digital age.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-purple-600 hover:bg-white/90 rounded-full px-8">Let's Talk</Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

