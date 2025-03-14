"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import SectionHeader from "@/components/ui/section-header"
import ProcessStep from "@/components/ui/process-step"

export default function ProcessSection() {
  const controls = useAnimation()
  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isProcessInView) {
      controls.start("visible")
    }
  }, [controls, isProcessInView])

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-black to-gray-900/90" ref={processRef}>
      <div className="container px-4 md:px-6">
        <SectionHeader title="OUR PROCESS" />
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience the Power of <span className="text-green-400">Process</span>.
        </motion.h2>
        <motion.p
          className="text-white/70 mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Instead of the traditional approach of just building what you ask for, we take the time to understand your
          business goals and create a solution that works for you.
        </motion.p>

        {/* Timeline Process Section */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-green-500/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-24">
            <ProcessStep
              number={1}
              title="Strategy"
              description="First, we need to know your goals, your users, and your business to create a plan that works."
              sideTitle="Define"
              sideDescription="We start by understanding your business objectives and user needs"
              isLeft={true}
              delay={0}
              controls={controls}
            />

            <ProcessStep
              number={2}
              title="Design"
              description="We create wireframes and designs that align with your brand and provide an optimal user experience."
              sideTitle="Create"
              sideDescription="We design intuitive interfaces and experiences that delight users"
              isLeft={false}
              delay={0.2}
              controls={controls}
            />

            <ProcessStep
              number={3}
              title="Development"
              description="Our engineers build your solution using modern technologies and best practices."
              sideTitle="Build"
              sideDescription="We develop robust, scalable solutions with clean code"
              isLeft={true}
              delay={0.4}
              controls={controls}
            />

            <ProcessStep
              number={4}
              title="Deliver"
              description="We deploy your solution and provide ongoing support to ensure its success."
              sideTitle="Launch"
              sideDescription="We deploy and maintain your solution with ongoing support"
              isLeft={false}
              delay={0.6}
              controls={controls}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

