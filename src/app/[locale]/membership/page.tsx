"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ChevronRight,
  School,
  User,
  Building2,
  ArrowRight,
} from "lucide-react";
import { membershipData } from "@/data/membership";
import type { BenefitItem, TierItem, FaqItem } from "@/data/membership";

const tierIcons = [School, User, Building2];

export default function MembershipPage() {
  const t = useTranslations("membership");
  const locale = useLocale();
  const data = membershipData[locale as "es" | "en"];

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
          <SectionHeader title={t("benefits.title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {data.benefits.map((benefit: BenefitItem, i: number) => (
              <MotionWrapper key={i} delay={i * 0.06}>
                <div className="bg-soft-gray rounded-xl p-6 border border-gray-100 h-full">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-navy-700 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted">{benefit.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <SectionHeader title={t("tiers.title")} />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {data.tiers.map((tier: { name: string; price: string; features: string[] }, i: number) => {
              const Icon = tierIcons[i] || User;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-xl p-6 border-2 ${
                    i === 1
                      ? "border-accent bg-white shadow-lg relative"
                      : "border-gray-100 bg-white shadow-sm"
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="accent">Popular</Badge>
                    </div>
                  )}
                  <Icon className={`w-10 h-10 mb-4 ${i === 1 ? "text-accent" : "text-navy-700"}`} />
                  <h3 className="font-heading text-2xl text-navy-700 mb-1">{tier.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{tier.price}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feat: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={i === 1 ? "accent" : "outline"}
                    className="w-full gap-2"
                  >
                    {t("title")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <SectionHeader title={t("howToJoin.title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {data.howToJoin.map((step: { step: string; title: string; description: string }, i: number) => (
              <MotionWrapper key={i} delay={i * 0.08}>
                <div className="bg-soft-gray rounded-xl p-6 border border-gray-100 h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-navy-700 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <SectionHeader title={t("faq.title")} />
          <div className="max-w-3xl mx-auto space-y-3">
            {data.faq.map((faq: FaqItem, i: number) => (
              <FadeIn key={i}>
                <details className="group bg-soft-gray rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-navy-700 font-medium hover:bg-navy-50 transition-colors">
                    {faq.q}
                    <ChevronRight className="w-5 h-5 text-accent group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl mb-4">{t("title")}</h2>
          <p className="text-gray-400 mb-8">{t("subtitle")}</p>
          <Button variant="accent" size="lg" className="gap-2">
            {t("title")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
