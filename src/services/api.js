import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API Service Functions
export const apiService = {
  // Health Check
  async healthCheck() {
    try {
      const response = await apiClient.get('/health');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Contact Management
  async submitContact(contactData) {
    try {
      const response = await apiClient.post('/contacts/', contactData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  async getContacts(skip = 0, limit = 100) {
    try {
      const response = await apiClient.get(`/contacts/?skip=${skip}&limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  // Quote Generation
  async generateQuote(quoteData) {
    try {
      const response = await apiClient.post('/quotes/', quoteData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  async getRecommendedPlans(insuranceType, limit = 3) {
    try {
      const response = await apiClient.get(`/quotes/recommended/${insuranceType}?limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  // Insurance Plans
  async getInsurancePlans(planType) {
    try {
      const response = await apiClient.get(`/insurance-plans/${planType}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  async getAllInsurancePlans() {
    try {
      const response = await apiClient.get('/insurance-plans/');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  // Testimonials
  async getTestimonials(approvedOnly = true, limit = 10) {
    try {
      const response = await apiClient.get(`/testimonials/?approved_only=${approvedOnly}&limit=${limit}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  async createTestimonial(testimonialData) {
    try {
      const response = await apiClient.post('/testimonials/', testimonialData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  // Statistics
  async getCompanyStats() {
    try {
      const response = await apiClient.get('/stats/company');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  },

  async getDashboardStats() {
    try {
      const response = await apiClient.get('/stats/dashboard');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || error.message 
      };
    }
  }
};

// Legacy mock data fallbacks for development
export const mockFallbacks = {
  async submitContactForm(formData) {
    console.warn('🔄 Using mock fallback for contact submission');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you! Our team will contact you within 24 hours.',
          ticketId: 'BS' + Date.now()
        });
      }, 1000);
    });
  },

  async calculateQuote(quoteData) {
    console.warn('🔄 Using mock fallback for quote calculation');
    const basePrice = {
      health: 12000,
      life: 8000,
      vehicle: 6500,
      home: 4500,
      corporate: 25000,
      travel: 2500
    };
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const estimatedPremium = basePrice[quoteData.insuranceType] || 10000;
        
        resolve({
          success: true,
          premium: estimatedPremium,
          coverage: quoteData.insuranceType === 'health' ? '₹5 Lakh' : 
                   quoteData.insuranceType === 'life' ? '₹50 Lakh' : 
                   quoteData.insuranceType === 'vehicle' ? 'IDV Based' : '₹25 Lakh',
          features: ['Comprehensive Coverage', 'Quick Claim Settlement', '24x7 Support'],
          validTill: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
        });
      }, 1500);
    });
  }
};

export default apiService;