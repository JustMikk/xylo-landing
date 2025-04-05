"use client";

import Image from "next/image";
import { motion, type AnimationControls } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLeft: boolean;
  delay?: number;
  controls: AnimationControls;
  src: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  src,
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
          className={`md:w-1/2 ${
            isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
          } mb-8 md:mb-0 ${isLeft ? "order-2 md:order-1" : "order-2"}`}
        >
          <div className="">
            <div className="">
              <Image
                src={src}
                width={600}
                height={600}
                alt={`${title} visualization`}
                className=" bg-neutral-600/20 p-9 rounded-lg  shadow-[0_-4px_0_0_rgba(0,0,0,0),4px_0_40px_rgba(6,182,212,0.2),-4px_0_40px_rgba(6,182,212,0.2),0_0_40px_rgba(6,182,212,0.2)]"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-4 -top-8 md:top-0 md:left-1/2 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold transform md:-translate-x-1/2 z-10">
          {number}
        </div>
        <div
          className={`md:w-1/2 ${
            isLeft ? "md:pl-12" : "md:pr-12 md:text-right"
          } ${isLeft ? "order-1 md:order-2" : "order-1 md:order-1"}`}
        >
          <div className="h-full flex items-center justify-end">
            <div className="bg-black/40 p-4 rounded-lg">
              <h4 className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-medium mb-2">{title}</h4>
              <p className="text-white/70 text-base sm:text-lg md:text-xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
