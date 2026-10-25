"use client";

import { useTranslations, useLocale } from "next-intl";
import { galleryItems } from "@/data/gallery";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const previewSrcs = [
  "/images/events/7th-national-conference-santiago.jpg",
  "/images/activities/hands-up-2.jpg",
  "/images/events/caribbean-ambassadors.jpg",
  "/images/festival/festival-01.jpg",
  "/images/grants/kinship-children-2.jpg",
  "/images/activities/future-of-english-brazil.jpg",
];
const images = previewSrcs.map((src) => galleryItems.find((item) => item.src === src)!);

export function GalleryPreview() {
  const t = useTranslations("galleryPreview");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {images.map((item, i) => (
            <MotionWrapper key={i} delay={i * 0.05}>
              <div className={`overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}>
                <img
                  src={item.src}
                  alt={item.title[locale]}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery">
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
