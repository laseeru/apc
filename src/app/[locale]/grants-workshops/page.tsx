"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { EventCard } from "@/components/shared/event-card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin, GraduationCap, Users } from "lucide-react";
import { grantsData, supportedTeachers, supportedTeacherPhotos } from "@/data";
import type { GrantOpportunity, GrantProject, GrantWorkshop, WorkshopItem } from "@/data";

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
                {project.period && (
                  <Badge variant="accent" className="mb-3">
                    {project.period}
                  </Badge>
                )}
                <h3 className="font-heading text-xl text-navy-700 mb-3">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                {project.impact && (
                  <div className="flex items-start gap-2 text-sm font-medium text-accent mb-4">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{project.impact}</span>
                  </div>
                )}
                {project.images && (
                  <div className="grid grid-cols-3 gap-2">
                    {project.images.map((img) => (
                      <figure key={img.src}>
                        <img
                          src={img.src}
                          alt={img.caption}
                          title={img.caption}
                          className="w-full aspect-square object-cover rounded-lg"
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-soft-gray rounded-2xl p-8">
              <GraduationCap className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading text-2xl text-navy-700 mb-2">
                {t("grantWorkshops.title")}
              </h3>
              <p className="text-muted mb-6">{t("grantWorkshops.description")}</p>
              <ul className="space-y-3">
                {data.grantWorkshops.map((w: GrantWorkshop) => (
                  <li key={w.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-700">{w.title}</p>
                      <p className="text-sm text-muted">{w.partner}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-navy-700 mb-6">
                {t("booklets.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {data.booklets.map((b, i) => (
                  <figure key={b.src} className={i === 0 ? "col-span-2" : ""}>
                    <img
                      src={b.src}
                      alt={b.caption}
                      className={`w-full rounded-xl shadow-sm object-cover ${i === 0 ? "aspect-[16/9]" : "aspect-square"}`}
                      loading="lazy"
                    />
                    <figcaption className="text-xs text-muted mt-2">{b.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
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
                      {t("deadline")}: {grant.deadline}
                    </div>
                    <a
                      href="mailto:apcelioficial@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-navy-700 hover:bg-navy-50 transition-colors"
                    >
                      {t("applyNow")}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper>
            <div className="text-center mb-10">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl mb-4">{t("supported.title")}</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                {t("supported.description")}
              </p>
            </div>
          </MotionWrapper>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {supportedTeachers.map((name) => (
              <span key={name} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm">
                {name}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {supportedTeacherPhotos.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt={t("supported.title")}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="w-full aspect-[4/3] object-cover rounded-xl"
                loading="lazy"
              />
            ))}
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
