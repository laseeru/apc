"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { EventCard } from "@/components/shared/event-card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin } from "lucide-react";
import { grantsData } from "@/data";
import type { GrantOpportunity, GrantProject, WorkshopItem } from "@/data";

export default function GrantsWorkshopsPage() {
  const t = useTranslations("grants");
  const locale = useLocale();
  const data = grantsData[locale as "es" | "en"];

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
          <SectionHeader
            title={t("grantsSection.title")}
            subtitle={t("grantsSection.description")}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {data.projects.map((project: GrantProject, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Badge variant="accent" className="mb-3">
                  {project.period}
                </Badge>
                <h3 className="font-heading text-xl text-navy-700 mb-3">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-start gap-2 text-sm font-medium text-accent">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{project.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h3 className="font-heading text-2xl text-navy-700 mb-4">
                {t("grantsSection.eligibility.title")}
              </h3>
              <div className="space-y-3">
                {data.eligibility.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading text-2xl text-navy-700 mb-6">
                {t("grantsSection.current.title")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.opportunities.map((grant: GrantOpportunity, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-soft-gray rounded-xl p-6 border border-gray-100"
                  >
                    <Badge variant="accent" className="mb-3">
                      {grant.amount}
                    </Badge>
                    <h4 className="font-semibold text-navy-700 mb-2">
                      {grant.name}
                    </h4>
                    <p className="text-sm text-muted mb-3">{grant.description}</p>
                    <div className="flex items-center gap-2 text-sm text-accent mb-4">
                      <Calendar className="w-4 h-4" />
                      Deadline: {grant.deadline}
                    </div>
                    <a
                      href="mailto:apcelioficial@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-navy-700 hover:bg-navy-50 transition-colors"
                    >
                      {t("applyNow") || "Apply Now"}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("workshopsSection.title")}
            subtitle={t("workshopsSection.description")}
          />

          <h3 className="font-heading text-2xl text-navy-700 mb-6">
            {t("workshopsSection.upcoming.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {data.upcomingWorkshops.map((w: WorkshopItem, i: number) => (
              <EventCard
                key={i}
                title={w.title}
                date={w.date}
                location={w.location}
                description={w.description}
                index={i}
              />
            ))}
          </div>

          <FadeIn>
            <h3 className="font-heading text-2xl text-navy-700 mb-6">
              {t("workshopsSection.past.title")}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.pastWorkshops.map((w: WorkshopItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                >
                  <h4 className="font-semibold text-navy-700 mb-2">{w.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar className="w-4 h-4" />
                    {w.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted mt-1">
                    <MapPin className="w-4 h-4" />
                    {w.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
