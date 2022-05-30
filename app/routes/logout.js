import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LogoutRoute extends Route {
  @service session;
  redirect() {
    super.redirect();
    this.session.invalidate().then(() => {
      this.transitionTo('index');
    });
  }
}
