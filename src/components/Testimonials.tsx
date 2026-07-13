"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Book Enthusiast",
    review:
      "BookVerse made discovering new books incredibly enjoyable. The clean interface and organized genres make browsing effortless.",
  },
  {
    name: "John Carter",
    role: "Software Developer",
    review:
      "I found several programming books that helped me improve my backend development skills. Highly recommended.",
  },
  {
    name: "Emily Watson",
    role: "Student",
    review:
      "The website feels modern, responsive, and very easy to use. I love keeping track of books I've added.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D]">
            Loved by Readers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Hear what our community has to say about their BookVerse experience.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              <Quote
                size={42}
                className="mb-6 text-cyan-500"
              />

              <div className="mb-5 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#1A365D]">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}