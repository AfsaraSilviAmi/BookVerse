"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { BookOpen, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-10 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 px-6">

      {/* Background Blobs */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Book */}

       {/* Floating Book Icon */}

<div className="relative mx-auto flex w-fit items-center justify-center">

  {/* Glow */}

  <div className="absolute h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

  {/* Floating Sparkle */}

  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 15, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
    }}
    className="absolute -left-10 top-0 text-yellow-400"
  >
    ✨
  </motion.div>

  <motion.div
    animate={{
      y: [0, 10, 0],
      rotate: [0, -15, 0],
      scale: [1, 1.3, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
      delay: 1,
    }}
    className="absolute -right-8 top-8 text-pink-400"
  >
    ⭐
  </motion.div>

  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [-10, 10, -10],
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
    }}
    className="rounded-full bg-gradient-to-br from-[#1A365D] via-[#008B8B] to-[#5B21B6] p-10 shadow-2xl"
  >
    <BookOpen
      size={120}
      strokeWidth={1.8}
      className="text-white"
    />
  </motion.div>

</div>

        {/* 404 */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-10 bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-6 text-4xl font-black text-[#1A365D]"
        >
          This Page Is Lost in the Library
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .45 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
        >
          Looks like the page you're looking for has been misplaced between the
          shelves. Let's help you find your way back.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .6,
          }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link href="/">
           <Button
  size="lg"
  className="rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] px-8 text-white"
>
  <Home size={18} />
  <span>Back Home</span>
</Button>
          </Link>

          <Link href="/items">
            <Button
              size="lg"
              variant="outline"
            
              className="rounded-full border-2 border-[#008B8B] px-8 text-[#008B8B]"
            ><Search size={18} />
              Browse Books
            </Button>
          </Link>
        </motion.div>

        {/* Bottom */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mt-16 flex items-center justify-center gap-3 text-[#008B8B]"
        >
          <BookOpen size={22} />
          <span className="font-semibold">
            Keep Reading with BookVerse
          </span>
        </motion.div>

      </div>
    </section>
  );
}