import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Target, Users, Award, Globe } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Yenilikçi Yaklaşımlar',
      description: 'Diş hekimliğinde son teknoloji uygulamaları ve gelecek vizyonu',
    },
    {
      icon: Users,
      title: 'Uzman Konuşmacılar',
      description: 'Alanında önder olan uluslararası diş hekimliği uzmanları',
    },
    {
      icon: Award,
      title: 'Sertifikalı Eğitim',
      description: 'Katılım sertifikası.',
    },
    {
      icon: Globe,
      title: 'Uluslararası Platform',
      description: 'Dünya çapında networking ve işbirliği fırsatları',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Kongre Hakkında
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Pulpa Akademi tarafından düzenlenen bu özel kongre, diş hekimleri ve diş hekimliği öğrencilerini, bilimsel içeriği yüksek ve deneyim odaklı bir programla buluşturuyor.

            Cunda Adası'nın eşsiz atmosferinde gerçekleşecek olan etkinlikte, teorik ve pratik eğitimlerin yanı sıra interaktif paneller, soru-cevap oturumları ve birebir iletişim fırsatları sunulacak. Sektörün en saygın isimleriyle dolu konuşmacı kadrosu, katılımcılara hem mesleki gelişim hem de ilham dolu bir yaz deneyimi vadediyor.

            Bilim, deniz, samimiyet ve profesyonellik bir arada... Cunda'da buluşuyoruz!

            Kongremizin bilimsel programı, diş hekimliği alanında güncel bilgiyi teoriyle pratiği bir araya getirerek siz değerli katılımcılarımıza benzersiz bir öğrenim deneyimi sunmayı hedeflemektedir.

            İki tam gün sürecek program boyunca; teorik anlatımlar, pratik uygulama oturumları, interaktif paneller ve soru-cevap bölümleri yer alacaktır. Katılımcılarımız, sadece dinlemekle kalmayacak, konuşmacılarla bire bir iletişim kurarak deneyimlerini paylaşma ve doğrudan bilgi alma fırsatı yakalayacaklardır.

            Alanında uzman, akademik ve klinik anlamda en yetkin isimlerin yer aldığı kadromuzla; katılımcılarımızı ilham veren, donanımlı ve mesleki gelişime katkı sağlayan bir ortamda ağırlamaktan gurur duyacağız. Bu kongre, bilimsel içeriğiyle olduğu kadar, sağladığı birebir etkileşim ve uygulama olanaklarıyla da fark yaratacak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-700">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Neden Bu Kongre?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Son Teknoloji:</strong> Dijital diş hekimliği, yapay zeka uygulamaları
                  ve minimal invaziv tedavi yöntemleri
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Pratik Deneyim:</strong> Hands-on workshop'lar ve canlı demonstrasyonlar
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Networking:</strong> Sektörün önde gelen isimleriyle tanışma fırsatı
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Cunda Avantajı:</strong> Eşsiz doğal güzellikler eşliğinde eğitim
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-4">Kongre İstatistikleri</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">20</div>
                  <div className="text-blue-100">Konuşmacı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-blue-100">Oturum</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-blue-100">Gün</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}