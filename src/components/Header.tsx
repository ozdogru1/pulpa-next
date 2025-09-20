import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{ backgroundImage: "url('/pulpa-logo.png')", backgroundSize: "cover", backgroundPosition: "center" }}
              className="  bg-blue-600 rounded-lg flex items-center justify-center">
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Ana Sayfa', id: 'hero' },
              { label: 'Hakkında', id: 'about' },
              { label: 'Konuşmacılar', id: 'speakers' },
              { label: 'Program', id: 'program' },
              { label: 'Konum', id: 'location' },
              { label: 'Sponsorlar', id: 'sponsors' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-blue-700 hover:text-blue-900 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection('registration')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            Kayıt Ol
          </Button>
        </div>
      </div>
    </motion.header>
  );
}