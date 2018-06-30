import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = '/root';

class ApiService {

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
    const body = data ? JSON.stringify(data) : null;

    return this.api({
      method,
      url: query,
      data: body
    })
      .catch(this._handleError);
  }


  _handleError = (err) => {
    debugger
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

export default new ApiService();
