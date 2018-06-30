import axios from 'axios';
import AuthDataService from './auth-data.service';
import {API_KEY, API_URL, APPLICATION_ID} from '../misc/app.config';

class ApiService {

  constructor() {
    this.api = axios.create({
      baseURL: [API_URL, APPLICATION_ID, API_KEY].join('/')
    });

    this._config();
  }

  get(params) {
    return this._http({ method: 'get', ...params });
  }

  patch(params) {
    return this._http({ method: 'patch', ...params });
  }

  post(params) {
    return this._http({ method: 'post', ...params });
  }

  remove(params) {
    return this._http({ method: 'delete', ...params });
  }


  _http({ method, query, data }) {
    return this.api({
      method,
      url: query,
      data: data ? JSON.stringify(data) : null,
      headers: {
        'Content-Type': 'application/json',
        'user-token': AuthDataService.token || null
      }
    })
      .catch(this._handleError);
  }


  _handleError = (err) => {
    // if parsing error
    if (!err.response) {
      window.console.error(err.stack);
      throw new Error(`Unexpected Error: ${err.message}`);
    }

    const res = err.response;
    window.console.error(`APIService: ${res.status} ${res.statusText} - ${res.data.message}`);

    throw new Error(res.data.message);
  };


  _config() {
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

export default new ApiService();
