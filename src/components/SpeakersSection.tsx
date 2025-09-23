import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SpeakersSection() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  const speakers = [
    { name: 'Tuğba Türk', title: 'Prof.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/Tugba-Turk .JPG' },
    { name: 'Nejat Nizam', title: 'Prof.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/prof.dr.nejat-nizam.jpeg' },
    { name: 'Önder Gürlek', title: 'Doç.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/doç.dr.onder-gurlek.jpeg' },
    { name: 'Alp Abidin Ateşçi', title: 'Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/Dr.Alp-abidin-atesci.jpeg' },
    { name: 'Merve Erdoğ', title: 'Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/dr.merve-erdog.jpeg' },
    { name: 'Volkan Çiftçi', title: 'Doç.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/doç.dr.volkan-çiftçi.png' },
    { name: 'Refka Rmili', title: 'Dt.', university: '', expertise: '', image: '/assets/speakers-optimized/Dt.Refka Rmili.png' },
    { name: 'Esra Uzer Çelik', title: 'Prof.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/Prof.Dr.Esra-Uzer-Celik.png' },
    { name: 'Berkin Öztürk', title: 'Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/berkin-ozturk.png' },
    { name: 'Berna Özkeskin', title: 'Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/dr.berna-ozkeskin.jpg' },
    { name: 'Gökhan-Elmabaşoğlu', title: 'Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/Dr.gokhan-elmabasoglu.png' },
    { name: 'Özgur Baydemir', title: 'Dt.', university: '', expertise: '', image: '/assets/speakers-optimized/dt-ozgur-baydemir.png' },
    { name: 'Rouzbeh Fateli', title: 'Dt.', university: '', expertise: '', image: '/assets/speakers-optimized/Dt. Rouzbeh-fateli.jpeg' },
    { name: 'Erdoğan Ertek', title: 'Dt.', university: '', expertise: '', image: '/assets/speakers-optimized/dt.erdogan-ertek.jpeg' },
    { name: 'Buğra Kardaşlar', title: 'Op.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/op.dr.bugra-kardaslar.jpeg' },
    { name: 'Ozan Seymen Sezen', title: 'Prof.Dr.', university: '', expertise: '', image: '/assets/speakers-optimized/prof.ozan-seymen-sezen.jpeg' },
    { name: 'Hayriye Ertürk', title: 'Uzm.Dt.', university: '', expertise: '', image: '/assets/speakers-optimized/uzm.dt-hayriye-erturk.png' },
    { name: 'Büşra Sarı Ertek', title: 'Uzm.Psk.', university: '', expertise: '', image: '/assets/speakers-optimized/uzm.psikolog-busra-sari-ertek.jpeg' },
    { name: 'Gürkan Türköz', title: 'Cdt.', university: '', expertise: '', image: '/assets/speakers-optimized/Gürkan-Türköz.png' },
    { name: 'Eren Aydoğan', title: 'Cdt.', university: '', expertise: '', image: '/assets/speakers-optimized/WhatsApp Image 2025-09-20 at 13.29.56.jpeg' },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Uzman Konuşmacılar
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Alanlarında dünya çapında tanınan uzmanlardan öğrenme fırsatı
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-white border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative ">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    style={{ objectFit: 'contain' }}
                    className="w-full h-64   group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className='flex items-center g-2'>
                    <p className="text-blue-900 mr-2 font-medium ">{speaker.title}</p>
                    <h3 className="text-lg font-bold text-blue-900 ">{speaker.name}</h3>
                  </div>
                  <p className="text-blue-600 text-sm mb-3">{speaker.university}</p>
                  {/* <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 font-medium text-sm">
                      Uzmanlık: {speaker.expertise}
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}