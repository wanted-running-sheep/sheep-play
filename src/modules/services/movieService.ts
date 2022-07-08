import { HttpRequest } from '@/modules/http/httpRequest';
import axios from 'axios';

export const movieService = axios.create({
  baseURL: 'http://localhost:8000/movies',
});

export const movieRequest = new HttpRequest(movieService);
