// pages/api/zoho/get-access-token.js

/**
 * Next.js API route to refresh Zoho CRM Access Token using a Refresh Token.
 * This route should be protected and only accessible by your server-side logic
 * or authenticated users if absolutely necessary (though generally, token refreshing
 * happens internally on the server).
 */
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function getAccessToken(req:NextApiRequest, res:NextApiResponse) {
  // Ensure this API route is only accessible via POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Retrieve credentials from environment variables
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  //const redirectUri = process.env.ZOHO_REDIRECT_URI; // Your registered redirect URI

  // Basic validation
  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Missing Zoho CRM API credentials in environment variables.');
    return res.status(500).json({ message: 'Server configuration error: Missing Zoho credentials.' });
  }

  try {
    // Zoho's OAuth token endpoint for refresh token
    const zohoTokenUrl = 'https://accounts.zoho.com/oauth/v2/token';

    const params = new URLSearchParams();
    params.append('refresh_token', refreshToken);
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    //params.append('redirect_uri', redirectUri);
    params.append('grant_type', 'refresh_token'); // This is the key for refreshing

    const response = await fetch(zohoTokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(), // Send URL-encoded form data
    });

    const data = await response.json();

    if (response.ok) {
      // Successfully obtained a new access token
      const newAccessToken = data.access_token;
      const expiresIn = data.expires_in; // Time in seconds until expiry

      console.log('Successfully obtained new Zoho CRM Access Token.');
      // console.log('New Access Token:', newAccessToken); // Do not log sensitive info in production
      // console.log('Expires In (seconds):', expiresIn);

      // In a real application, you would typically store this newAccessToken
      // in a secure, persistent storage (e.g., a database) associated with your Zoho integration.
      // For this example, we'll just return it.

      return res.status(200).json({
        accessToken: newAccessToken,
        expiresIn: expiresIn,
        message: 'Access token refreshed successfully.',
      });
    } else {
      // Handle errors from Zoho API
      console.error('Error refreshing Zoho CRM Access Token:', data);
      return res.status(response.status).json({
        message: 'Failed to refresh Zoho CRM Access Token.',
        details: data,
      });
    }
  } catch (error:any) {
    console.error('Server error during Zoho CRM Access Token refresh:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}