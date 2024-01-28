"use client";

import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  desc?: string;
}

export function Title({ title, desc }: TitleProps) {
  return (
    <motion.div
      className="mb-10 flex flex-col items-center justify-center gap-1"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -150 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl justify-center flex gap-3 items-center text-white font-bold before:content-[''] before:bg-blue-500 before:w-2 before:h-4 before:inline-block">
        {title}
      </h3>
      <div>
        <span className="text-center text-[#A9A9B2] max-w-[420px]">{desc}</span>
      </div>
    </motion.div>
  );
}
