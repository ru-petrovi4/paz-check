import Route from '@ember/routing/route';

export default class AuthConfigIndexRoute extends Route {
  redirect() {
    super.redirect();
    this.transitionTo('auth.config.projects');
  }
}
