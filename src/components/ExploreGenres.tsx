"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Heart,
  Sparkles,
  Ghost,
  Shield,
  Rocket,
  Brain,
  ScrollText,
  Globe,
} from "lucide-react";

const genres = [
  { name: "Programming", icon: Cpu },
  { name: "Fantasy", icon: Sparkles },
  { name: "Romance", icon: Heart },
  { name: "Mystery", icon: Shield },
  { name: "History", icon: ScrollText },
  { name: "Science", icon: Rocket },
  { name: "Biography", icon: BookOpen },
  { name: "Horror", icon: Ghost },
  { name: "Self Help", icon: Brain },
  { name: "Travel", icon: Globe },
];

export default function ExploreGenres() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Browse Categories
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D]">
            Explore by Genre
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From programming to fantasy, discover books across every genre.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {genres.map((genre, index) => {
            const Icon = genre.icon;

            return (
              <motion.div
                key={genre.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="rounded-xl bg-gradient-to-br from-[#1A365D] via-[#008B8B] to-[#5B21B6] p-3 text-white">
                  <Icon size={22} />
                </div>

                <span className="font-semibold text-[#1A365D]">
                  {genre.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}