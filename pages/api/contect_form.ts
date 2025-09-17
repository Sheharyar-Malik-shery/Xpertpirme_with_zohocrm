// pages/api/test-db.js
import {connectToDatabase} from '../../lib/databaseConnection'; 
import { createResponse } from '@/lib/apiResponse';
import {STATUS_CODES} from "../../constents/index"
import type { NextApiRequest, NextApiResponse } from 'next';
import ContactForm from '../../models/contactForm';


export default async function ContectForm(req:NextApiRequest, res:NextApiResponse) {
    if (req.method !== 'POST') {
    return res
      .status(STATUS_CODES.METHOD_NOT_ALLOWED)
      .json(createResponse({ statusCode: STATUS_CODES.METHOD_NOT_ALLOWED, success: false, message: 'Method Not Allowed' }));
  }
  try {
    // const client = await clientPromise;
    await connectToDatabase();
    // const db = client.db(); // get default db or use db('your-db-name')
    // const collection = db.collection('formData');
    const formData = req.body;
       if (!formData || Object.keys(formData).length === 0) {
      return res.status(STATUS_CODES.BAD_REQUEST).json(createResponse({
        statusCode: STATUS_CODES.BAD_REQUEST,
        success: false,
        message: 'No form data received',
      }));
    }
    
    const hasEmptyField = Object.values(formData).some(
      (value) => value === undefined || value === null || value.toString().trim() === ''
    );

    if (hasEmptyField) {
      return res.status(STATUS_CODES.BAD_REQUEST).json(createResponse({
        statusCode: STATUS_CODES.BAD_REQUEST,
        success: false,
        message: 'ALl fields are required',
      }));
    }
    const savedForm = await ContactForm.create(formData);
    // let databsequery = await collection.insertOne(formData)

    return res.status(STATUS_CODES.CREATED).json(createResponse({ statusCode: STATUS_CODES.CREATED, message: 'Your Information Submitted Successfully', data: savedForm}))
  } catch (error:any) {
    console.log("The catch part is " , error)
     return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(createResponse({ statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR, message: error.message, data: null, error:error}))
    
  }
}
