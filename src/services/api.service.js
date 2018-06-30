import AuthDataService from './auth-data.service';
import ApiConfig from './api.config';

class ApiService {

  constructor(Axios) {
    this.api = new Axios().instance;
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

}

export default new ApiService(ApiConfig);
