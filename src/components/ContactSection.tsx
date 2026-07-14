"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity:0,x:-40 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
        >

          <h2 className="text-4xl font-black text-[#1A365D]">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you have a question about BookVerse,
            want to suggest new features,
            or simply want to say hello,
            we're always happy to hear from you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">

              <Mail className="text-[#008B8B]" />

              <div>
                <h4 className="font-bold">
                  Email
                </h4>

                <p className="text-slate-600">
                  afsarasilvi44@gmail.com
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Phone className="text-[#008B8B]" />

              <div>
                <h4 className="font-bold">
                  Phone
                </h4>

                <p className="text-slate-600">
                  +880 1905643618
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <MapPin className="text-[#008B8B]" />

              <div>
                <h4 className="font-bold">
                  Location
                </h4>

                <p className="text-slate-600">
                  Dhaka, Bangladesh
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.form
          initial={{ opacity:0,x:40 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          className="rounded-3xl bg-white p-8 shadow-xl"
        >

          <div className="space-y-6">

            <input
              placeholder="Your Name"
              className="w-full rounded-xl border p-4 outline-none focus:border-[#008B8B]"
            />

            <input
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none focus:border-[#008B8B]"
            />

            <input
              placeholder="Subject"
              className="w-full rounded-xl border p-4 outline-none focus:border-[#008B8B]"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full rounded-xl border p-4 outline-none focus:border-[#008B8B]"
            />

            <button
              className="w-full rounded-xl bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] py-4 font-semibold text-white"
            >
              Send Message
            </button>

          </div>

        </motion.form>

      </div>

    </section>
  );
}