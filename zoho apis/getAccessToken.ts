import axios from 'axios';

const ZOHO_AUTH_API = 'https://accounts.zoho.com/oauth/v2/token';
const clientId = process.env.ZOHO_CLIENT_ID;
const clientSecret = process.env.ZOHO_CLIENT_SECRET;
const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

export async function getNewAccessToken() {
  try {
      if (!clientId || !clientSecret || !refreshToken) {
          throw new Error('Missing environment variables for Zoho Auth');
      }
    const response = await axios.post(
      ZOHO_AUTH_API,
      new URLSearchParams({
        refresh_token: refreshToken!,
        client_id: clientId!,
        client_secret: clientSecret!,
        grant_type: 'refresh_token',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    // console.log("response is",response)
    return response.data.access_token;
  } catch (error: any) {
    console.error('Failed to refresh access token:', error.response?.data || error.message);
    throw new Error('Unable to get access token');
  }
}
