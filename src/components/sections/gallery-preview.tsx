"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
];

export function GalleryPreview() {
  const t = useTranslations("galleryPreview");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {images.map((src, i) => (
            <MotionWrapper key={i} delay={i * 0.05}>
              <div className={`overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}>
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
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
