"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Mail,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0F172A] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <Image src={"/logo.png"} alt="logo" width={1000} height={1000} className="w-40">

              </Image>
             
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Discover books from every genre, explore talented authors,
              and build your own digital library with BookVerse.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/items"
                  className="transition hover:text-cyan-400"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                 Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-cyan-400"
                />

                <a
                  href="mailto:afsarasilvi44@gmail.com"
                  className="transition hover:text-cyan-400"
                >
                  afsarasilvi44@gmai.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

                <span>Dhaka, Bangladesh</span>
              </div>

            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-[#008B8B] hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-[#008B8B] hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-[#008B8B] hover:text-white"
              >
                <FaXTwitter size={18} />
              </a>

            </div>
          </div>
        </motion.div>

        {/* Divider */}

        <div className="my-10 border-t border-slate-700" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} BookVerse. All rights reserved by Ami
          </p>

          <p>
            Designed & Developed with ❤️ for book lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}