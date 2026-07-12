"use client";

import { useTranslations } from "next-intl";
import { NewsletterCard } from "@/components/shared/newsletter-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const newsletters = [
  {
    title: "APC-ELI Quarterly Review",
    month: "May",
    year: "2026",
    summary:
      "Conference announcements, grant recipient profiles, and a feature article on inclusive ELT practices.",
  },
  {
    title: "APC-ELI Quarterly Review",
    month: "February",
    year: "2026",
    summary:
      "Workshop recaps, upcoming conference details, and research highlights from our members.",
  },
  {
    title: "APC-ELI Quarterly Review",
    month: "November",
    year: "2025",
    summary:
      "Year-end review, member spotlight interviews, and calls for conference proposals.",
  },
];

export function NewsletterPreview() {
  const t = useTranslations("newsletterPreview");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {newsletters.map((n, i) => (
            <NewsletterCard key={i} {...n} index={i} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/newsletters">
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
