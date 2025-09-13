import React from 'react';
  import { Button } from './ui/button';
  import { Card } from './ui/card';
  import { Shield, Users, Clock, Award } from 'lucide-react';
  import LanguageToggle from './ui/LanguageToggle';
  import { useLanguage } from '../context/LanguageContext';

  // NOTE:
  // - Do NOT wrap this component with <LanguageProvider>.
  // - App should be wrapped once at the top level (App.jsx/main.jsx).
  // - All visible text uses t() with keys that exist in LanguageContext.jsx.

  const HeroSection = () => {
    const { t } = useLanguage();

    return (
      <section className="relative bg-gradient-to-br from-navy-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
                  {t('heroTitle')}
                  <span className="text-emerald-600 block">{t('heroSubtitle')}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('heroDescription')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium"
                >
                  {t('freeQuote')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy-300 text-navy-700 hover:bg-navy-50 px-8 py-3 text-lg"
                >
                  {t('learnMore')}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-navy-900">50k+</p>
                  <p className="text-sm text-gray-600">{t('happyCustomers')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-navy-900">15+</p>
                  <p className="text-sm text-gray-600">{t('yearsExperience')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-navy-900">24/7</p>
                  <p className="text-sm text-gray-600">{t('support')}</p>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-navy-900">100%</p>
                  <p className="text-sm text-gray-600">{t('trustworthy')}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards using existing keys */}
            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 rounded-lg p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{t('cashlessTreatment')}</h3>
                    <p className="text-gray-600">{t('prePostHospitalization')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500 rounded-lg p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{t('expertAdvice')}</h3>
                    <p className="text-gray-600">{t('experiencedAdvisors')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-600 rounded-lg p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{t('secureGuarantee')}</h3>
                    <p className="text-gray-600">{t('yourInfoSecure')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <LanguageToggle />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;