import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import VideoGrid from "@/components/VideoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <HeroSection />
        <VideoGrid />
      </main>
    </div>
  );
};

export default Index;
