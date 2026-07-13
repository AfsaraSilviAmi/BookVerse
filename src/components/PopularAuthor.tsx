"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleUserRound, BookOpen } from "lucide-react";

interface Author {
  author: string;
  books: number;
  genres: string[];
}

export default function PopularAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/popular-authors`)
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Meet The Authors
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D] md:text-5xl">
            Popular Authors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explore talented authors whose books inspire readers across multiple
            genres.
          </p>
        </motion.div>

        {/* Loading */}

        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
              >
                <div className="mx-auto h-20 w-20 animate-pulse rounded-full bg-slate-200" />

                <div className="mx-auto mt-6 h-6 w-36 animate-pulse rounded bg-slate-200" />

                <div className="mx-auto mt-4 h-5 w-28 animate-pulse rounded bg-slate-200" />

                <div className="mx-auto mt-6 h-5 w-24 animate-pulse rounded bg-slate-200" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {authors.map((author, index) => (
              <motion.div
                key={author.author}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:border-cyan-200 hover:shadow-2xl"
              >
                {/* Avatar */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1A365D] via-[#008B8B] to-[#5B21B6] shadow-lg transition duration-500 group-hover:rotate-6">
                  <CircleUserRound
                    size={38}
                    className="text-white"
                  />
                </div>

                {/* Name */}

                <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
                  {author.author}
                </h3>

                {/* Genres */}

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {author.genres.slice(0, 2).map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-[#008B8B]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Books */}

                <div className="mt-6 flex items-center justify-center gap-2 text-[#1A365D]">
                  <BookOpen size={18} />

                  <span className="font-semibold">
                    {author.books} {author.books === 1 ? "Title" : "Titles"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}