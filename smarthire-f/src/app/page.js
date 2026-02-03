import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import PowerfulFeatures from "@/components/home/PowerfulFeatures";
import GetStarted from "@/components/home/GetStarted";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PowerfulFeatures />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
