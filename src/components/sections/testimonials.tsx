"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { expertsData } from "@/data";
import { SectionHeader } from "@/components/shared/section-header";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items");
  const locale = useLocale();
  const photoFor = (name: string) =>
    expertsData[locale as "es" | "en"].find((e) => e.name === name)?.photo;
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
              <img
                src={photoFor(items[current].name)}
                alt={items[current].name}
                className="w-28 h-28 rounded-full object-cover object-top mx-auto mb-5 ring-4 ring-accent/20"
                loading="lazy"
              />
              <p className="font-heading text-2xl text-navy-700">
                {items[current].name}
              </p>
              <p className="text-sm font-medium text-accent mb-6">{items[current].role}</p>
              <p className="text-lg text-muted leading-relaxed">
                {items[current].text}
              </p>
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
