"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch with our{" "}
          <span className="bg-gradient-to-bl bg-clip-text text-transparent from-sky-700/60 via-cyan-600 to-teal-400">
            Team
          </span>
          .
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 min-h-[120px]"
                />
              </div>
              <div>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="bg-cyan-600 p-8 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundImage: "url(/images/placeholder.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-cyan-800 mix-blend-multiply"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/profile.jpg"
                  width={60}
                  height={60}
                  alt="Team member"
                  className="rounded-full"
                />
                <div>
                  <div className="text-white font-medium">
                    Mikiyas Hailegebreal
                  </div>
                  <div className="text-white/70 text-sm">
                    Lead Frontend Engineer
                  </div>
                </div>
              </div>
              <p className="text-white text-xl font-medium mb-4">
                "We specialize in helping our customers digitize their
                business."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
