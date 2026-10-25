"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export function ConferencePreview() {
  const t = useTranslations("conferencePreview");

  return (
    <section className="py-20 bg-navy-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/images/events/7th-national-conference-santiago.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-800/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper>
            <SectionHeader title={t("title")} subtitle={t("subtitle")} align="left" />

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-gray-300">{t("date")}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-gray-300">{t("location")}</span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t("description")}
            </p>

            <Link href="/conference">
              <Button variant="accent" size="lg" className="gap-2">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <div className="relative">
              <img
                src="/images/events/7th-national-conference-santiago.jpg"
                alt={t("title")}
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold text-lg">VII</span>
                <p className="text-xs">{t("edition")}</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
