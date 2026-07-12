"use client";

import { useTranslations } from "next-intl";
import { MotionWrapper, FadeIn } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function ContactPage() {
  const t = useTranslations("contact");

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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <MotionWrapper>
              <h2 className="font-heading text-2xl text-navy-700 mb-6">
                Send us a message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder={t("form.name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder={t("form.email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder={t("form.subject")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    {t("form.message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
                    placeholder={t("form.message")}
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="gap-2 w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  {t("form.submit")}
                </Button>
              </form>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <div>
                <h2 className="font-heading text-2xl text-navy-700 mb-6">
                  {t("info.title")}
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-700">Address</p>
                      <p className="text-muted text-sm">{t("info.address")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-700">Email</p>
                      <p className="text-muted text-sm">{t("info.email")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-700">Phone</p>
                      <p className="text-muted text-sm">{t("info.phone")}</p>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-xl text-navy-700 mb-4">
                  {t("social.title")}
                </h3>
                <div className="flex gap-3 mb-10">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 hover:bg-accent hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <div className="bg-soft-gray rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-navy-700 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Our Location
                  </h4>
                  <div className="aspect-[16/9] rounded-xl bg-navy-100 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1593558099516-f41e0ce5a7df?w=800&h=450&fit=crop"
                      alt="Map placeholder - Havana, Cuba"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-muted mt-2">{t("info.address")}</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
