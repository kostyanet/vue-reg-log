import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = '/root';

class ApiService {

}

export default new ApiService();