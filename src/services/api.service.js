import axios from 'axios';

import AuthDataService from './auth-data.service';
import {API_KEY, API_URL, APPLICATION_ID} from '../misc/app.config';
import router from '../router';


class ApiService {

  constructor() {
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
    const options = {
      method,
      url: query,
      data: data ? JSON.stringify(data) : null,
      headers: {
        'Content-Type': 'application/json',
        'user-token': AuthDataService.token || null
      }
    };

    return this.api(options).catch(this._handleError);
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
    this.api = axios.create({
      baseURL: [API_URL, APPLICATION_ID, API_KEY].join('/')
    });

    this.api.interceptors.response.use(null, function(error) {
      if (error && error.response && error.response.status === 401) {
        router.push({ path: '/login' });
      }

      return Promise.reject(error);
    });
  }

}

export default new ApiService();
