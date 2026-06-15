import { CertificationSection } from "@/components/certification-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { OriginSection } from "@/components/origin-section";
import { ProcessSection } from "@/components/process-section";
import { ProductSection } from "@/components/product-section";
import { QualitySection } from "@/components/quality-section";
import { SampleSection } from "@/components/sample-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <OriginSection />
        <ProductSection />
        <ProcessSection />
        <QualitySection />
        <GallerySection />
        <CertificationSection />
        <SampleSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
