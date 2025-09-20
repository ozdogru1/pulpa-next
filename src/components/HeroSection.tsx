import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function HeroSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653667767792-9b057ef090fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjb25mZXJlbmNlJTIwbWVkaWNhbCUyMGV2ZW50fGVufDF8fHx8MTc1ODAwNzg1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Diş Kongresi 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-3xl md:text-7xl font-bold mb-6 leading-tight">
              Pulpa 1.Sempozyum Cunda
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl mb-8 leading-relaxed">
              Modern diş hekimliğinin geleceğini şekillendiren yenilikçi yaklaşımlar,
              son teknolojiler ve uzman görüşleri
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Calendar className="w-5 h-5 mr-2 text-blue-200" />
              <span>10-11-12 Ekim 2025</span>
            </div>
            <div className="flex items-center text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <MapPin className="w-5 h-5 mr-2 text-blue-200" />
              <span>Ayvalık, Cunda</span>
            </div>

          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={scrollToRegistration}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 text-lg"
              size="lg"
            >
              Hemen Kayıt Ol
            </Button>

          </motion.div>
        </div>

      </div>
    </section>
  );
}