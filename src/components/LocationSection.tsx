import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Waves, Plane, Hotel, Utensils, Camera } from 'lucide-react';

export function LocationSection() {
  const locationFeatures = [
    {
      icon: Hotel,
      title: 'Konaklama',
      description: 'Çeşme\'nin en prestijli otellerinde özel kongressciler indirimi',
    },
    {
      icon: Utensils,
      title: 'Gastronomi',
      description: 'Ege\'nin eşsiz lezzetleri ve deniz ürünleri',
    },
    {
      icon: Camera,
      title: 'Turizm',
      description: 'Tarihi Çeşme Kalesi ve doğal güzellikler',
    },
    {
      icon: Waves,
      title: 'İklim',
      description: ' Deniz meltemiyle serinleyen günler ve hafif serin akşamlar, adayı huzurlu bir şekilde gezmek için çok idealdir.',
    },
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Ayvalık, Cunda
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Ege'nin incisi Cunda'da eğitim ve tatili bir arada yaşayın
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/halic-park-otel.jpg"
                alt="Çeşme, İzmir"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center text-blue-900">
                    <MapPin className="w-5 h-5 mr-2" />
                    <a
                      href="https://www.ayvalikhalicpark.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                    >
                      Haliç Park Ayvalık-Balıkesir</a>
                  </div>
                  <a
                    href='https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgoIAxAAGAoYFhgeMgoIBBAAGKIEGIkFMgoIBRAAGKIEGIkFMgoIBhAAGKIEGIkFMgcIBxAAGO8F0gEHNDU4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=Kak3tGKGdroUMe7NM5O4E7TI&daddr=Mithatpaşa,+15+Eylül+Cd.+No:68,+10405+Ayvalık/Balıkesir'
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-blue-700 text-sm mt-1">
                    Mithatpaşa, 15 Eylül Cd. No:68, 10405 Ayvalık/Balıkesir
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Neden Cunda?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Eşsiz Lokasyon:</strong> Ege Denizi'nin berrak sularına nazır modern kongre merkezi
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>İklim Avantajı:</strong> Ekim ayında ideal sıcaklık ve güneşli havalar
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Sakinlik ve odaklanma:</strong> Büyük şehirlerin gürültüsünden uzak, huzurlu bir ortamda verimli toplantı ve oturumlar gerçekleştirilir.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-blue-800">
                  <strong>Ulaşım Kolaylığı:</strong> Balıkesir ve İzmir üzerinden kolay ulaşım imkânı vardır; aynı zamanda Edremit Havalimanı’na yakınlığı da avantaj sağlar
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-lg transition-shadow duration-300">
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


      </div>
    </section>
  );
}