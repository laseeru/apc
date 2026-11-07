"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Calendar, MapPin, Users, Mic, CheckCircle, Handshake } from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  detail: string;
  photo: string;
}

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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
              {t("subtitle")}
            </p>
            <p className="text-lg italic text-accent max-w-3xl mx-auto mb-6">
              {t("tagline")}
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
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 bg-accent/5 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  {t("participants.audience")}
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/5 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <Mic className="w-4 h-4" />
                  {t("stats")}
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("speakers.title")} />
          <div className="grid md:grid-cols-2 gap-6">
            {(t.raw("speakers.items") as Speaker[]).map((sp, i) => (
              <motion.div
                key={sp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-soft-gray rounded-2xl p-6 flex gap-5 items-start"
              >
                <img
                  src={sp.photo}
                  alt={sp.name}
                  className="w-24 h-24 rounded-full object-cover object-top shrink-0 ring-4 ring-white"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-xl text-navy-700">{sp.name}</h3>
                  <p className="text-sm font-medium text-accent mb-2">{sp.role}</p>
                  <p className="text-sm text-muted leading-relaxed">{sp.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeader title={t("themes.title")} />
            <div className="grid sm:grid-cols-2 gap-3">
              {(t.raw("themes.items") as string[]).map((theme, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-navy-700 text-sm">{theme}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <img src="/images/partners/cuba-solidarity-campaign.png" alt="Cuba Solidarity Campaign" className="h-14 w-auto" loading="lazy" />
            <p className="text-muted flex items-center gap-2">
              <Handshake className="w-5 h-5 text-accent shrink-0" />
              {t("sponsor")}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("gallery.title")} />
          <div className="grid md:grid-cols-3 gap-4">
            <figure className="md:col-span-2 md:row-span-2">
              <img
                src="/images/events/7th-national-conference-santiago.jpg"
                alt={t("gallery.santiago")}
                className="w-full h-full object-cover rounded-2xl shadow-md"
                loading="lazy"
              />
              <figcaption className="text-sm text-muted mt-2">{t("gallery.santiago")}</figcaption>
            </figure>
            <img
              src="/images/activities/homage-juan-carlos-izaguirre.jpg"
              alt=""
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
            <img
              src="/images/activities/conference-cd.jpg"
              alt=""
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
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
                <p className="text-sm text-accent font-medium mt-1">{conf.edition} {t("edition")}</p>
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
