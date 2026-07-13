"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";

interface Genre {
  _id: string;
  books: number;
}

const COLORS = [
  "#1A365D",
  "#008B8B",
  "#5B21B6",
  "#06B6D4",
  "#F59E0B",
  "#EC4899",
  "#10B981",
];

export default function GenreChart() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/genre-stats`)
      .then((res) => res.json())
      .then(setGenres);
  }, []);

  return (
    <section className="overflow-x-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Library Insights
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D]">
            Explore Our Collection
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover which genres make up the BookVerse library.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <ResponsiveContainer
              width="100%"
              height={420}
            >
              <PieChart>
                <Pie
                  data={genres}
                  dataKey="books"
                  nameKey="_id"
                  outerRadius={145}
                  innerRadius={75}
                  paddingAngle={4}
                >
                  {genres.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#1A365D]">
              A Library for Every Reader
            </h3>

            <p className="text-lg leading-8 text-slate-600">
              From programming and technology to fantasy,
              romance, history and self-development,
              BookVerse brings together books from a wide
              variety of genres to help every reader
              discover their next favorite title.
            </p>

            <div className="space-y-4">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre._id}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .12,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="h-4 w-4 rounded-full"
                      style={{
                        background:
                          COLORS[index % COLORS.length],
                      }}
                    />

                    <span className="font-semibold text-[#1A365D]">
                      {genre._id}
                    </span>

                  </div>

                  <span className="font-bold text-[#008B8B]">
                    {genre.books} Books
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}