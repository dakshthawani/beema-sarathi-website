import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, MessageCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    insuranceType: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('thankYou') + ' ' + t('contactMessage'));
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-gray-100 relative overflow-hidden">
      {/* Background Accent Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                {t('ctaTitle')}
                <span className="text-cyan-400 block">{t('ctaSubtitle')}</span>
              </h2>
              <p className="text-lg text-gray-200">{t('ctaSubtitle')}</p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, bg: 'bg-cyan-600', title: t('secureGuarantee'), desc: t('yourInfoSecure') },
                { icon: Clock, bg: 'bg-blue-600', title: t('instantContact'), desc: t('callbackGuarantee') },
                { icon: Star, bg: 'bg-purple-600', title: t('expertAdvice'), desc: t('experiencedAdvisors') },
                { icon: MessageCircle, bg: 'bg-teal-600', title: t('freeConsultation'), desc: t('noHiddenFees') }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className={`${item.bg} rounded-full p-3 flex-shrink-0`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{item.title}</h4>
                    <p className="text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                {t('callNow')}
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('whatsappChat')}
              </Button>
            </div>
          </div>

          {/* Right Section - Form */}
          <Card className="p-8 bg-white shadow-xl border border-gray-200 rounded-xl">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{t('bookConsultation')}</h3>
                <p className="text-gray-700">{t('consultationDescription')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-medium text-gray-800">{t('fullName')} *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('yourName')}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1 border-gray-300 focus:border-cyan-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-medium text-gray-800">{t('mobileNumber')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1 border-gray-300 focus:border-cyan-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-medium text-gray-800">{t('emailAddress')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <Label htmlFor="insuranceType" className="font-medium text-gray-800">{t('insuranceType')} *</Label>
                  <Select onValueChange={(value) => handleInputChange('insuranceType', value)}>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-cyan-500">
                      <SelectValue placeholder={t('selectInsuranceType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">{t('health')}</SelectItem>
                      <SelectItem value="life">{t('life')}</SelectItem>
                      <SelectItem value="vehicle">{t('vehicle')}</SelectItem>
                      <SelectItem value="home">{t('home')}</SelectItem>
                      <SelectItem value="corporate">{t('corporate')}</SelectItem>
                      <SelectItem value="travel">{t('travel')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-medium text-gray-800">{t('additionalInfo')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('additionalInfoPlaceholder')}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-1 border-gray-300 focus:border-cyan-500 min-h-[100px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 text-lg font-medium flex items-center justify-center">
                  {t('bookConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">{t('privacyNote')}</p>
              </form>
            </div>
          </Card>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-2">
              <Shield className="h-10 w-10 text-cyan-400" />
              <h4 className="font-bold text-lg text-white">{t('cert1')}</h4>
              <p className="text-gray-200">{t('licenseNo')}: 12345678901234</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Star className="h-10 w-10 text-yellow-400" />
              <h4 className="font-bold text-lg text-white">99.2% {t('customerSatisfaction')}</h4>
              <p className="text-gray-200">50,000+ {t('happyCustomers')}</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-10 w-10 text-cyan-400" />
              <h4 className="font-bold text-lg text-white">24x7 {t('support')}</h4>
              <p className="text-gray-200">{t('instantSupport')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
