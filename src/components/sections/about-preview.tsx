"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  const t = useTranslations("aboutPreview");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="APC-ELI community"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-lg hidden md:block">
                <span className="text-4xl font-bold">500+</span>
                <p className="text-sm mt-1">Members Nationwide</p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <SectionHeader title={t("title")} subtitle={t("subtitle")} align="left" />
            <p className="text-muted text-lg leading-relaxed mb-8">
              {t("description")}
            </p>
            <Link href="/about">
              <Button variant="accent" size="lg" className="gap-2">
                {t("link")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
