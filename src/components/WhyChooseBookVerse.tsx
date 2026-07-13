"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Star,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Huge Collection",
    description:
      "Browse books from programming, history, fantasy, romance and many more genres.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Star,
    title: "Featured Picks",
    description:
      "Discover highly rated books selected to inspire your next great read.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Search,
    title: "Easy Discovery",
    description:
      "Find books quickly through categories, authors and detailed information.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Personal Library",
    description:
      "Add and manage your own books while building a library unique to you.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseBookVerse() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Why BookVerse
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D] md:text-5xl">
            Why Readers Love BookVerse
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Everything you need to discover, organize and explore your favorite books.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-cyan-200 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  <Icon
                    className="text-white"
                    size={30}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}