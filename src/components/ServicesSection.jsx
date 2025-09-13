import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Heart, Users, Car, Home, Building, ArrowRight, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Phone constants (display and link)
const PHONE_NUMBER = '+919314423576';
const PHONE_DISPLAY = '+91-9314423576';

// Static service metadata: styling and icon are static, text comes from t() via existing translation keys
const SERVICE_META = [
  {
    id: 'health',
    icon: Heart,
    bgColor: 'bg-emerald-50',
    iconColor: 'bg-emerald-600',
    borderColor: 'border-emerald-200',
    titleKey: 'healthInsurance',
    descriptionKey: 'healthDescription',
    featuresKeys: ['cashlessTreatment', 'prePostHospitalization', 'annualHealthCheckup'],
  },
  {
    id: 'life',
    icon: Users,
    bgColor: 'bg-navy-50',
    iconColor: 'bg-navy-600',
    borderColor: 'border-navy-200',
    titleKey: 'lifeInsurance',
    descriptionKey: 'lifeDescription',
    featuresKeys: ['termLife', 'endowmentPlan', 'childPlan'],
  },
  {
    id: 'vehicle',
    icon: Car,
    bgColor: 'bg-gold-50',
    iconColor: 'bg-gold-600',
    borderColor: 'border-gold-200',
    titleKey: 'vehicleInsurance',
    descriptionKey: 'vehicleDescription',
    featuresKeys: ['thirdParty', 'comprehensive', 'roadsideAssistance'],
  },
  {
    id: 'home',
    icon: Home,
    bgColor: 'bg-purple-50',
    iconColor: 'bg-purple-600',
    borderColor: 'border-purple-200',
    titleKey: 'homeInsurance',
    descriptionKey: 'homeDescription',
    featuresKeys: [], // no feature keys defined
  },
  {
    id: 'corporate',
    icon: Building,
    bgColor: 'bg-teal-50',
    iconColor: 'bg-teal-600',
    borderColor: 'border-teal-200',
    titleKey: 'corporateInsurance',
    descriptionKey: 'corporateDescription',
    featuresKeys: [], // no feature keys defined
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_META.map((service) => {
            const IconComponent = service.icon;
            const title = t(service.titleKey);
            const description = t(service.descriptionKey);

            // Map feature keys to translated values, filter out missing ones
            const features = service.featuresKeys
              .map((key) => t(key))
              .filter(Boolean);

            return (
              <Card
                key={service.id}
                className={`p-8 ${service.bgColor} ${service.borderColor} border-2 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="space-y-6">
                  <div
                    className={`${service.iconColor} rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                  </div>

                  {features.length > 0 && (
                    <ul className="space-y-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-navy-700 hover:text-emerald-600 group-hover:bg-white/50"
                  >
                    {t('learnMore')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-white border-emerald-200 border-2 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                {t('freeConsultation')}
              </Button>

              <Button variant="outline" size="lg" className="border-navy-300 text-navy-700 hover:bg-navy-50 px-8" asChild>
                <a href={`tel:${PHONE_NUMBER}`} aria-label={`${t('callNow')}: ${PHONE_DISPLAY}`}>
                  <span className="inline-flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    <span>{t('callNow')}: {PHONE_DISPLAY}</span>
                  </span>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
