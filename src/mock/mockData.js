// Mock data for Bima Sarthi Insurance Website

// Insurance Plans Data
export const insurancePlans = {
  health: [
    {
      id: 'health-1',
      name: 'फैमिली हेल्थ प्लस',
      premium: '₹12,000/वर्ष',
      coverage: '₹5 लाख',
      features: ['कैशलेस उपचार', 'प्री-पोस्ट हॉस्पिटलाइजेशन', 'वार्षिक हेल्थ चेकअप', 'आयुष उपचार'],
      ageLimit: '18-65 वर्ष',
      popular: true
    },
    {
      id: 'health-2',
      name: 'सुपर हेल्थ गार्ड',
      premium: '₹18,000/वर्ष',
      coverage: '₹10 लाख',
      features: ['कैशलेस उपचार', 'मैटर्निटी कवर', 'न्यू बॉर्न कवर', 'क्रिटिकल इलनेस'],
      ageLimit: '18-70 वर्ष',
      popular: false
    }
  ],
  life: [
    {
      id: 'life-1',
      name: 'टर्म लाइफ प्रो',
      premium: '₹8,000/वर्ष',
      coverage: '₹50 लाख',
      features: ['एक्सीडेंटल डेथ बेनिफिट', 'टैक्स सेविंग', 'राइडर्स उपलब्ध', 'ऑनलाइन रिन्यूअल'],
      ageLimit: '18-60 वर्ष',
      popular: true
    },
    {
      id: 'life-2',
      name: 'होल लाइफ सेवर',
      premium: '₹15,000/वर्ष',
      coverage: '₹25 लाख',
      features: ['मैच्योरिटी बेनिफिट', 'बोनस सुविधा', 'लोन फैसिलिटी', 'फ्लेक्सिबल प्रीमियम'],
      ageLimit: '21-50 वर्ष',
      popular: false
    }
  ],
  vehicle: [
    {
      id: 'vehicle-1',
      name: 'कार कॉम्प्रिहेंसिव',
      premium: '₹6,500/वर्ष',
      coverage: 'IDV आधारित',
      features: ['थर्ड पार्टी कवर', 'ओन डैमेज', 'रोडसाइड असिस्टेंस', 'जीरो डेप्रिसिएशन'],
      ageLimit: 'सभी वाहन',
      popular: true
    },
    {
      id: 'vehicle-2',
      name: 'बाइक प्रोटेक्ट',
      premium: '₹2,800/वर्ष',
      coverage: 'IDV आधारित',
      features: ['थर्ड पार्टी कवर', 'चोरी का कवर', 'पर्सनल एक्सीडेंट', 'इंजन प्रोटेक्शन'],
      ageLimit: 'सभी दोपहिया',
      popular: false
    }
  ]
};

// Customer Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'राजेश शर्मा',
    location: 'दिल्ली',
    rating: 5,
    text: 'बीमा सारथि की सेवा वाकई उत्कृष्ट है। हमारे हेल्थ इंश्योरेंस का क्लेम सिर्फ 2 दिन में सेटल हो गया। पूरी टीम बहुत सहायक और जानकार है।',
    plan: 'हेल्थ इंश्योरेंस',
    image: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'प्रिया गुप्ता',
    location: 'मुंबई',
    rating: 5,
    text: 'जीवन बीमा लेने से पहले बहुत कन्फ्यूज थी, लेकिन बीमा सारथि की टीम ने सब कुछ बहुत अच्छे से समझाया। अब मैं पूरी तरह संतुष्ट हूं।',
    plan: 'लाइफ इंश्योरेंस',
    image: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'अमित कुमार',
    location: 'बेंगलुरु',
    rating: 5,
    text: 'कार एक्सीडेंट के बाद इंश्योरेंस क्लेम के समय इन लोगों ने पूरी मदद की। कागजी कार्रवाई से लेकर गैराज तक सब कुछ व्यवस्थित किया। बहुत ही प्रोफेशनल सर्विस।',
    plan: 'वाहन बीमा',
    image: '/api/placeholder/60/60'
  },
  {
    id: 4,
    name: 'सुनीता देवी',
    location: 'जयपुर',
    rating: 5,
    text: 'होम इंश्योरेंस की जरूरत थी और बीमा सारथि ने बहुत अच्छी पॉलिसी दी। प्रीमियम भी कम है और कवरेज भी अच्छी है।',
    plan: 'गृह बीमा',
    image: '/api/placeholder/60/60'
  }
];

// Company Statistics
export const companyStats = {
  happyCustomers: '50,000+',
  experienceYears: '15+',
  claimSettlementRate: '99.2%',
  supportHours: '24/7',
  policiesSold: '75,000+',
  partnersNetwork: '500+'
};

// FAQ Data
export const faqData = [
  {
    id: 1,
    question: 'बीमा क्लेम कैसे करें?',
    answer: 'बीमा क्लेम करने के लिए तुरंत हमारे हेल्पलाइन नंबर 1800-123-4567 पर कॉल करें या हमारी वेबसाइट पर क्लेम फॉर्म भरें। हमारी टीम आपकी पूरी सहायता करेगी।'
  },
  {
    id: 2,
    question: 'कितने दिन में क्लेम सेटल होता है?',
    answer: 'डॉक्यूमेंट्स कंप्लीट होने के बाद हमारे 90% क्लेम 7 दिन के अंदर सेटल हो जाते हैं। इमरजेंसी केसेस में 24-48 घंटे में भी क्लेम अप्रूव हो सकता है।'
  },
  {
    id: 3,
    question: 'प्रीमियम कैसे भरा जा सकता है?',
    answer: 'आप ऑनलाइन, चेक, DD, NEFT या हमारे ऑफिस में कैश के द्वारा प्रीमियम भर सकते हैं। ऑटो डेबिट की सुविधा भी उपलब्ध है।'
  },
  {
    id: 4,
    question: 'पॉलिसी कैंसिलेशन की क्या प्रक्रिया है?',
    answer: 'पॉलिसी कैंसिलेशन के लिए लिखित में आवेदन देना होता है। कुछ शर्तों के साथ सरेंडर वैल्यू भी मिल सकती है। पूरी जानकारी के लिए हमसे संपर्क करें।'
  }
];

// Contact Information
export const contactInfo = {
  phone: '+91-9314423576',
  email: 'info@bimasarthi.com',
  address: '123 बीमा भवन, कनॉट प्लेस, नई दिल्ली - 110001',
  emergencyHelpline: '1800-123-4567',
  whatsapp: '+91-9314423576',
  officeHours: 'सोमवार - शनिवार: 9:00 AM - 7:00 PM',
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#'
  }
};

// Form submission mock function
export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({
        success: true,
        message: 'धन्यवाद! हमारी टीम 24 घंटे में आपसे संपर्क करेगी।',
        ticketId: 'BS' + Date.now()
      });
    }, 1000);
  });
};

// Quote calculation mock function
export const calculateQuote = async (quoteData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const basePrice = {
        health: 12000,
        life: 8000,
        vehicle: 6500,
        home: 4500
      };
      
      const estimatedPremium = basePrice[quoteData.insuranceType] || 10000;
      
      resolve({
        success: true,
        premium: estimatedPremium,
        coverage: quoteData.insuranceType === 'health' ? '₹5 लाख' : 
                 quoteData.insuranceType === 'life' ? '₹50 लाख' : 
                 quoteData.insuranceType === 'vehicle' ? 'IDV आधारित' : '₹25 लाख',
        features: insurancePlans[quoteData.insuranceType]?.[0]?.features || [],
        validTill: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('hi-IN')
      });
    }, 1500);
  });
};