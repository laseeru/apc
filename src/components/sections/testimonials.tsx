"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items");
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 text-center"
            >
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-navy-700 leading-relaxed mb-8 italic">
                &ldquo;{items[current].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={`https://images.unsplash.com/photo-${current % 2 === 0 ? "1494790108377-be9c29b29330" : "1507003211169-0a1dd7228f2d"}?w=100&h=100&fit=crop`}
                  alt={items[current].name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-semibold text-navy-700">
                    {items[current].name}
                  </p>
                  <p className="text-sm text-muted">{items[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white border border-gray-200 text-navy-700 hover:bg-navy-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_: unknown, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white border border-gray-200 text-navy-700 hover:bg-navy-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
