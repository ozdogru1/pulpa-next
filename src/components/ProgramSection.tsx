import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, MapPin, User } from 'lucide-react';

export function ProgramSection() {
  const programDays = [
    {
      date: '10 Ekim 2025',
      day: 'day1',
      theoretical: [
        {
          title: 'Ayvalık, Cunda Küçükköy / Sarımsaklı (Serbest Zaman)',
          time: "16.00",
          type: 'keynote',
        },
        {
          title: 'Açıkhava Amfitiyatroda Açılış Konuşması',
          speaker: 'Ayvalık İlçe Sağlık Müdürü Dr. Saliha Baltacı Akgün',
          speaker2: 'Kongre Onursal Başkanı Prof. Dr. Tuğba Türk',
          speaker3: "PulpAcademy Kurucusu Emre Diköz",
          type: 'keynote',
        },
        {
          title: 'Cunda Sahilinde Gün Batımında Marshmallow Barbekü',
          type: 'keynote',
        },
        {
          title: 'Serbest Zaman',
          type: 'keynote',
        },
      ]
    },
    {
      date: '11 Ekim 2025',
      day: 'day2',
      theoretical: [
        {
          time: '09:30 - 10:00',
          title: 'Kayıt & Karşılama',
          type: 'keynote',
        },
        {
          time: '10:00 - 10:40 ',
          title: ' Bruksizm Tedavisinde Dijitalleşme ',
          speaker: 'Dt. Özgür Baydemir',
          type: 'presentation',
        },
        {
          time: '10:40 - 11:20',
          title: 'Pulpa ve Ötesi',
          speaker: 'Prof. Dr. Tuğba Türk',
          type: 'presentation',
        },
        {
          time: '11:20 - 11:40',
          title: 'Kahve Arası',
          type: 'presentation',
        },
        {
          time: '11:40 - 12:20',
          title: 'Yumuşak Doku Cerrahisinde Biyoloji Temelli Flep Dizayni',
          speaker: 'Prof. Dr. Nejat Nizam',
          type: 'presentation',
        },
        {
          time: '12:20 - 13:00',
          title: ' Estetik Bölgede Planlamadan Proteze Dijital Destekli Implant Uygulamaları',
          speaker: 'Doc. Dr. Önder Gürlek',
          type: 'presentation',
        },
        {
          time: '13:00 - 14:30',
          title: ' Öğle Arası',
          type: 'presentation',
        },
        {
          time: '14:30 - 15:10',
          title: 'Porselen Lamina',
          speaker: 'Dr. Merve Erdoğ',
          type: 'presentation',
        },
        {
          time: '15:10 - 15:50',
          title: ' Dijital Anestezi Uygulamalari',
          speaker: 'Dr. Alp Abidin Ateşçi',
          type: 'presentation',
        },
        {
          time: "15:50 - 16:00 ",
          title: 'Kapanış & Değerlendirme',
          type: 'presentation',
        },
      ],
      practical: [
        {
          title: 'Diş Hekimliğinde Botulinum Toksin',
          speaker: "Op.Dr.Buğra Kardaşlar",
          type: 'workshop',
        },
        {
          title: 'Kompozit Venerlerde Tbakalama Sanatı',
          speaker: "Dt. Reka Rmili",
          type: 'workshop',
        },
        {
          title: 'Klinikte Dijital Tasarım',
          speaker: "Cdt. Gürkan Türköz",
          type: 'workshop',
        },
        {
          title: 'Klinikte Dijital Tasarım',
          speaker: "Cdt. Eren Aydoğan",
          type: 'workshop',
        },

      ],
      praticalSubTitle: "Pratik oturum kontenjanı 12 kişidir. Kayıt gereklidir."
    },
    {
      date: '12 Ekim 2025',
      day: 'day3',
      theoretical: [
        {
          time: '09:30 - 10:00',
          title: 'Kayıt & Karşılama',
          type: 'keynot',
        },
        {
          time: '10:00 - 10:40',
          title: 'Diş Hekimliğinde Psikolojik Yaklaşım',
          speaker: 'Uzm. Psk. Büşra Sarı Ertek',
          type: 'presentation',
        },
        {
          time: '10:40 - 11:20',
          title: 'Dijital Gülüş Tasarımı ve Yapay Zeka',
          speaker: 'Dt. Erdoğan Ertek',
          type: 'presentation',
        },
        {
          time: '11:20 - 11:40',
          title: 'Kahve Arası',
          type: 'presentation',
        },

        {
          time: '11:40 - 12:20',
          title: 'Diş Hekimliğinde Botulinum Toksin',
          speaker: 'Prof. Dr. Ozan Seymen Sezen',
          type: 'presentation',
        },

        {
          time: '12:20 - 13:00',
          title: 'Direct Composite Veneer',
          speaker: 'Dr. Berna Özkeskin',
          type: 'presentation',
        },
        {
          time: '13:00 - 14:30',
          title: 'Öğle Arası',
          type: 'presentation',
        },
        {
          time: '14:30 - 15:10',
          title: 'Kişiselleştirilmiş Gülüş Tasarımı',
          speaker: 'Dr. Berkin Öztürk',
          type: 'presentation',
        },
        {
          time: '15:10 - 15:50',
          title: 'Kapanış & Sertifika Töreni',
          type: 'presentation',
        },
        {
          time: '15:50 - 16:30',
          title: 'Endodontide Teknoloji ve Endokron Uyumu',
          speaker: 'Uzm. Dt. Hayriye Ertürk',
          type: 'presentation',
        },
        {
          time: '16-30 - 16:45',
          title: 'Kapanış & Sertifika Töreni',
          type: 'closing',
        },
      ],
      practical: [
        {
          title: 'Diş Hekimliğinde Botulinum Toksin',
          speaker: "Dr. Gökhan Elmabaşoğlu",
          type: 'workshop',
        },
        {
          title: 'Çocuk Diş Hekimliğinde Muayenehane Pratiğinde Dental Travma',
          speaker: "Doç. Dr. Volkan Çiftçi",
          type: 'workshop',
        },
        {
          title: 'Direkt Kompozit Venerlerde Öngörülebilir Başarı için İleri Teknikler',
          speaker: "Prof. Dr. Esra Uzer Çelik",
          type: 'workshop',
        },
        {
          title: 'Basitleştirilmiş İmplantoloji',
          speaker: "Uzm. Dt. Rouzbeh Fazeli",
          type: 'workshop',
        },
      ],

    },
  ];

  const getSessionStyle = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'border-l-4 border-l-blue-600 bg-blue-50';
      case 'presentation':
        return 'border-l-4 border-l-green-500 bg-green-50';
      case 'workshop':
        return 'border-l-4 border-l-purple-500 bg-purple-50';
      case 'panel':
        return 'border-l-4 border-l-orange-500 bg-orange-50';
      case 'social':
        return 'border-l-4 border-l-pink-500 bg-pink-50';
      case 'break':
        return 'border-l-4 border-l-gray-400 bg-gray-50';
      case 'closing':
        return 'border-l-4 border-l-red-500 bg-red-50';
      default:
        return 'border-l-4 border-l-blue-600 bg-blue-50';
    }
  };

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Kongre Programı
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            3 gün boyunca zengin içerik ve interaktif oturumlar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {programDays.map((day, index) => (
                <TabsTrigger key={day.day} value={day.day} className="text-lg">
                  {day.date}
                </TabsTrigger>
              ))}
            </TabsList>

            {programDays.map((day) => (
              <TabsContent key={day.day} value={day.day}>
                <div className="space-y-8">
                  {/* Teorik Oturumlar başlığı ilk gün hariç gösterilecek, içerik her gün görünecek */}
                  <div className="space-y-4">
                    {day.day !== 'day1' && (
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">T</span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">Teorik Oturumlar</h3>
                      </div>
                    )}
                    {day.theoretical?.map((session, index) => (
                      <motion.div
                        key={`theoretical-${index}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className={`${getSessionStyle(session.type)} hover:shadow-md transition-shadow duration-300`}>
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div className="flex-1">
                                {'time' in session && session.time && (
                                  <div className="flex items-center gap-4 mb-2">
                                    <div className="flex items-center text-blue-800">
                                      <Clock className="w-4 h-4 mr-2" />
                                      <span className="font-medium">{session.time}</span>
                                    </div>
                                  </div>
                                )}
                                <h3 className="text-xl font-bold text-blue-900 mb-2">
                                  {session.title}
                                </h3>
                                {'speaker' in session && session.speaker && (
                                  <div className="flex items-center text-blue-700">
                                    <User className="w-4 h-4 mr-2" />
                                    <span>{session.speaker}</span>
                                  </div>
                                )}
                                {'speaker2' in session && session.speaker2 && (
                                  <div className="flex items-center text-blue-700">
                                    <User className="w-4 h-4 mr-2" />
                                    <span>{session.speaker2}</span>
                                  </div>
                                )}
                                {'speaker3' in session && session.speaker3 && (
                                  <div className="flex items-center text-blue-700">
                                    <User className="w-4 h-4 mr-2" />
                                    <span>{session.speaker3}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pratik Oturumlar */}
                  {day.practical && day.practical.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">P</span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900">Pratik Oturumlar & Workshoplar</h3>
                      </div>
                      <div className=' text-blue-800'>{day.praticalSubTitle}</div>
                      {day.practical.map((session, index) => (
                        <motion.div
                          key={`practical-${index}`}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className={`${getSessionStyle(session.type)} hover:shadow-md transition-shadow duration-300`}>
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                  {'time' in session && typeof session.time === 'string' && session.time && (
                                    <div className="flex items-center gap-4 mb-2">
                                      <div className="flex items-center text-blue-800">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span className="font-medium">{session.time}</span>
                                      </div>
                                    </div>
                                  )}
                                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                                    {session.title}
                                  </h3>

                                  {'speaker' in session && session.speaker && (
                                    <div className="flex items-center text-blue-700">
                                      <User className="w-4 h-4 mr-2" />
                                      <span>{session.speaker}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}




                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>


      </div>
    </section>
  );
}