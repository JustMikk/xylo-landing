"use client"

import Image from "next/image"
import { motion, type AnimationControls } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  sideTitle: string
  sideDescription: string
  isLeft: boolean
  delay?: number
  controls: AnimationControls
}

export default function ProcessStep({
  number,
  title,
  description,
  sideTitle,
  sideDescription,
  isLeft,
  delay = 0,
  controls,
}: ProcessStepProps) {
  return (
    <motion.div
      className="relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      initial="hidden"
      animate={controls}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} mb-8 md:mb-0 ${isLeft ? "order-2 md:order-1" : "order-2"}`}
        >
          <div className="bg-gray-800/80 p-6 rounded-lg border border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
            <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
            <p className="text-white/70 text-sm mb-4">{description}</p>
            <div className="mt-4 bg-gray-900 rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt={`${title} visualization`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold transform md:-translate-x-1/2 z-10">
          {number}
        </div>
        <div
          className={`md:w-1/2 ${isLeft ? "md:pl-12" : "md:pr-12 md:text-right"} ${isLeft ? "order-1 md:order-2" : "order-1 md:order-1"}`}
        >
          <div className="h-full flex items-center justify-end">
            <div className="bg-black/40 p-4 rounded-lg">
              <h4 className="text-green-400 font-medium">{sideTitle}</h4>
              <p className="text-white/70 text-sm">{sideDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

