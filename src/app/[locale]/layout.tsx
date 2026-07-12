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
  const title = isEs
    ? "APC-ELI | Asociación de Pedagogos de Cuba — Especialistas en Lengua Inglesa"
    : "APC-ELI | Association of Pedagogues of Cuba — English Language Specialists";
  const description = isEs
    ? "APC-ELI es la Sección de Enseñanza de Inglés de la Asociación de Pedagogos de Cuba. Brindamos desarrollo profesional, becas IATEFL, conferencias y talleres para profesores de inglés en Cuba."
    : "APC-ELI is the English Language Teaching Section of the Association of Pedagogues of Cuba. We provide professional development, IATEFL scholarships, conferences, and workshops for English teachers in Cuba.";
  return {
    title,
    description,
    metadataBase: new URL("https://apc-eli.vercel.app"),
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
      siteName: "APC-ELI",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "APC-ELI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
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
