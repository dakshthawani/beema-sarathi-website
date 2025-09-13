import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Shield, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // adjust path if needed

const TrustSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: '50,000+', label: t('satisfactionRate'), color: 'text-emerald-600' },
    { icon: Shield, number: '99.2%', label: t('claimSettlementRate'), color: 'text-navy-600' },
    { icon: Clock, number: '24/7', label: t('customerSupport'), color: 'text-gold-600' },
    { icon: TrendingUp, number: '15+', label: t('yearsExperience'), color: 'text-purple-600' }
  ];

const certifications = [
  { name: t('cert1'), icon: Shield },
  { name: t('cert2'), icon: CheckCircle },
  { name: t('cert3'), icon: TrendingUp }
];

const testimonials = [
  {
    name: t('testimonial1_name'),
    location: t('testimonial1_location'),
    rating: 5,
    text: t('testimonial1_text'),
    plan: t('health')
  },
  {
    name: t('testimonial2_name'),
    location: t('testimonial2_location'),
    rating: 5,
    text: t('testimonial2_text'),
    plan: t('life')
  },
  {
    name: t('testimonial3_name'),
    location: t('testimonial3_location'),
    rating: 5,
    text: t('testimonial3_text'),
    plan: t('vehicle')
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {t('whyChooseUs')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChooseDescription')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100">
                <div className={`${stat.color} bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-navy-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">{t('certifications')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Badge key={index} variant="outline" className="px-6 py-3 text-lg border-emerald-200 text-emerald-700">
                  <IconComponent className="h-5 w-5 mr-2" />
                  {cert.name}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">{t('testimonialsTitle')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-emerald-50 to-navy-50 border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    {testimonial.plan}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-navy-900 text-white max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-2">
                <Shield className="h-12 w-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold">{t('securePayment')}</h4>
                <p className="text-gray-300">{t('sslEncryption')}</p>
              </div>
              <div className="space-y-2">
                <CheckCircle className="h-12 w-12 text-gold-400 mx-auto" />
                <h4 className="text-xl font-bold">{t('guaranteedService')}</h4>
                <p className="text-gray-300">{t('trustedProcess')}</p>
              </div>
              <div className="space-y-2">
                <Clock className="h-12 w-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold">{t('instantSupport')}</h4>
                <p className="text-gray-300">{t('customerService247')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
