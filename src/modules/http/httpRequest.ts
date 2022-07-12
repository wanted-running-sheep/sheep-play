import { AxiosInstance } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get(url: string = '') {
    return this.service.get(url).catch((error) => {
      console.log('error: ', error);
    });
  }

  patch(id: number, data: {}) {
    return this.service.patch(`/${id}`, data);
  }
}
