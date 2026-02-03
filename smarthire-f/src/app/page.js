import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import GetStarted from "@/components/home/GetStarted";
import SucessStories from "@/components/home/SuccessStories";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <GetStarted />
        <SucessStories />
      </main>
      <Footer />
    </>
  );
}
