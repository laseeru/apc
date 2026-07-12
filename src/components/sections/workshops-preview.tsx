"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { EventCard } from "@/components/shared/event-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const workshops = [
  {
    title: "Task-Based Language Teaching",
    date: "July 15-16, 2026",
    location: "Havana",
    description:
      "A two-day intensive workshop on implementing task-based approaches in the English classroom.",
  },
  {
    title: "Integrating Technology in ELT",
    date: "August 5-6, 2026",
    location: "Santiago de Cuba",
    description:
      "Practical strategies for using digital tools and resources in English language teaching.",
  },
  {
    title: "Assessment and Evaluation in ELT",
    date: "September 20-21, 2026",
    location: "Santa Clara",
    description:
      "Designing effective assessments that measure language proficiency and support learning.",
  },
];

export function WorkshopsPreview() {
  const t = useTranslations("workshops");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
