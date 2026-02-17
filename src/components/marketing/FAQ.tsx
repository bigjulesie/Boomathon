"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What is Boomathon?",
    answer:
      "Boomathon is a 4-to-24-hour immersive simulation where teams work together to regenerate a dying planet — and in the process, discover how to collaborate at a level their day jobs rarely allow. Built on Jenson8's Boomerang behavioural platform, the experience strips away job titles, office politics, and organisational hierarchy, giving participants the space to develop genuine leadership instincts, sharpen how they communicate under pressure, and build the kind of trust that only comes from shared challenge. Teams rotate between Strategist and Operator roles, handing off knowledge across time zones in a continuous relay that mirrors how modern distributed work actually feels. Participants consistently report that the conversations they have during Boomathon surpass typical workplace interactions — more open, more honest, more productive. The experience also generates rich behavioural data across all six teamship qualities, so the growth people feel in the moment is backed by evidence they can take forward into their careers.",
  },
  {
    question: "Why Boomathon?",
    answer:
      "Boomathon is a mentally demanding, immersive team experience that simultaneously measures and develops the six qualities that define exceptional teamship: Leadership, Collaboration, Emotional Intelligence, Adaptability, Communication, and Conflict Resolution. Unlike traditional L&D programmes that separate assessment from training, Boomathon does both at once — teams face real pressure, make consequential decisions together, and receive rich behavioural data on how they actually perform, not how they think they perform. The result is sustained behaviour change rates significantly higher than conventional approaches. Whether your team spans one office or thirty countries, Boomathon creates the shared crucible experience that reveals genuine strengths, surfaces hidden dynamics, and gives every participant actionable insight into how they show up when it matters most.",
  },
  {
    question: "Who is Boomathon designed for?",
    answer:
      "Boomathon is designed for corporate teams and executives looking to develop leadership, collaboration, emotional intelligence, communication, conflict resolution, and adaptability. It's ideal for organisations wanting to transform team-building into a high-stakes, measurable experience.",
  },
  {
    question: "How many participants can take part?",
    answer:
      "Boomathon scales from intimate missions with as few as 12 participants to massive mobilisations of up to 1,000 participants. The experience is tailored to your organisation's size and goals.",
  },
  {
    question: "How long does a Boomathon session last?",
    answer:
      "Sessions range from 2 to 24 hours. You can choose a focused sprint or an endurance marathon — the intensity is tailored to your team's objectives and availability.",
  },
  {
    question: "Can teams participate across different time zones?",
    answer:
      "Yes. Boomathon supports 1 to 24 time zones with a global relay format. Teams hand off progress across time zones, keeping the challenge running around the clock.",
  },
  {
    question: "What skills does Boomathon measure?",
    answer:
      "Boomathon measures six core teamship skills: Leadership, Collaboration, Emotional Intelligence, Communication, Conflict Resolution, and Adaptability. Real-time telemetry tracks team performance throughout the experience.",
  },
  {
    question: "When will Boomathon be available?",
    answer:
      "Boomathon is launching in March 2026. You can book an exploratory call now by contacting jena@jenson8.com to secure your mission slot.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-boom-blue-pale/20">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-6 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-oxanium)] font-bold text-[20px] text-boom-black pr-8">
          {question}
        </span>
        <span className="font-[family-name:var(--font-oxanium)] text-[24px] text-boom-pink shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1512px] px-8 lg:px-[146px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[900px]"
        >
          <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[42px] leading-[1.2] text-boom-black mb-10">
            Frequently Asked Questions
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
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

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
