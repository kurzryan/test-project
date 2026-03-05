import StatusBar from "@/components/StatusBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KpiCards from "@/components/KpiCards";
import QuickLinks from "@/components/QuickLinks";
import ExploreDashboards from "@/components/ExploreDashboards";
import RecentHighlights from "@/components/RecentHighlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <StatusBar />
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <KpiCards />
        <QuickLinks />
        <ExploreDashboards />
        <RecentHighlights />
      </main>
      <Footer />
    </div>
  );
}
