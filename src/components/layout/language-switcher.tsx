"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  light?: boolean;
}

export function LanguageSwitcher({ light }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-sm font-medium ${
        light
          ? "border-white/30 text-white/80 hover:text-white hover:bg-white/10"
          : "border-navy-300 text-navy-700 hover:bg-navy-50"
      }`}
      aria-label={locale === "en" ? "Switch to Spanish" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
