"use client";

import { useTranslations } from "next-intl";
import { NewsletterCard } from "@/components/shared/newsletter-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function NewsletterPreview() {
  const t = useTranslations("newsletterPreview");
  const newsletters: { title: string; month: string; year: string; summary: string; pdf?: string }[] =
    useTranslations("newsletters").raw("items").slice(0, 3);

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
