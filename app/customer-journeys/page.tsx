
import Navbar from "@/components/Navbar";
import Hero from "@/components/customer-journeys/Hero";
import Scale from "@/components/customer-journeys/Scale";
import Seasons from "@/components/customer-journeys/Seasons";
import Insights from "@/components/customer-journeys/Insights";
import Reflection from "@/components/customer-journeys/Reflection";
import Footer from "@/components/Footer";

export default function CustomerJourneysPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />
      <Scale />
      <Seasons />
       <Insights />
       <Reflection />
      <Footer />
    </main>
  );
}