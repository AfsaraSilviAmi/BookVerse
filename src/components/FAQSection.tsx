"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Can anyone add books?",
    a: "Yes. Registered users can add books to the BookVerse library.",
  },
  {
    q: "Can I view or delete my books?",
    a: "Absolutely. You can manage books you've added from My Books.",
  },
  {
    q: "Is BookVerse free to use?",
    a: "Yes. BookVerse is completely free for readers and contributors.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="mb-16 text-center"
        >

          <h2 className="text-4xl font-black text-[#1A365D]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Quick answers to common questions.
          </p>

        </motion.div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <motion.div
              key={faq.q}
              initial={{ opacity:0,y:25 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >

              <h3 className="text-xl font-bold text-[#1A365D]">
                {faq.q}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {faq.a}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}