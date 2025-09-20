import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Handshake, Building2, ExternalLink } from 'lucide-react';

export function SponsorsSection() {
  const sponsors = [
    {
      name: 'Gürkan Türköz Dental Studio',
      image: '/sponcored/gurkan-turkoz.png',
      website: 'www.dentaltech-global.com',
      backgroundColor: 'black',
      padding: '80px',
      highlight: 'Lider Teknoloji'
    },
    {
      name: 'i-Linq ',
      image: '/sponcored/i-linq.png',
      website: 'www.mediequip.com',
      backgroundColor: 'white',
      highlight: 'Premium Ekipman'
    },
    {
      name: 'Saremco',
      image: '/sponcored/SAREMCO.png',
      website: 'www.biopharm.com',
      backgroundColor: 'white',
      highlight: 'Kaliteli Ürünler'
    },
    {
      name: 'Smile Design',
      image: '/sponcored/smile-design.PNG',
      website: 'www.smiledesign.com',
      backgroundColor: 'white',
      highlight: 'Estetik Çözümler'
    },
    {
      name: 'SmileBot',
      image: '/sponcored/smilebot.JPEG',
      website: 'www.smilebot.com',
      backgroundColor: 'white',
      highlight: 'AI Gülüş Tasarımı'
    },
    {
      name: 'Tolard',
      image: '/sponcored/tolard.png',
      website: 'www.tolard.com',
      backgroundColor: 'white',
      highlight: 'Malzeme Çözümleri'
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <Handshake className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Değerli Sponsorlarımız
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Kongreyi destekleyen ve sektörün gelişimine katkı sağlayan değerli iş ortaklarımız ile tanışın
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <Card key={sponsor.name} className="h-full bg-white border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div style={{ backgroundColor: sponsor.backgroundColor }} className="relative">
                <div className={`w-full h-48 flex items-center justify-center ${sponsor.backgroundColor ? 'bg-black' : 'bg-gray-50'}`}>
                  <ImageWithFallback
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-blue-900   group-hover:text-blue-700 transition-colors duration-300">
                    {sponsor.name}
                  </h4>


                  {/* Decorative Element */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              </CardContent>
            </Card>

          ))}
        </div>

      </div>
    </section>
  );
}