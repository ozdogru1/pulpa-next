import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';
import { Check, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tc: '',
    phone: '',
    paymentMethod: '',
    invoiceAddress: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error('Lütfen kullanım koşullarını kabul edin.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Kaydınız başarıyla alındı! Detaylar e-posta adresinize gönderilecek.');
    setIsSubmitting(false);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      tc: '',
      phone: '',
      paymentMethod: '',
      invoiceAddress: '',
      acceptTerms: false,
    });
  };

  const registrationTypes = [
    { value: 'triple-room', label: 'Üç kişilik oda - 10.000 TL', discount: true },
    { value: 'double-room', label: 'İki kişilik oda - 14.000 TL', discount: true },
    { value: 'single-room', label: 'Tek kişilik oda - 18.000 TL', discount: true },
  ];
  const paymentMethods: { value: string; label: string }[] = [
    { value: 'havale', label: 'Havale/EFT' },
    { value: 'kredi-karti', label: 'Kredi Kartı' },
    { value: 'nakit', label: 'Nakit' },
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
                    <li>• Öğle yemekleri</li>
                    <li>• Kongre materyalleri</li>
                    <li>• Sertifika</li>
                    <li>• Networking kokteyli</li>
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
                    <Label htmlFor="tc">TC Kimlik No *</Label>
                    <Input
                      id="tc"
                      value={formData.tc}
                      onChange={(e) => setFormData({ ...formData, tc: e.target.value })}
                      required
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
                      value={formData.invoiceAddress}
                      onChange={(e) => setFormData({ ...formData, invoiceAddress: e.target.value })}
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? 'Kaydınız İşleniyor...' : 'Kayıt Ol'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}