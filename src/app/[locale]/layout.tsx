import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "APC-ELI | Especialistas en Lengua Inglesa de la APC" : "APC-ELI | English Language Specialists of APC",
    description: isEs
      ? "Sección de especialistas en lengua inglesa de la Asociación de Pedagogos de Cuba"
      : "English language specialists section of the Association of Pedagogues of Cuba",
    openGraph: {
      title: isEs ? "APC-ELI | Especialistas en Lengua Inglesa de la APC" : "APC-ELI | English Language Specialists of APC",
      description: isEs
        ? "Sección de especialistas en lengua inglesa de la Asociación de Pedagogos de Cuba"
        : "English language specialists section of the Association of Pedagogues of Cuba",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
