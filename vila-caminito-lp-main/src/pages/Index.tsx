import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero"; 
import { Features } from "@/components/Features";
import { Rooms } from "@/components/Rooms";
import { Breakfast } from "@/components/Breakfast";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Rooms />
        <Breakfast />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;