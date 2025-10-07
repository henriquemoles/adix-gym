'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { InstagramSection } from '@/components/InstagramSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FaWhatsapp } from "react-icons/fa";
import './globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511942121589" // 👉 substitua pelo número real do cliente
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </div>
  );
}
