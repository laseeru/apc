"use client";

import { useTranslations, useLocale } from "next-intl";
import { grantsData } from "@/data";
import { SectionHeader } from "@/components/shared/section-header";
import { EventCard } from "@/components/shared/event-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function WorkshopsPreview() {
  const t = useTranslations("workshops");
  const locale = useLocale();
  const workshops = grantsData[locale as "es" | "en"].upcomingWorkshops;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {workshops.map((w, i) => (
            <EventCard key={i} {...w} index={i} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/grants-workshops">
            <Button variant="outline" size="lg" className="gap-2">
              {t("viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
