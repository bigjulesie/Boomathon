"use client";

import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { faqs } from "@/lib/faq-data";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-boom-blue-pale/20">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex justify-between items-center py-6 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-oxanium)] font-bold text-[18px] md:text-[24px] text-boom-black pr-6 md:pr-8">
          {question}
        </span>
        <span className="font-[family-name:var(--font-oxanium)] text-[24px] text-boom-pink shrink-0" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[30px] text-boom-black/80 pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const y = prefersReducedMotion ? 0 : 30;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        <motion.div
          initial={{ opacity: 0, y }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[900px]"
        >
          <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[28px] md:text-[34px] lg:text-[42px] leading-[1.2] text-boom-black mb-10">
            Frequently Asked Questions
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
