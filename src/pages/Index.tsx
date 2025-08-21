import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import TrustBar from "@/components/TrustBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredentialsSection from "@/components/CredentialsSection";
import QuickContactSection from "@/components/QuickContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ValuePropositions />
        <TestimonialsSection />
        <CredentialsSection />
        <QuickContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
