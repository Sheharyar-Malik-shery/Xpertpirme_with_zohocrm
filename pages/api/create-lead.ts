// pages/api/zoho/create-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '@/lib/apiClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    console.log("formdate is",formData)
    const response = await apiClient.post('Leads', {
      data: [formData], // Zoho expects an array
    });
    console.log("Zoho response is",response);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Zoho API Error:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data?.message || "faild to create Lead" });
  }
}
