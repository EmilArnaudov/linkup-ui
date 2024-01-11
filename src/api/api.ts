import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.addRequestTransform(async (request) => {
  const token = localStorage.getItem('token');
  if (token && request.headers) {
    request.headers['Authorization'] = `${token}`;
  }
});

export { api };
