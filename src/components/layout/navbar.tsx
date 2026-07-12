"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "board", href: "/board" },
  { key: "conference", href: "/conference" },
  { key: "grantsWorkshops", href: "/grants-workshops" },
  { key: "newsletters", href: "/newsletters" },
  { key: "membership", href: "/membership" },
  { key: "gallery", href: "/gallery" },
  { key: "activities", href: "/activities" },
  { key: "collaboration", href: "/collaboration" },
  { key: "contact", href: "/contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`flex items-center gap-2 font-heading font-bold text-xl transition-colors ${
              isScrolled ? "" : "[&_img]:brightness-0 [&_img]:invert"
            }`}
          >
            <img src="/logo_apc.png" alt="APC-ELI" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-accent bg-accent/5"
                      : "text-accent"
                    : isScrolled
                      ? "text-navy-700 hover:text-accent hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="ml-3">
              <LanguageSwitcher light={!isScrolled} />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-navy-700 hover:bg-navy-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-accent bg-accent/5"
                      : "text-navy-700 hover:bg-navy-50"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
