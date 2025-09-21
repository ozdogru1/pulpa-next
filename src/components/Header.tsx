import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and resize
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      // Custom smooth scroll animation
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;

      function easeOutQuart(t: number): number {
        return 1 - (--t) * t * t * t;
      }

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - (start || 0);
        const run = easeOutQuart(timeElapsed / duration) * distance + startPosition;
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Ana Sayfa', id: 'hero' },
    { label: 'Hakkında', id: 'about' },
    { label: 'Konuşmacılar', id: 'speakers' },
    { label: 'Program', id: 'program' },
    { label: 'Konum', id: 'location' },
    { label: 'Sosyal Etkinlikler', id: 'social-activities' },
    { label: 'Sponsorlar', id: 'sponsors' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
           {/* Logo */}
           <motion.div
             className="flex items-center space-x-2"
             whileHover={{ scale: 1.05 }}
           >
             <div
               style={{ backgroundImage: "url('/pulpa-logo.png')", backgroundSize: "cover", backgroundPosition: "center" }}
               className="w-[200px] h-10 bg-blue-600 rounded-lg flex items-center justify-center">
             </div>
           </motion.div>

           {/* Desktop Navigation - Hidden on mobile, visible on tablet and desktop */}
           {!isMobile && (
             <nav className="flex items-center space-x-8">
               {menuItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className="cursor-pointer text-blue-700 hover:text-blue-900 transition-colors duration-200"
                 >
                   {item.label}
                 </button>
               ))}
             </nav>
           )}

           {/* Desktop Register Button - Hidden on mobile, visible on tablet and desktop */}
           {!isMobile && (
             <Button
               onClick={() => scrollToSection('registration')}
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
             >
               Kayıt Ol
             </Button>
           )}

           {/* Mobile Menu Button - Only visible on mobile devices */}
           {isMobile && (
             <button
               onClick={toggleMenu}
               className="p-2 text-blue-700 hover:text-blue-900 transition-colors duration-200"
               aria-label="Toggle menu"
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           )}
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        {isMobile && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
              <nav className="py-4 border-t border-blue-100">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-left text-blue-700 hover:text-blue-900 transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                    className="pt-4 border-t border-blue-100"
                  >
                    <Button
                      onClick={() => scrollToSection('registration')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      Kayıt Ol
                    </Button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.header>
  );
}