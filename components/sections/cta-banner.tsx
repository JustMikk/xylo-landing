"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <motion.section
      className="w-full lg:w-2/3 mx-auto py-12 bg-gradient-to-tr from-sky-700/60 via-cyan-600 to-teal-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Move even faster with{" "}
              <span className="font-bold">Xylo Digital Solutions</span>
            </h2>
            <p className="text-white/90 text-xl text-center">
              Your guide in the digital age.
            </p>
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact">
                <Button className="bg-white text-cyan-600 hover:bg-white/90 rounded-full px-8">
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact">
                <Button className="bg-cyan-800 text-white hover:bg-cyan-600/90 rounded-full px-9">
                  Book Your Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
