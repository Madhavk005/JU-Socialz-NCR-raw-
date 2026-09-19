"use client";

import { motion } from"framer-motion";
import { useState } from"react";
import { Plus } from"lucide-react";

export interface FaqData {
  question: string;
  answer: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_FAQS: FaqData[] = [
  { question:"Do I need experience or gear?", answer:"Neither. Your phone and free tools are enough to start — each vertical teaches its craft from zero." },
  { question:"Can first years apply?", answer:"Absolutely. First years grow the fastest here — curiosity beats experience." },
  { question:"How much time does it take?", answer:"Two to three meetups a week — shoots, edits, workshops — with an extra push around big campus events." },
  { question:"Can I join multiple verticals?", answer:"Yes. Choose one home vertical and roam into two more. The best work happens at the overlaps." },
];

export const JoinFaq = ({ faqsProp }: { faqsProp?: FaqData[] }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = faqsProp && faqsProp.length > 0 ? faqsProp : FALLBACK_FAQS;

  return (
    <section className="section-padding relative scroll-mt-20">
      <div className="container mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            Questions,{""}
            <span className="font-display font-light italic text-slate-lighter">
              answered.
            </span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease }}
              className="glass-card overflow-hidden rounded-2xl transition-colors duration-500 hover:border-slate-lighter/30"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-7"
              >
                <span className="font-geist text-base font-bold text-ivory-light md:text-lg">
                  {faq.question}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-slate-lighter transition-transform duration-500 ${openIdx === idx ?"rotate-45" :""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIdx === idx ?"auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                transition={{ duration: 0.4, ease }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 font-inter text-sm leading-relaxed text-ivory-light/60 md:px-7 md:pb-7 md:text-base">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
