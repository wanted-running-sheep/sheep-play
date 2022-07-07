import { AxiosInstance, AxiosResponse } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  async get(url: string, callback: (response: AxiosResponse) => void) {
    const response = await this.service.get(url);
    callback(response);
  }

  async patch(id: string, data: {}) {
    this.service.patch(`${id}`, data);
  }
}
