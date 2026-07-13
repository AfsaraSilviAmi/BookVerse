"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

interface Book {
  _id: string;
  title: string;
  author: string;
  image: string;
  genre: string;
  rating?: number;
  price: number;
}

export default function FeaturedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
            Reader Favorites
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1A365D] md:text-5xl">
            Featured Books
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Discover some of our most loved books handpicked for every kind of
            reader.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white p-5"
              >
                <div className="aspect-[2/3] rounded-2xl bg-slate-200" />

                <div className="mt-5 h-5 rounded bg-slate-200" />
                <div className="mt-3 h-4 w-2/3 rounded bg-slate-200" />
                <div className="mt-6 h-10 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book, index) => (
              <motion.div
                key={book._id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Book Cover */}

                <div className="mx-auto aspect-[2/3] w-[180px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={450}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="mt-6 text-center">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    {book.genre}
                  </span>

                  <h3 className="mt-4 line-clamp-2 text-xl font-bold text-[#1A365D]">
                    {book.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {book.author}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#008B8B]">
                      ${book.price}
                    </span>

                    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                      ⭐ {(book.rating ?? 4.5).toFixed(1)}
                    </span>
                  </div>

                  <Link href={`/items/${book._id}`}>
                    <Button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white transition-transform duration-300 group-hover:scale-[1.02]">
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}