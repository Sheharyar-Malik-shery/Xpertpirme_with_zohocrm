// services/formApi.ts (frontend)
import apiClient from '../lib/apiClient';

// export const submitForm = async (formData: any) => {
//     console.log("Submitform api called...")
//   try {
//     const response = await apiClient.post('/api/contect_form', formData);
//     return response.data
//   } catch (error: any) {
//     console.error('API error:', error.message);
//     return {
//       success: false,
//       message: 'Network or server error',
//       error: error.message,
//     };
//   }
// };


//with axios 
// export const submitForm = async (formData: any) => {
//     console.log("Submitform api called...")
//   try {
//     const response = await apiClient.post('/api/create-lead', formData);
//     return response.data
//   } catch (error: any) {
//     console.error('API error:', error.message);
//     return {
//       success: false,
//       message: 'Network or server error',
//       error: error.message,
//     };
//   }
// };


//with fetch 
export const submitForm = async (formData: any) => {
  console.log("Submitform api called...");
  try {
    const response = await fetch('/api/create-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('API error:', error.message);
    return {
      success: false,
      message: 'Network or server error',
      error: error.message,
    };
  }
};
