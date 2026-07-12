"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";

const categories = ["all", "conferences", "workshops", "community"] as const;

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.cat === filter);

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
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-accent text-white shadow-sm"
                    : "bg-white text-navy-700 border border-gray-200 hover:bg-navy-50"
                }`}
              >
                {t(`filter${cat.charAt(0).toUpperCase() + cat.slice(1)}`)}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setLightbox(galleryItems.indexOf(item))}
                    className="group relative w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-end p-4">
                      <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                        {item.title}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                className="absolute left-4 p-2 text-white hover:text-gray-300 z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {lightbox < galleryItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                className="absolute right-4 p-2 text-white hover:text-gray-300 z-10"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-4 text-white text-sm">
              {galleryItems[lightbox].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
