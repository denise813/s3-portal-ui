export default class AuthService {
  /** @ngInject */
  constructor($fetch, $cookies) {
    Object.assign(this, {
      $fetch, $cookies,
    });

    this.role = {};
  }

  /**
   * Send a request to server for check the email.
   *
   * @param  {string}  email
   * @return {promise}
   */
  checkEmail(email) {
    return this.$fetch.get(`/v1/auth/checkEmail/${email}`);
  }

  /**
   * Invalidated the API token.
   *
   * @return {promise}
   */
  signOut() {
    this.$cookies.remove('role');
    return this.$fetch.post('/v1/auth/logout');
  }

  checkAdmin() {
    return this.$cookies.get('role') === 'admin';
  }
}
