"use client";

import { useTranslations, useLocale } from "next-intl";
import { MemberCard } from "@/components/shared/member-card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { boardData } from "@/data";

export default function BoardPage() {
  const t = useTranslations("board");
  const locale = useLocale();
  const members = boardData[locale as "es" | "en"];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <MemberCard
                key={i}
                name={member.name}
                role={member.role}
                institution={member.institution}
                bio={member.bio}
                photo={`/images/gallery/image${i + 1}.png`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
