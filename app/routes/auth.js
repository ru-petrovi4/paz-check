import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthRoute extends Route {
  @service session;

  beforeModel(transition) {
    super.beforeModel(...arguments);
    this.session.requireAuthentication(transition, 'login');
  }
}
