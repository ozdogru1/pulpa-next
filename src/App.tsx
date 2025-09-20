import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpeakersSection } from './components/SpeakersSection';
import { ProgramSection } from './components/ProgramSection';
import { LocationSection } from './components/LocationSection';
import { SponsorsSection } from './components/SponsorsSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ProgramSection />
        <LocationSection />
        <SponsorsSection />
        <RegistrationSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}