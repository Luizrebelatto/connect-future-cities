import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Problems from "@/components/Problems";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
