"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-[#1A365D] via-[#008B8B] to-[#5B21B6] py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl font-black md:text-6xl"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-200"
        >
          Have a question, suggestion, or feedback?
          We'd love to hear from you.
        </motion.p>

      </div>
    </section>
  );
}