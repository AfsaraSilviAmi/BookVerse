"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { BookOpen, ChevronDown, Sparkles } from "lucide-react";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const { data: session } = authClient.useSession();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50">

      {/* Animated background */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-24 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="flex-1"
        >

          <motion.div variants={fadeLeft}>
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#008B8B] shadow-sm">
              📚 BookVerse Library
            </span>
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="mt-6 text-5xl font-black leading-tight text-[#1A365D] lg:text-7xl"
          >
            Discover
            <br />
            Your Next
            <br />
            Favorite Book
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Explore thousands of books from every genre.
            Whether you're searching for programming,
            fantasy, romance, history, or self-help,
            BookVerse helps you discover your next great read.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeLeft}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/items">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] px-8 text-white shadow-xl"
                >
                  Explore Books
                </Button>
              </Link>
            </motion.div>

            {session && (
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/items/add">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-[#008B8B] px-8 text-[#008B8B]"
                  >
                    Add Book
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Trust indicators */}

          <motion.div
  variants={fadeLeft}
  className="mt-10 flex flex-wrap gap-8 text-sm"
>
  <div>
    <p className="text-xl font-bold text-[#1A365D]">
      Read.
    </p>
    <p className="text-slate-500">
      Discover stories you'll love.
    </p>
  </div>

  <div>
    <p className="text-xl font-bold text-[#008B8B]">
      Explore.
    </p>
    <p className="text-slate-500">
      Browse every genre.
    </p>
  </div>

  <div>
    <p className="text-xl font-bold text-[#5B21B6]">
      Share.
    </p>
    <p className="text-slate-500">
      Build your personal library.
    </p>
  </div>
</motion.div>

        </motion.div>

      
      {/* RIGHT */}

<div className="relative mt-20 flex flex-1 items-center justify-center lg:mt-0">

  {/* Huge background icon */}

  <BookOpen
    size={360}
    className="absolute text-[#008B8B]/5"
    strokeWidth={1}
  />

  {/* Sparkles */}

  <FloatingSparkle
    className="-top-6 left-12"
    size={26}
    delay={0}
  />

  <FloatingSparkle
    className="right-4 top-12"
    size={22}
    delay={1}
  />

  <FloatingSparkle
    className="bottom-10 left-10"
    size={18}
    delay={2}
  />

  <FloatingSparkle
    className="bottom-20 right-6"
    size={28}
    delay={1.5}
  />

  {/* Shelf */}

  <div className="absolute bottom-2 h-3 w-[360px] rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] opacity-80 shadow-xl" />

  <FloatingBook
    src="/book5.jpg"
    className="left-0 top-0 rotate-[-15deg]"
    duration={4}
    delay={0}
  />

  <FloatingBook
    src="/book2.jpg"
    className="right-0 top-16 rotate-[10deg]"
    duration={5}
    delay={0.5}
  />

  <FloatingBook
    src="/book3.jpg"
    className="bottom-8 left-20 rotate-[-8deg]"
    duration={4.5}
    delay={1}
  />

  <FloatingBook
    src="/book4.jpg"
    className="bottom-0 right-16 rotate-[14deg]"
    duration={5.5}
    delay={1.5}
  />

</div>

      </div>
      

      {/* Scroll indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#008B8B]"
      >
        <ChevronDown size={36} />
      </motion.div>

    </section>
  );
}

type BookProps = {
  src: string;
  className: string;
  duration: number;
  delay: number;
};

function FloatingBook({
  src,
  className,
  duration,
  delay,
}: BookProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -18, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay,
        },
        scale: {
          duration: 0.8,
          delay,
        },
        y: {
          repeat: Infinity,
          duration,
          ease: "easeInOut",
          delay,
        },
        rotate: {
          repeat: Infinity,
          duration: duration + 1,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute ${className}`}
    >
      <Image
        src={src}
        alt="Book"
        width={240}
        height={340}
        className="w-36 rounded-2xl shadow-2xl lg:w-40"
      />
      
    </motion.div>
    
    
  );
  
}
type FloatingSparkleProps = {
  className: string;
  size: number;
  delay: number;
};

function FloatingSparkle({
  className,
  size,
  delay,
}: FloatingSparkleProps) {
  return (
    <motion.div
      className={`absolute text-amber-400 ${className}`}
      animate={{
        y: [0, -12, 0],
        scale: [1, 1.2, 1],
        opacity: [0.4, 1, 0.4],
        rotate: [0, 12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Sparkles size={size} />
    </motion.div>
  );
}