"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

interface NewsletterCardProps {
  title: string;
  month: string;
  year: string;
  summary: string;
  index?: number;
}

export function NewsletterCard({
  title,
  month,
  year,
  summary,
  index = 0,
}: NewsletterCardProps) {
  const t = useTranslations("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-accent shrink-0" />
          <span className="text-sm font-medium text-muted">
            {month} {year}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-navy-700 mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{summary}</p>
      <Button variant="outline" size="sm" className="gap-2">
        <Download className="w-4 h-4" />
        {t("downloadPdf")}
      </Button>
    </motion.div>
  );
}
