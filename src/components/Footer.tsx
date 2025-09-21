import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <a href="mailto:pulpa1sempozyum@gmail.com" >pulpa1sempozyum@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <a href="tel:+905527045615" className="text-white-300 underline">
                  +90 552 704 56 15
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-300 mt-1" />
                <span>Haliç Park Hotel
                  <br /> Mithatpaşa, 15 Eylül Cd. No:68, 10405 <br />Ayvalık/Balıkesir</span>
              </div>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">Hakkında</a></li>
              <li><a href="#speakers" className="text-blue-200 hover:text-white transition-colors">Konuşmacılar</a></li>
              <li><a href="#program" className="text-blue-200 hover:text-white transition-colors">Program</a></li>
              <li><a href="#location" className="text-blue-200 hover:text-white transition-colors">Konum</a></li>
              <li><a href="#registration" className="text-blue-200 hover:text-white transition-colors">Kayıt</a></li>
            </ul>
          </motion.div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Önemli Tarihler</h3>
            <div className="space-y-3">
              <div>
                <p className="text-blue-300 text-sm">Son Kayıt Tarihi</p>
                <p className="font-medium">9 Ekim 2025</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Kongre Tarihleri</p>
                <p className="font-medium">10-11-12 Ekim 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Sosyal Medya</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/pulpacademy/" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>

            </div>

          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-blue-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-200">
                © PulpaAcademy Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Kullanım Koşulları
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}