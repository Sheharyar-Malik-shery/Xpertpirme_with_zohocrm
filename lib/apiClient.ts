// lib/apiClient.ts
import axios from 'axios';
import { BASE_API_URL } from '../constents/index';
import { getNewAccessToken } from '../zoho apis/getAccessToken';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Add interceptor to inject token before each request
apiClient.interceptors.request.use(async (config) => {
  const accessToken = await getNewAccessToken();
  console.log("The access Token is",accessToken)
  // Safe way to set headers using AxiosHeaders interface
  if (config.headers && typeof config.headers.set === 'function') {
    config.headers.set('Authorization', `Zoho-oauthtoken ${accessToken}`);
  } else if (config.headers) {
    // TypeScript fallback (may still show error in strict mode)
    (config.headers as any)['Authorization'] = `Zoho-oauthtoken ${accessToken}`;
  }

  return config;
});

export default apiClient;
