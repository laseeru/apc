"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Award, Users } from "lucide-react";
import { collaborationData, expertsData } from "@/data";
import type { AgencyItem, Expert } from "@/data";

export default function CollaborationPage() {
  const t = useTranslations("collaboration");
  const locale = useLocale();
  const data = collaborationData[locale as "es" | "en"];
  const experts = expertsData[locale as "es" | "en"];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper>
            <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-16">
              {t("description")}
            </p>
          </MotionWrapper>

          <MotionWrapper>
            <h2 className="font-heading text-3xl text-navy-700 mb-8 text-center">
              {t("internal.title")}
            </h2>
          </MotionWrapper>
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {data.internal.map((item: AgencyItem, i: number) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <img src={item.logo} alt={item.name} className="max-h-24 max-w-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-heading text-xl text-navy-700 mb-1">{item.name}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <MotionWrapper>
            <h2 className="font-heading text-3xl text-navy-700 mb-8 text-center">
              {t("external.title")}
            </h2>
          </MotionWrapper>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {data.external.map((item: AgencyItem, i: number) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={item.logo} alt={item.name} className="max-h-20 max-w-[220px] object-contain" loading="lazy" />
                </div>
                <h3 className="font-semibold text-navy-700 text-lg mb-1">{item.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6 items-center bg-soft-gray rounded-2xl p-6 md:p-10">
              <div>
                <Award className="w-8 h-8 text-accent mb-3" />
                <h2 className="font-heading text-2xl md:text-3xl text-navy-700 mb-3">
                  {t("certificate.title")}
                </h2>
                <p className="text-muted text-lg leading-relaxed">{t("certificate.caption")}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/grants/british-council-certificate-ceremony.jpg"
                  alt={t("certificate.caption")}
                  className="rounded-xl shadow-md w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/grants/british-council-certificate.jpg"
                  alt={t("certificate.caption")}
                  className="rounded-xl shadow-md w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-navy-700 text-white rounded-2xl p-8 md:p-12 mb-16 grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="bg-white rounded-2xl p-4 w-48 mx-auto">
                <img src="/images/partners/celst.png" alt="Cuba English Language Support Team" className="w-full h-auto" loading="lazy" />
              </div>
              <div>
                <h2 className="font-heading text-3xl mb-4">{t("celst.title")}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{t("celst.description")}</p>
              </div>
            </div>
          </FadeIn>

          <MotionWrapper>
            <div className="text-center mb-12">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl text-navy-700 mb-3">
                {t("supportTeam.title")}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                {t("supportTeam.description")}
              </p>
            </div>
          </MotionWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {experts.map((member: Expert, i: number) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover object-top mx-auto mb-4 ring-2 ring-navy-100"
                  loading="lazy"
                />
                <h3 className="font-semibold text-navy-700 text-lg mb-1">{member.name}</h3>
                {member.expertise && (
                  <span className="inline-block text-xs font-medium text-accent bg-accent/5 px-2 py-1 rounded-full mb-3">
                    {member.expertise}
                  </span>
                )}
                {member.detail && (
                  <p className="text-muted text-sm leading-relaxed">{member.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted italic mt-10">{t("celst.andMore")}</p>
        </div>
      </section>
    </div>
  );
}
