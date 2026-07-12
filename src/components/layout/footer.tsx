"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickNav = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "conference", href: "/conference" },
  { key: "membership", href: "/membership" },
  { key: "contact", href: "/contact" },
];

export function Footer() {
  const t = useTranslations();
  const navT = useTranslations("nav");

  return (
    <footer className="bg-navy-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/logo_apc.png" alt="APC-ELI" className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl text-white">APC-ELI</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {navT(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {t("contact.info.address")}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 shrink-0" />
                {t("contact.info.email")}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 shrink-0" />
                {t("contact.info.phone")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("footer.social")}
            </h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
          <p className="text-sm text-gray-500">{t("footer.org")}</p>
        </div>
      </div>
    </footer>
  );
}
