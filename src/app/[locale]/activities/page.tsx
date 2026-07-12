"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { activitiesData } from "@/data";
import type { ActivityItem } from "@/data";

export default function ActivitiesPage() {
  const t = useTranslations("activities");
  const locale = useLocale();
  const items = activitiesData[locale as "es" | "en"];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t("description")}
          </p>

          <div className="space-y-20">
            {items.map((item: ActivityItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-3xl text-navy-700 mt-2 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
