"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Calendar, MapPin, Users } from "lucide-react";

interface PreviousEdition {
  year: string;
  edition: string;
  theme: string;
  location: string;
}

export default function ConferencePage() {
  const t = useTranslations("conference");
  const previous = t.raw("previous.items") as PreviousEdition[];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-accent" />
                {t("date")}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-accent" />
                {t("location")}
              </div>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t("description")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MotionWrapper>
              <h2 className="font-heading text-3xl text-navy-700 mb-4">
                {t("participants.title")}
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                {t("participants.description")}
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/5 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                {t("participants.audience")}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("previous.title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto justify-center">
            {previous.map((conf: PreviousEdition, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-3xl font-bold text-accent">{conf.year}</span>
                <p className="text-sm text-accent font-medium mt-1">{conf.edition} Edition</p>
                <p className="text-navy-700 font-medium mt-2">{conf.theme}</p>
                <p className="text-muted text-sm mt-1">{conf.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-20 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl text-white mb-4">{t("title")}</h2>
            <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
              {t("date")} &mdash; {t("location")}
            </p>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              {t("participants.audience")}
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
