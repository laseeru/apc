"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-gray">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-navy-700 mb-4">404</h1>
        <p className="text-xl text-muted mb-8">{t("description")}</p>
        <Link href="/">
          <Button variant="accent" size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t("cta")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
