import { HttpRequest } from '@/modules/http/httpRequest';
import axios from 'axios';

const baseURL =
  process.env.REACT_APP_MODE === 'DEV'
    ? 'http://localhost:8000/movies'
    : 'https://sheepplay.herokuapp.com/movies';
export const movieService = axios.create({
  baseURL,
});

export const movieRequest = new HttpRequest(movieService);
