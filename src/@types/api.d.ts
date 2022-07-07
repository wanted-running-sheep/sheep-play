declare module 'Movies' {
  interface MovieProps {
    id: string;
    title: string;
    year: string;
    type: 'movie' | 'series';
    poster: string;
    like: boolean;
  }
}
