import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SpeakersSection() {
  const speakers = [
    {
      name: 'Prof. Dr. Mehmet Öztürk',
      title: 'Oral ve Maksillofasiyal Cerrah',
      university: 'İstanbul Üniversitesi',
      expertise: 'Dijital İmplantoloji',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Endodontist',
      university: 'Harvard School of Dental Medicine',
      expertise: 'Mikroskobik Endodonti',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Prof. Dr. Elena Rodriguez',
      title: 'Ortodontist',
      university: 'Barcelona Üniversitesi',
      expertise: 'Şeffaf Plak Tedavisi',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Kenji Tanaka',
      title: 'Periodontoloji Uzmanı',
      university: 'Tokyo Diş Hekimliği Üniversitesi',
      expertise: 'Rejeneratif Periodontal Tedavi',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Prof. Dr. Ayşe Demir',
      title: 'Protetik Diş Tedavisi Uzmanı',
      university: 'Ankara Üniversitesi',
      expertise: 'CAD/CAM Sistemleri',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Michael Smith',
      title: 'Oral Patoloji Uzmanı',
      university: 'Oxford Üniversitesi',
      expertise: 'Oral Kanser Teşhisi',
      image: 'https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgwMDc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-700 font-medium mb-1">{speaker.title}</p>
                  <p className="text-blue-600 text-sm mb-3">{speaker.university}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 font-medium text-sm">
                      Uzmanlık: {speaker.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}