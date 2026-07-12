import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { Features } from "@/components/sections/features";
import { WorkshopsPreview } from "@/components/sections/workshops-preview";
import { ConferencePreview } from "@/components/sections/conference-preview";
import { NewsletterPreview } from "@/components/sections/newsletter-preview";
import { MembershipPreview } from "@/components/sections/membership-preview";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Features />
      <WorkshopsPreview />
      <ConferencePreview />
      <NewsletterPreview />
      <MembershipPreview />
      <GalleryPreview />
      <Testimonials />
    </>
  );
}
