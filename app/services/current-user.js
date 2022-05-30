import Service, { inject as service } from '@ember/service';
import fetch, { Headers } from 'fetch';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service session;
  @tracked user = null;

  async load() {
    if (this.session.isAuthenticated) {
      let dlUrl =
        document.location.protocol +
        '//' +
        document.location.hostname +
        ':5000' +
        '/connect/userinfo';
      Headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.access_token}`;
      let response = await fetch(dlUrl, {
        method: 'GET',
        headers: Headers,
      });
      let body = await response.json();
      this.user = body;
    }
  }
}
