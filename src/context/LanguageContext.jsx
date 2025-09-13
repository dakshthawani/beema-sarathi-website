import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Header
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact",
    dashboard: "Dashboard",
    getQuote: "Get Quote",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    
    // Hero Section
    heroTitle: "Your Trusted",
    heroSubtitle: "Insurance Partner",
    heroDescription: "Comprehensive insurance solutions for life's uncertainties. Secure your family's future with us.",
    freeQuote: "Get Free Quote",
    learnMore: "Learn More",
    
    // Trust Indicators
    happyCustomers: "Happy Customers",
    yearsExperience: "Years Experience",
    support: "Support",
    trustworthy: "Trustworthy",
    
    // Services
    servicesTitle: "Our Services",
    servicesDescription: "Specialized insurance solutions for all your needs. Trusted service with quick claim settlement.",
    
    healthInsurance: "Health Insurance",
    healthDescription: "Comprehensive health insurance coverage for families. Cashless treatment and 24x7 support.",
    
    lifeInsurance: "Life Insurance",
    lifeDescription: "Various life insurance plans to secure your family's future.",
    
    vehicleInsurance: "Vehicle Insurance", 
    vehicleDescription: "Comprehensive insurance coverage for cars, bikes and commercial vehicles.",
    
    homeInsurance: "Home Insurance",
    homeDescription: "Comprehensive home insurance policy to protect your home and belongings.",
    
    corporateInsurance: "Corporate Insurance",
    corporateDescription: "Special corporate insurance solutions to protect against business risks.",
    
  // Certifications
  cert1: "IRDAI Approved",
  cert2: "ISO 9001:2015 Certified",
  cert3: "Digital India Partner",
  
  // Testimonials
  testimonial1_name: "Rajesh Sharma",
  testimonial1_location: "Delhi",
  testimonial1_text: "Bima Sarthi's service is truly excellent. The claim settlement was very fast. The entire team is very helpful.",
  
  testimonial2_name: "Priya Gupta",
  testimonial2_location: "Mumbai",
  testimonial2_text: "I was confused before taking life insurance, but their team explained everything. I am very happy.",
  
  testimonial3_name: "Amit Kumar",
  testimonial3_location: "Bengaluru",
  testimonial3_text: "During the car insurance claim, they helped completely. Very professional service.",


    // Features
    cashlessTreatment: "Cashless Treatment",
    prePostHospitalization: "Pre & Post Hospitalization",
    annualHealthCheckup: "Annual Health Checkup",
    
    termLife: "Term Life Insurance",
    endowmentPlan: "Endowment Plan",
    childPlan: "Child Plan",
    
    thirdParty: "Third Party Cover",
    comprehensive: "Comprehensive Cover",
    roadsideAssistance: "Roadside Assistance",
    
    // CTA Section
    ctaTitle: "Secure Your Future Today",
    ctaSubtitle: "Book a free consultation in just 2 minutes and get the best insurance plan.",
    secureGuarantee: "100% Secure",
    yourInfoSecure: "Your information is completely secure",
    instantContact: "Instant Contact", 
    callbackGuarantee: "24-hour callback guarantee",
    expertAdvice: "Expert Advice",
    experiencedAdvisors: "15+ years experienced advisors",
    freeConsultation: "Free Consultation",
    noHiddenFees: "No hidden fees",
    callNow: "Call Now",
    whatsappChat: "WhatsApp Chat",
    
    // Form
    bookConsultation: "Book Free Consultation",
    consultationDescription: "Our insurance experts will contact you within 24 hours",
    fullName: "Full Name",
    yourName: "Your Name",
    mobileNumber: "Mobile Number",
    emailAddress: "Email Address",
    insuranceType: "Insurance Type",
    selectInsuranceType: "Select Insurance Type",
    additionalInfo: "Additional Information",
    additionalInfoPlaceholder: "Your specific requirements or questions...",
    
    // Insurance Types
    health: "Health Insurance",
    life: "Life Insurance", 
    vehicle: "Vehicle Insurance",
    home: "Home Insurance",
    corporate: "Corporate Insurance",
    travel: "Travel Insurance",
    
    // Trust Section
    whyChooseUs: "Why Choose Bima Sarthi?",
    whyChooseDescription: "With 15 years of experience and 50,000+ happy customers, we are India's most trusted insurance advisors.",
    
    satisfactionRate: "Customer Satisfaction",
    claimSettlementRate: "Claim Settlement Rate",
    customerSupport: "Customer Support",
    
    // Testimonials
    testimonialsTitle: "What Our Customers Say",

  customerSatisfaction: "Customer Satisfaction",
  instantSupport: "Instant Support",
  licenseNo: "License No:",
  whatsappChat: "WhatsApp",
  privacyNote: "We respect your privacy. Your information will not be shared.",

    // Footer
    getInsuranceUpdates: "Get Insurance Updates",
    latestInsuranceInfo: "Be the first to know about the latest insurance plans and offers.",
    subscribe: "Subscribe",
    enterEmail: "Enter your email address",
    quickLinks: "Quick Links",
    insuranceTypes: "Insurance Types",
    support: "Support",
    faq: "FAQ",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    grievance: "File Complaint",
    emergencySupport: "Emergency Support",
    emergencyNumber: "24x7: 1800-123-4567",
    getUpdates: "Get Updates",

    // Quick Links
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    contact: "Contact",
    claims: "Claims",
    dashboard: "Dashboard",

    // Insurance Types
    healthInsurance: "Health Insurance",
    lifeInsurance: "Life Insurance",
    vehicleInsurance: "Vehicle Insurance",
    homeInsurance: "Home Insurance",
    travelInsurance: "Travel Insurance",
    corporateInsurance: "Corporate Insurance",

    // Emergency Help
    emergencyHelp: "Emergency Help",

    // Company Info
    companyName: "Bima Sarthi",
    companyTagline: "Your Trusted Insurance Partner",
    companyDescription: "Your trusted partner serving Indian families' insurance needs for 15 years.",
    footerRights: "All rights reserved.",
    officeAddress: "123 Bima Bhavan, Connaught Place, New Delhi - 110001",

    // License
    licenseNo: "License No:"
  },
  
  hi: {
    // Header
    home: "होम",
    services: "सेवाएं", 
    about: "हमारे बारे में",
    contact: "संपर्क",
    dashboard: "डैशबोर्ड",
    getQuote: "कोटेशन प्राप्त करें",
    facebook: "फेसबुक",
    twitter: "ट्विटर",
    linkedin: "लिंक्डइन",
    
    // Hero Section
    heroTitle: "आपका भरोसेमंद",
    heroSubtitle: "बीमा सारथि",
    heroDescription: "जीवन की अनिश्चितताओं से सुरक्षा के लिए सबसे बेहतर बीमा समाधान। हमारे साथ अपने परिवार का भविष्य सुरक्षित करें।",
    freeQuote: "फ्री कोटेशन पाएं",
    learnMore: "और जानें",
    
    // Trust Indicators  
    happyCustomers: "खुश ग्राहक",
    yearsExperience: "साल का अनुभव",
    support: "सहायता", 
    trustworthy: "भरोसेमंद",
    
    // Services
    servicesTitle: "हमारी सेवाएं",
    servicesDescription: "आपकी हर जरूरत के लिए विशेष बीमा समाधान। भरोसेमंद सेवा और त्वरित क्लेम सेटलमेंट के साथ।",
    
    healthInsurance: "स्वास्थ्य बीमा",
    healthDescription: "परिवार के लिए व्यापक स्वास्थ्य बीमा कवरेज। कैशलेस उपचार और 24x7 सहायता।",
    
    lifeInsurance: "जीवन बीमा", 
    lifeDescription: "आपके परिवार के भविष्य की सुरक्षा के लिए विभिन्न जीवन बीमा योजनाएं।",
    
    vehicleInsurance: "वाहन बीमा",
    vehicleDescription: "कार, बाइक और कमर्शियल वाहनों के लिए व्यापक बीमा कवरेज।",
    
    homeInsurance: "गृह बीमा",
    homeDescription: "आपके घर और सामान की सुरक्षा के लिए व्यापक होम इंश्योरेंस पॉलिसी।",
    
    corporateInsurance: "कॉर्पोरेट बीमा", 
    corporateDescription: "व्यापारिक जोखिमों से सुरक्षा के लिए विशेष कॉर्पोरेट बीमा समाधान।",
    
      // Certifications
  cert1: "IRDAI मान्यता प्राप्त",
  cert2: "ISO 9001:2015 प्रमाणित",
  cert3: "डिजिटल इंडिया पार्टनर",
  
  // Testimonials
  testimonial1_name: "राजेश शर्मा",
  testimonial1_location: "दिल्ली",
  testimonial1_text: "बीमा सारथि की सेवा वाकई उत्कृष्ट है। क्लेम सेटलमेंट बहुत जल्दी हो गया। पूरी टीम बहुत सहायक है।",
  
  testimonial2_name: "प्रिया गुप्ता",
  testimonial2_location: "मुंबई",
  testimonial2_text: "जीवन बीमा लेने से पहले बहुत कन्फ्यूज थी, लेकिन इनकी टीम ने सब कुछ समझाया। बहुत खुश हूं।",
  
  testimonial3_name: "अमित कुमार",
  testimonial3_location: "बेंगलुरु",
  testimonial3_text: "कार इंश्योरेंस क्लेम के समय इन लोगों ने पूरी मदद की। बहुत ही प्रोफेशनल सर्विस मिली।",

    // Features
    cashlessTreatment: "कैशलेस उपचार",
    prePostHospitalization: "प्री और पोस्ट हॉस्पिटलाइजेशन", 
    annualHealthCheckup: "वार्षिक हेल्थ चेकअप",
    
    termLife: "टर्म लाइफ इंश्योरेंस",
    endowmentPlan: "एंडोमेंट प्लान",
    childPlan: "चाइल्ड प्लान",
    
    thirdParty: "थर्ड पार्टी कवर",
    comprehensive: "कॉम्प्रिहेंसिव कवर", 
    roadsideAssistance: "रोडसाइड असिस्टेंस",
    
    // CTA Section
    ctaTitle: "आज ही सुरक्षित करें अपना भविष्य",
    ctaSubtitle: "सिर्फ 2 मिनट में फ्री कंसल्टेशन बुक करें और पाएं सबसे बेहतर बीमा प्लान।",
    secureGuarantee: "100% सुरक्षित",
    yourInfoSecure: "आपकी जानकारी पूर्णतः सुरक्षित",
    instantContact: "तुरंत संपर्क",
    callbackGuarantee: "24 घंटे में कॉलबैक गारंटी", 
    expertAdvice: "विशेषज्ञ सलाह",
    experiencedAdvisors: "15+ साल के अनुभवी एडवाइजर",
    freeConsultation: "फ्री कंसल्टेशन",
    noHiddenFees: "कोई छुपी हुई फीस नहीं",
    callNow: "तुरंत कॉल करें",
    whatsappChat: "WhatsApp चैट",
    
    // Form
    bookConsultation: "फ्री कंसल्टेशन बुक करें",
    consultationDescription: "हमारे बीमा विशेषज्ञ आपसे 24 घंटे में संपर्क करेंगे",
    fullName: "पूरा नाम",
    yourName: "आपका नाम",
    mobileNumber: "मोबाइल नंबर",
    emailAddress: "ईमेल पता", 
    insuranceType: "बीमा प्रकार",
    selectInsuranceType: "बीमा प्रकार चुनें",
    additionalInfo: "अतिरिक्त जानकारी",
    additionalInfoPlaceholder: "आपकी कोई विशेष आवश्यकता या प्रश्न...",
    
    // Insurance Types
    health: "स्वास्थ्य बीमा",
    life: "जीवन बीमा",
    vehicle: "वाहन बीमा", 
    home: "गृह बीमा",
    corporate: "कॉर्पोरेट बीमा",
    travel: "यात्रा बीमा",
    
    // Trust Section
    whyChooseUs: "क्यों चुनें बीमा सारथि?",
    whyChooseDescription: "15 साल के अनुभव और 50,000+ खुश ग्राहकों के साथ, हम भारत के सबसे भरोसेमंद बीमा सलाहकार हैं।",
    
    satisfactionRate: "ग्राहक संतुष्टि",
    claimSettlementRate: "क्लेम सेटलमेंट रेट",
    customerSupport: "ग्राहक सहायता",
    
    // Testimonials
    testimonialsTitle: "हमारे ग्राहक क्या कहते हैं",
    
  customerSatisfaction: "ग्राहक संतोष",
  instantSupport: "तुरंत सहायता",
  licenseNo: "लाइसेंस संख्या:",
  whatsappChat: "व्हाट्सएप",
  privacyNote: "हम आपकी गोपनीयता का सम्मान करते हैं। आपकी जानकारी साझा नहीं की जाएगी।",


    // Footer
    getInsuranceUpdates: "बीमा अपडेट पाएं",
    latestInsuranceInfo: "नवीनतम बीमा योजनाओं और ऑफर्स की जानकारी सबसे पहले पाएं।",
    subscribe: "सब्सक्राइब करें",
    enterEmail: "आपका ईमेल पता",
    quickLinks: "त्वरित लिंक",
    insuranceTypes: "बीमा प्रकार",
    support: "सहायता",
    faq: "सामान्य प्रश्न",
    privacyPolicy: "प्राइवेसी पॉलिसी",
    terms: "नियम और शर्तें",
    grievance: "शिकायत दर्ज करें",
    emergencySupport: "आपातकालीन सहायता",
    emergencyNumber: "24x7: 1800-123-4567",
    getUpdates: "अपडेट पाएं",

    // Quick Links
    home: "होम",
    aboutUs: "हमारे बारे में",
    services: "सेवाएं",
    contact: "संपर्क",
    claims: "क्लेम करें",
    dashboard: "डैशबोर्ड",

    // Insurance Types
    healthInsurance: "स्वास्थ्य बीमा",
    lifeInsurance: "जीवन बीमा",
    vehicleInsurance: "वाहन बीमा",
    homeInsurance: "गृह बीमा",
    travelInsurance: "यात्रा बीमा",
    corporateInsurance: "कॉर्पोरेट बीमा",

    // Emergency Help
    emergencyHelp: "आपातकालीन सहायता",

    // Company Info
    companyName: "बीमा सारथि",
    companyTagline: "आपका भरोसेमंद बीमा साथी",
    companyDescription: "15 साल से भारतीय परिवारों की बीमा जरूरतों को पूरा करने वाली आपकी भरोसेमंद साथी।",
    footerRights: "सभी अधिकार सुरक्षित।",
    officeAddress: "123 बीमा भवन, कनॉट प्लेस, नई दिल्ली - 110001",

    // License
    licenseNo: "लाइसेंस संख्या:"
  }
};

const STORAGE_KEY = 'language';

export const LanguageProvider = ({ children }) => {
  // Initialize from localStorage (safe for SSR/No-Window)
  const [language, setLanguage] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'hi') return saved;
      }
    } catch {
      // ignore storage access issues
    }
    return 'en'; // default
  });

  // Persist selection
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, language);
      }
    } catch {
      // ignore storage write issues
    }
  }, [language]);

  const isEnglish = language === 'en';
  const isHindi = language === 'hi';

  // Stable translator function that rebinds when language changes
  const t = useMemo(() => {
    const dict = translations[language] ?? translations.en;
    return (key) => (key in dict ? dict[key] : key);
  }, [language]);

  // Stable callbacks
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  }, []);

  const setLanguageDirectly = useCallback((lang) => {
    if (lang === 'en' || lang === 'hi') {
      setLanguage(lang);
    }
  }, []);

  // Memoized value so consumers only re-render when something relevant changes
  const value = useMemo(
    () => ({
      language,
      isEnglish,
      isHindi,
      t,
      toggleLanguage,
      setLanguage: setLanguageDirectly,
    }),
    [language, isEnglish, isHindi, t, toggleLanguage, setLanguageDirectly]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};