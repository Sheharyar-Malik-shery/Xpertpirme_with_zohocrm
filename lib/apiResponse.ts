// lib/apiResponse.ts

export interface ApiResponseOptions {
  statusCode?: number;
  message?: string;
  success?: boolean;
  data?: any;
  error?: any;
}

export function createResponse({
  statusCode = 200,
  message = 'OK',
  success = true,
  data = null,
  error = null,
}: ApiResponseOptions) {
  return {
    statusCode,
    success,
    message,
    data,
    error,
  };
}
