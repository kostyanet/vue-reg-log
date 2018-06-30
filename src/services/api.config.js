import axios from 'axios';
import {API_KEY, API_URL, APPLICATION_ID} from '../misc/app.config';

export default class ApiConfig {

  constructor() {
    this.api = axios.create({
      baseURL: [API_URL, APPLICATION_ID, API_KEY].join('/')
    });

    this.config();
  }

  get instance() {
    return this.api;
  }

  config() {
    this.api.interceptors.request.use(function(config) {
      if (config.data instanceof FormData) {
        config.headers = Object.assign(config.headers, { 'Content-Type': 'application/json' });
      }

      return config;
    }, null);

    this.api.interceptors.response.use(null, function(error) {
      if (error && error.response && error.response.status === 401) {
        // unauthorized
        // todo
      }

      return Promise.reject(error);
    });
  }

}
