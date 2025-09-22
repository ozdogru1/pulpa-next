import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';
import { Check, User, Mail, Phone, MapPin, Calendar, CreditCard, PhoneCall, PhoneIcon, Copy, CheckCircle } from 'lucide-react';

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tckn: '',
    phone: '',
    paymentMethod: '',
    billingAddress: '',
    acceptTerms: false,
    practicalTraining: false,
    registrationDate: new Date().toLocaleString('tr-TR'),
  });
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedIban, setCopiedIban] = useState(false);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGW8gI-WRAyA-WUAJ8BqOE9k2R2MCwt850Jc5seHBaIyJlmPJOrWI9A6uJSVwHIVbtvg/exec'
  const copyIbanToClipboard = async () => {
    const iban = 'TR68 0006 2000 0010 0006 8757 25';
    const numbersOnly = iban.replace('TR', '').replace(/\s/g, ''); // Remove TR prefix and spaces
    try {
      await navigator.clipboard.writeText(numbersOnly);
      setCopiedIban(true);
      toast.success('IBAN numarası kopyalandı!');
      setTimeout(() => setCopiedIban(false), 2000);
    } catch (err) {
      toast.error('Kopyalama başarısız oldu');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error("Lütfen kullanım koşullarını kabul edin.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Apps Script ile uyumlu payload
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        tckn: formData.tckn,
        phone: formData.phone,
        paymentMethod: formData.paymentMethod,
        billingAddress: formData.billingAddress,
        practicalTraining: formData.practicalTraining ? 'Evet' : 'Hayır',
        registrationDate: new Date().toLocaleString("tr-TR"),
      };

      console.log('Gönderilen veri:', payload);

      // FormData oluştur
      const fd = new FormData();
      Object.entries(payload).forEach(([k, v]) =>
        fd.append(k, String(v ?? ""))
      );

      // FormData ile istek gönder
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: fd,
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      // Response tipini kontrol et
      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      console.log('Response result:', result);

      if (response.ok) {
        // Başarılı response'da ek bilgiler göster
        if (result.success && result.rowNumber) {
          toast.success(`Kayıt başarılı! Ödeme sayfasına yönlendiriliyorsunuz...`, {
            duration: 1500,
          });

          // 3 saniye sonra ödeme sayfasına yönlendir
          setTimeout(() => {
            window.location.href = "https://dtpay.tr/tr/express/Pulpa-Academy";
          }, 1500);
        } else {
          toast.success("Kaydınız başarılı! Ödeme sayfasına yönlendiriliyorsunuz...", {
            duration: 1500,
          });

          // 3 saniye sonra ödeme sayfasına yönlendir
          setTimeout(() => {
            window.location.href = "https://dtpay.tr/tr/express/Pulpa-Academy";
          }, 3000);
        }

        // Formu temizle
        setFormData({
          firstName: "",
          lastName: "",
          tckn: "",
          phone: "",
          paymentMethod: "",
          billingAddress: "",
          acceptTerms: false,
          practicalTraining: false,
          registrationDate: new Date().toLocaleString('tr-TR'),
        });
      } else {
        toast.error(`Kayıt gönderilemedi (${response.status}): ${JSON.stringify(result)}`);
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      toast.error("Bir hata oluştu: " + (err.message ?? err));
    } finally {
      setIsSubmitting(false);
    }
  };


  const registrationTypes = [
    { value: 'no-room', label: 'Sadece akademik oturumlara erişim (Konaklamasız) 8.000 TL', discount: true },
    { value: 'triple-room', label: 'Üç kişilik oda - 10.000 TL', discount: true },
    { value: 'double-room', label: 'İki kişilik oda - 14.000 TL', discount: true },
    { value: 'single-room', label: 'Tek kişilik oda - 18.000 TL', discount: true },
  ];
  const paymentMethods: { value: string; label: string }[] = [
    { value: 'havale', label: 'Havale/EFT' },
    { value: 'kredi-karti', label: 'Kredi Kartı' },
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Kayıt Ol
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Bu özel etkinliğe şimdi katılın
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Types */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-fit bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Kayıt Türleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {registrationTypes.map((type, index) => (
                  <div
                    key={type.value}
                    className={`p-4 rounded-lg border-2 ${type.discount
                      ? 'border-green-200 bg-green-50'
                      : 'border-blue-200 bg-blue-50'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-900">{type.label}</p>
                        {type.discount && (
                          <p className="text-green-600 text-sm">Kişi başı fiyat</p>
                        )}
                      </div>
                      {type.discount && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-blue-600 text-white rounded-lg">
                  <h4 className="font-bold mb-2">Kayıt Dahil Olanlar:</h4>
                  <ul className="text-sm space-y-1 text-blue-100">
                    <li>• Tüm oturumlara katılım</li>
                    <li>• Kahve ve çay servisleri</li>
                    <li>• Sabah Kahvaltısı, Öğle ve Akşam yemekleri</li>
                    <li>• Kongre materyalleri</li>
                    <li>• Sertifika</li>
                    <li>• Networking alanı</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Kayıt Formu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">İsim *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Soyisim *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required

                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="tckn">TC Kimlik No *</Label>
                    <Input
                      id="tckn"
                      value={formData.tckn}
                      onChange={(e) => setFormData({ ...formData, tckn: e.target.value })}
                      required
                      maxLength={11}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon Numarası *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="paymentMethod">Ödeme Yöntemi *</Label>
                    <Select onValueChange={(value: string) => setFormData({ ...formData, paymentMethod: value })} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Ödeme yönteminizi seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((method: { value: string; label: string }, index: number) => (
                          <SelectItem key={method.value} value={method.value}>
                            {method.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="invoiceAddress">Fatura Adresi *</Label>
                    <Textarea
                      id="invoiceAddress"
                      value={formData.billingAddress}
                      onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
                      required
                      className="mt-1"
                      placeholder="Açık adresinizi giriniz"
                    />
                  </div>
                  <div className="flex items-start space-x-2 p-4 bg-blue-50 rounded-lg">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked: boolean) => setFormData({ ...formData, acceptTerms: checked })}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-blue-800 leading-relaxed">
                      Kişisel Verilerin Korunması kapsamında verilerimin işlenmesini ve kullanım koşullarını kabul ediyorum.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? 'Kaydınız İşleniyor...' : 'Kayıt Ol '}
                  </Button>
                  <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-blue-700 text-sm mt-2'>
                    <a href="tel:+905527045615" className="flex items-center gap-2 text-white-300 underline">
                    <PhoneIcon className="w-5 h-5"/>  +90 552 704 56 15
                    </a>
                    <span className='flex items-center gap-2'>
                        <User className="w-5 h-5"/>
                    <p>Yunus Emre Diköz</p>
                    </span>
                    <span className='flex items-center gap-2 cursor-pointer hover:bg-blue-800 p-2 rounded transition-colors' onClick={copyIbanToClipboard}>
                      {copiedIban ? <CheckCircle className="w-5 h-5 text-green-400"/> : <CreditCard className="w-5 h-5"/>}
                      TR68 0006 2000 0010 0006 8757 25
                    </span>
                    <span className='text-blue-700 '>İbanı kopyalamak için üzerine tıklayınız</span>
                  </div>
                  <div className='text-center text-blue-700 text-sm mt-2'>
                    Kayıt oluşturulduktan sonra otomatik olarak ödeme sayfasına yönlendirileceksiniz
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
