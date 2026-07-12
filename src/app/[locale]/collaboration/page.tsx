"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Building2, Globe, Network, Users, Handshake } from "lucide-react";
import { collaborationData } from "@/data";
import type { AgencyItem, SupportMember } from "@/data";

const agencyIcons = [Building2, Globe, Building2];

export default function CollaborationPage() {
  const t = useTranslations("collaboration");
  const locale = useLocale();
  const data = collaborationData[locale as "es" | "en"];

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

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {data.internal.map((item: AgencyItem, i: number) => {
              const Icon = agencyIcons[i] || Building2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-soft-gray rounded-2xl p-8 text-center"
                >
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-navy-700 mb-2">{item.name}</h3>
                  <p className="text-muted">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-20">
            <MotionWrapper>
              <h2 className="font-heading text-3xl text-navy-700 mb-3 text-center">
                {t("external.title")}
              </h2>
            </MotionWrapper>
            <div className="space-y-4 max-w-3xl mx-auto">
              {data.external.map((item: AgencyItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <Handshake className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-700 text-lg">{item.name}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="bg-navy-700 text-white rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-accent" />
                <h2 className="font-heading text-3xl">{t("celts.title")}</h2>
              </div>
              <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
                {t("celts.description")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.supportTeam.map((member: SupportMember, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-lg">
                    {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-700 text-lg mb-1">{member.name}</h3>
                <span className="inline-block text-xs font-medium text-accent bg-accent/5 px-2 py-1 rounded-full mb-3">
                  {member.expertise}
                </span>
                <p className="text-muted text-sm leading-relaxed">{member.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
