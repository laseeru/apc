"use client";

import { useTranslations, useLocale } from "next-intl";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { collaborationData } from "@/data";

export function Partners() {
  const t = useTranslations("partners");
  const locale = useLocale();
  const { internal, external } = collaborationData[locale as "es" | "en"];
  const partners = [...internal, ...external];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {partners.map((p, i) => (
            <MotionWrapper key={p.name} delay={(i % 5) * 0.05}>
              <div
                className="h-28 bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                title={p.name}
              >
                <img src={p.logo} alt={p.name} className="max-h-20 max-w-full object-contain" loading="lazy" />
              </div>
            </MotionWrapper>
          ))}
        </div>
        <div className="text-center">
          <Link href="/collaboration">
            <Button variant="outline" size="lg" className="gap-2">
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
