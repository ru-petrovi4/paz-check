import Route from '@ember/routing/route';

export default class AuthConfigProjectIndexRoute extends Route {
  redirect() {
    super.redirect();
    this.transitionTo('auth.config.project.details');
  }
}
