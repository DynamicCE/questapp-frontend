import axios from 'axios';
// API'nin temel URL'sini burada tanımla
export const API_BASE_URL = 'http://localhost:8080/api'; // Veya backend API'nizin gerçek URL'si

// Diğer konfigürasyon değişkenlerini buraya ekleyebili
export const APP_NAME = 'QuestApp';

// Axios için varsayılan başlıkları ayarlayan bir yardımcı fonksiyon
export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Diğer konfigürasyon fonksiyonları veya sabitler...