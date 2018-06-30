export default class AuthDataService {

  static get token() {
    let token;

    try {
      token = JSON.parse(localStorage.getItem('authData') || sessionStorage.getItem('authData'))['access_token'];
    } catch (e) {
      console.error('Token parser', e);
      token = '';
    }
    return token;
  }

  static saveAuthData(response, keepLogged = false) {
    keepLogged && window.localStorage.setItem('authData', JSON.stringify(response));
    window.sessionStorage.setItem('authData', JSON.stringify(response));
  }

  static clearAuthData() {
    window.localStorage.removeItem('authData');
    window.sessionStorage.removeItem('authData');
  }

}
