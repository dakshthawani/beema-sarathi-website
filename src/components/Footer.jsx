import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-emerald-600 py-12">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">{t('getInsuranceUpdates')}</h3>
                <p className="text-emerald-100 text-lg">{t('latestInsuranceInfo')}</p>
              </div>
              <div className="flex gap-4">
                <Input 
                  placeholder={t('enterEmail')} 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6">
                  {t('subscribe')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold mb-4">
                  <span className="text-emerald-400">{t('companyName').split(' ')[0]}</span> {t('companyName').split(' ').slice(1).join(' ')}
                </div>
                <p className="text-gray-300 leading-relaxed">{t('companyDescription')}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>+91-9314423576</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>info@bimasarthi.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                  <span>{t('officeAddress')}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">{t('quickLinks')}</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('home')}</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('services')}</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('contact')}</a></li>
                <li><a href="#claims" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('claims')}</a></li>
                <li><a href="#dashboard" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('dashboard')}</a></li>
              </ul>
            </div>

            {/* Insurance Types */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">{t('insuranceTypes')}</h4>
              <ul className="space-y-3">
                <li><a href="#health" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('healthInsurance')}</a></li>
                <li><a href="#life" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('lifeInsurance')}</a></li>
                <li><a href="#vehicle" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('vehicleInsurance')}</a></li>
                <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('homeInsurance')}</a></li>
                <li><a href="#travel" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('travelInsurance')}</a></li>
                <li><a href="#corporate" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('corporateInsurance')}</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">{t('support')}</h4>
              <ul className="space-y-3 mb-6">
                <li><a href="#faq" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('faq')}</a></li>
                <li><a href="#privacy" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('privacyPolicy')}</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('terms')}</a></li>
                <li><a href="#grievance" className="text-gray-300 hover:text-emerald-400 transition-colors">{t('grievance')}</a></li>
              </ul>

              {/* Emergency Contact */}
              <Card className="p-4 bg-emerald-600 border-emerald-500">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-white" />
                  <div>
                    <p className="font-bold text-sm">{t('emergencySupport')}</p>
                    <p className="text-sm">{t('emergencyNumber')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 {t('companyName')}. {t('footerRights')} | IRDAI {t('licenseNo')} 12345678901234
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
