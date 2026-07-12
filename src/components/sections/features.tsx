"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper, ScaleOnHover } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import {
  GraduationCap,
  Users,
  FileSearch,
  Globe,
  Heart,
  BookOpen,
} from "lucide-react";

const iconMap: Record<number, typeof GraduationCap> = {
  0: GraduationCap,
  1: Users,
  2: FileSearch,
  3: Globe,
  4: Heart,
  5: BookOpen,
};

interface FeatureItem {
  title: string;
  description: string;
}

export function Features() {
  const t = useTranslations("features");

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.raw("items").map((item: FeatureItem, i: number) => {
            const Icon = iconMap[i] || GraduationCap;
            return (
              <ScaleOnHover key={i}>
                <MotionWrapper delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </MotionWrapper>
              </ScaleOnHover>
            );
          })}
        </div>
      </div>
    </section>
  );
}
