import axios from 'axios';

export const BASE_ENDPOINT = `${process.env.REACT_APP_BASE_ENDPOINT}`;
// export const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}`;

// when developing locally, change this value to local
export const APP_ENVIRONMENT = 'development';

// if (APP_ENVIRONMENT === 'local') {
//   BASE_ENDPOINT = 'http://localhost:5001';
// } else if (APP_ENVIRONMENT === 'development') {
//   BASE_ENDPOINT = 'http://localhost:5001';
//   // BASE_ENDPOINT = 'https://api.dev.<your-backend-domain>';
// } else if (APP_ENVIRONMENT === 'staging') {
//   BASE_ENDPOINT = 'https://api.stg.<your-backend-domain>';
// } else if (APP_ENVIRONMENT === 'production') {
//   BASE_ENDPOINT = 'https://api.<your-backend-domain>';
// }

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});
