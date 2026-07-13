"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, BookOpen, PlusCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function CTASection() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6]" />

      {/* Decorative circles */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
            <BookOpen
              size={42}
              className="text-white"
            />
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            Ready to Discover
            <br />
            Your Next Favorite Book?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Browse books, discover talented authors,
            explore every genre, and build your own personal library
            with BookVerse.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link href="/items">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 font-semibold text-[#1A365D] shadow-xl"
                  endContent={<ArrowRight size={18} />}
                >
                  Explore Books
                </Button>
              </Link>
            </motion.div>

            {!isPending && session && (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link href="/items/add">
                  <Button
                    size="lg"
                    variant="bordered"
                    className="rounded-full border-2 border-white bg-transparent px-8 text-white"
                    endContent={<PlusCircle size={18} />}
                  >
                    Add Your Book
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Bottom Text */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
            className="mt-12 text-sm tracking-widest text-white/70 uppercase"
          >
            Read • Discover • Share
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}