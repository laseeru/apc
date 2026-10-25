"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { CheckCircle, Target, Eye, Heart, Shield, Lightbulb, Globe } from "lucide-react";

const valueIcons = [Target, Globe, Lightbulb, Heart, Shield, CheckCircle];

interface ValueItem {
  title: string;
  description: string;
}

interface JourneyItem {
  year: string;
  event: string;
}

export default function AboutPage() {
  const t = useTranslations("about");

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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <MotionWrapper>
              <img
                src="/images/events/7th-national-conference-santiago.jpg"
                alt={t("whatIs.title")}
                className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <h2 className="font-heading text-3xl text-navy-700 mb-6">
                {t("whatIs.title")}
              </h2>
              <ul className="space-y-4">
                {t.raw("whatIs.items").map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-muted leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionWrapper>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <MotionWrapper>
              <div className="bg-soft-gray rounded-2xl p-8 h-full">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-2xl text-navy-700 mb-3">
                  {t("mission.title")}
                </h3>
                <p className="text-muted leading-relaxed">{t("mission.content")}</p>
              </div>
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <div className="bg-soft-gray rounded-2xl p-8 h-full">
                <Eye className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-2xl text-navy-700 mb-3">
                  {t("vision.title")}
                </h3>
                <p className="text-muted leading-relaxed">{t("vision.content")}</p>
              </div>
            </MotionWrapper>
          </div>

          <MotionWrapper>
            <h2 className="font-heading text-3xl text-navy-700 mb-6 text-center">
              {t("objectives.title")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {t.raw("objectives.items").map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-navy-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <h2 className="font-heading text-3xl text-navy-700 mb-10 text-center">
              {t("values.title")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {t.raw("values.items").map((item: ValueItem, i: number) => {
                const Icon = valueIcons[i] || Shield;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-semibold text-navy-700 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </MotionWrapper>

          <FadeIn>
            <div className="bg-navy-700 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl mb-4">{t("why.title")}</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                {t("why.content")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-navy-700 mb-12 text-center">
            {t("journey.title")}
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 -translate-x-1/2" />
            <div className="space-y-12">
              {t.raw("journey.items").map((item: JourneyItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <span className="text-2xl font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <span className="text-lg font-bold text-accent md:hidden block mb-1">
                      {item.year}
                    </span>
                    <p className="text-navy-700 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
