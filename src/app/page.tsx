import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DocsSection } from "@/components/docs-section";
import { InstallSection } from "@/components/install-section";
import { ComparisonSection } from "@/components/comparison-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DocsSection />
        <InstallSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
