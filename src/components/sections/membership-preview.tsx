"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Conference Discounts",
  "Workshop Access",
  "Grant Eligibility",
  "Publications",
  "Networking",
  "Professional Recognition",
];

export function MembershipPreview() {
  const t = useTranslations("membershipPreview");

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper>
            <SectionHeader
              title={t("title")}
              subtitle={t("subtitle")}
              align="left"
            />
            <p className="text-muted text-lg leading-relaxed mb-8">
              {t("description")}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-navy-700">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {b}
                </div>
              ))}
            </div>
            <Link href="/membership">
              <Button variant="accent" size="lg" className="gap-2">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
              alt="APC-ELI members"
              className="rounded-2xl shadow-lg"
              loading="lazy"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
