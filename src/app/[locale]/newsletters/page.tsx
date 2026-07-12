"use client";

import { useTranslations } from "next-intl";
import { NewsletterCard } from "@/components/shared/newsletter-card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export default function NewslettersPage() {
  const t = useTranslations("newsletters");
  const items = t.raw("items");

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              {t("subtitle")}
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">{t("description")}</p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item: { title: string; month: string; year: string; summary: string }, i: number) => (
              <NewsletterCard
                key={i}
                title={item.title}
                month={item.month}
                year={item.year}
                summary={item.summary}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
