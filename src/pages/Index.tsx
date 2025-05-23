
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import HistorySection from '../components/HistorySection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection 
        logoImage="/lovable-uploads/ae6915c2-5245-4308-b9d0-10fe4c837944.png"
        heroImage="/lovable-uploads/3f591ae7-9272-43e1-9fc0-f118930e917b.png"
      />
      <ServicesSection />
      <HistorySection founderImage="/lovable-uploads/956c83cc-b35d-4ca1-a486-1b25c07cd2b9.png" />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
