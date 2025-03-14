"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeader from "@/components/ui/section-header"

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 md:px-6">
        <SectionHeader title="WHO WE ARE" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              We are a <span className="text-purple-500">group of experts</span> looking to help companies leverage
              technology to do more than they had ever thought possible.
            </h2>
            <p className="text-white/70 mb-6">
              We offer the full range of services to provide comprehensive solutions for your business. From systems
              design to development and beyond, we're here to help you succeed.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl"></div>
            <div className="relative border-4 border-purple-600 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Team working together"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <div className="text-sm text-white/70">We always focus on technical excellence</div>
                <div className="text-sm text-white/70">
                  Talented team with decades of experience in software development
                </div>
                <div className="text-sm text-white/70">We're consultants, doers, and partners for brands</div>
              </div>
              <div>
                <div className="text-sm text-white/70">John Lowery</div>
                <div className="text-sm text-white/70">CEO, Tech Yes Solutions</div>
                <div className="text-purple-500 font-script text-xl">John Lowery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

