import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export function SocialActivitiesSection() {
  const activities = [
    {
      date: '10 Ekim 2025',
      description: "Valizler açılıyor, kalpler heyecanla çarpıyor… Cunda'nın ruhunu taşıyan taş sokaklardan geçip otelimize yerleşiyoruz.Ve akşamüstü, Türkiye'de bir ilk gerçekleşiyor: Açık havada, gün batımında, unutulmaz bir açılış konuşması. Ege'nin turuncuya boyanan ufkunda, Pulpa'nın vizyonu gökyüzüne karışıyor.Ardından kumsala geçiyoruz… Ateş başında marshmallow'lar çubuklara takılıyor, samimi sohbetler yankılanıyor, yeni dostlukların kıvılcımı çakıyor. Yıldızların altında, Pulpa ruhu ilk geceye damgasını vuruyor.",
      image: './social-events/first-day-cunda.jpg',
     },
    {
      title: 'Networking Kokteyli',
      date: '11 Ekim 2025',
      description: "Sabah saatleri bilgiyle dolu.Alanında uzman eğitmenlerle gerçekleştirilen akademik sunumlar, katılımcılarını düşünmeye, sorgulamaya ve gelişmeye davet ediyor. Ve ardından, sahne eğlencenin oluyor! Havuz başı partisiyle adanın ritmi değişiyor. Bando ekibiyle coşku yükseliyor, canlı DJ performansıyla gecenin ritmi hızlanıyor. Bu sırada gün boyunca ve isteyenler için sabahın erken saatlerinde bile SUP, kano ve kürek gibi su sporları katılımcıları bekliyor. Eğitim kadar hareket, eğlence kadar özgürlük… Pulpa'da bir güne sığan şey sadece bilgi değil; yaşanmışlık.",
      image: './social-events/second-day-social.jpg',
    },
    {
      title: 'Cunda Kültür Turu',
      date: '12 Ekim 2025',
      description: "Sempozyumun son günü, işin pratiğine ayrılıyor. Katılımcılar, gerçekçi klinik senaryolara uygun olarak hazırlanan modeller üzerinde uygulamalar yapıyor. Bilginin ele, elin pratiğe dönüştüğü o büyülü anlar yaşanıyor. Aynı anda, uygulama bölümüne katılmayanlar için açık hava amfide PulpaTalk başlıyor. Doğayla iç içe, sade ama derin sohbetlerle, hekimlik yolculuğunun farklı yüzleri konuşuluyor. Birlikte düşünmek, paylaşmak ve ilham almak için mükemmel bir alan… Ve tabii ki, su sporları yine sahnede! İster gün doğumuyla başla, ister öğle saatlerinde serinle… SUP, kano, kürek — doğanın içinde, bedenini özgürleştirme zamanı.",
      image: './social-events/third-day-social.jpg',
    }
  ];

  return (
    <section id="social-activities" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Sosyal Etkinlikler
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Eğitimlerin yanında networking ve kültürel deneyimler için özel etkinlikler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="h-full bg-white border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-blue-800">
                      <Calendar className="w-4 h-4 mr-3" />
                      <span className="font-medium">{activity.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-800 leading-relaxed">
                    {activity.description}
                  </p>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Tüm Sosyal Etkinlikler Kongre Kaydınıza Dahildir
            </h3>
          
            <div className="flex justify-between gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Networking</h4>
                <p className="text-blue-700 text-sm">100+ profesyonel ile tanışma fırsatı</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Keşif</h4>
                <p className="text-blue-700 text-sm">Cunda'nın güzelliklerini keşfedin</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Eğlence</h4>
                <p className="text-blue-700 text-sm">Unutulmaz anılar biriktirin</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}