"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50">

        {/* Background blobs */}

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
              About BookVerse
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-[#1A365D] lg:text-6xl">
              More than a library.
              <br />
              A place where
              <br />
              every book finds
              <br />
              its reader.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              BookVerse is a modern digital library platform
              created for readers who love discovering new
              stories, exploring different genres and building
              their own personal collection.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/library2.jpg"
                alt="Library"
                width={900}
                height={700}
                className="h-[500px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">
              <p className="text-4xl font-black text-[#008B8B]">
                10+
              </p>

              <p className="text-slate-500">
                Books Added
              </p>
            </div>

          </motion.div>

        </div>

      </section>
      {/* ================= WHO WE ARE ================= */}

<section className="bg-white py-24">
  <div className="mx-auto overflow-hidden grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    {/* Image */}

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      {/* Decorative blob */}

      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-cyan-100 blur-3xl" />

      <Image
        src="/reading.jpg"
        alt="Reading"
        width={700}
        height={700}
        className="relative rounded-[32px] shadow-2xl"
      />

      {/* Floating Card */}

      <div className="absolute -bottom-8 right-8 rounded-3xl bg-white p-6 shadow-xl">

        <p className="text-4xl font-black text-[#5B21B6]">
          24/7
        </p>

        <p className="text-slate-500">
          Explore Anytime
        </p>

      </div>

    </motion.div>

    {/* Content */}

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
        Who We Are
      </span>

      <h2 className="mt-6 text-4xl font-black text-[#1A365D]">
        Built for Readers,
        Designed for Simplicity.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        BookVerse is a full-stack digital library platform that
        helps readers discover books from a wide variety of genres,
        learn about talented authors, and organize their own
        personal collection—all through a clean, intuitive interface.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Whether you're searching for your next favorite novel,
        exploring programming resources, or simply browsing
        new arrivals, BookVerse is designed to make reading
        enjoyable, accessible, and effortless.
      </p>

      {/* Small Features */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-bold text-[#1A365D]">
            📚 Diverse Collection
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Browse books from numerous genres and authors.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-bold text-[#1A365D]">
            ⭐ Easy Discovery
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Quickly find books that match your interests.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-bold text-[#1A365D]">
            ❤️ Personal Library
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Build and manage your own growing collection.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-bold text-[#1A365D]">
            🌍 Read Anywhere
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Accessible anytime with a responsive experience.
          </p>
        </div>

      </div>

    </motion.div>

  </div>
</section>
{/* ================= OUR JOURNEY ================= */}

<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-6xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-20 text-center"
    >
      <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B]">
        Our Journey
      </span>

      <h2 className="mt-6 text-4xl font-black text-[#1A365D]">
        How BookVerse Came to Life
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        Every great project begins with a simple idea.
        BookVerse grew from a passion for books into a
        complete digital library experience.
      </p>
    </motion.div>

    <div className="relative">

      {/* Timeline line */}

      <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-cyan-200 lg:block" />

      {/* STEP 1 */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative mb-16 grid items-center gap-10 lg:grid-cols-2"
      >

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <span className="text-sm font-bold text-[#008B8B]">
            Step 01
          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#1A365D]">
            The Idea
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            I wanted a clean and modern platform where readers
            could discover books without unnecessary complexity.
          </p>

        </div>

        <div />

        <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#008B8B] shadow lg:block" />

      </motion.div>

      {/* STEP 2 */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative mb-16 grid items-center gap-10 lg:grid-cols-2"
      >

        <div />

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <span className="text-sm font-bold text-[#5B21B6]">
            Step 02
          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#1A365D]">
            Development
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Built using the MERN stack with Next.js, BookVerse
            focuses on performance, responsive design,
            authentication, and user experience.
          </p>

        </div>

        <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#5B21B6] shadow lg:block" />

      </motion.div>

      {/* STEP 3 */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative grid items-center gap-10 lg:grid-cols-2"
      >

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <span className="text-sm font-bold text-[#008B8B]">
            Step 03
          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#1A365D]">
            Growing Together
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            As more books are added, BookVerse continues
            evolving into a richer platform that inspires
            readers to discover something new every day.
          </p>

        </div>

        <div />

        <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#008B8B] shadow lg:block" />

      </motion.div>

    </div>

  </div>
</section>
{/* ================= CORE VALUES ================= */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
        Our Values
      </span>

      <h2 className="mt-6 text-4xl font-black text-[#1A365D]">
        What Drives BookVerse
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        Every feature in BookVerse is designed with readers in mind.
        Our goal is to create an enjoyable, welcoming, and accessible
        place for discovering books.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* Value 1 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
          📚
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
          Love for Reading
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          We believe every book has the power to inspire,
          educate, and open doors to new perspectives.
        </p>
      </motion.div>

      {/* Value 2 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6, delay: .1 }}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
          🌍
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
          Accessibility
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Reading should be simple and available to everyone
          through a clean, responsive, and intuitive experience.
        </p>
      </motion.div>

      {/* Value 3 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6, delay: .2 }}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
          💡
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
          Continuous Learning
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Whether you're a student, developer, or lifelong reader,
          there's always something new waiting to be discovered.
        </p>
      </motion.div>

      {/* Value 4 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6, delay: .3 }}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
          🤝
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#1A365D]">
          Community
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          BookVerse grows through the contributions of readers
          who share books, recommendations, and knowledge with others.
        </p>
      </motion.div>

    </div>

  </div>
</section>
    </main>
  );
}