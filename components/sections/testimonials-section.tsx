"use client";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";

export default function TestimonialsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="testimonial" className="w-full py-12 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 6.1H3" />
              <path d="M21 12.1H3" />
              <path d="M15.1 18H3" />
            </svg>
          </div>
          <div className="text-xs text-white/60">TECH RESULTS</div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials.
          <br />
          <span className="bg-gradient-to-bl bg-clip-text text-transparent from-sky-700/60 via-cyan-600 to-teal-400">
            Loved
          </span>{" "}
          by product people.
        </motion.h2>
        <motion.p
          className="text-white/70 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hear about what our previous clients have to say about our services.
          We are proud to have worked with some amazing companies and
          individuals.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <TestimonialCard
            name="Robel Tefera"
            role="Agent, Software Agency"
            quote="I couldn't be any happier with the specialists at Xylo, Amazing work!"
            imageSrc="/images/testimonials/robel.jpg"
          />

          <TestimonialCard
            name="Nejmia Ahmed"
            role="Entrepreneur, Addis Path Trailer Rentals"
            quote="Great service and fantastic results. Would recommend Tech Yes!"
            imageSrc="/images/testimonials/nejmia.jpg"
          />

          <TestimonialCard
            name="Kiya Kebe"
            role="President, CSEC ASTU"
            quote="Absolutely brilliant! I couldn't say enough!"
            imageSrc="/images/testimonials/kiya.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}
