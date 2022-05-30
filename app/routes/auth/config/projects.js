import Route from '@ember/routing/route';

export default class AuthConfigProjectsRoute extends Route {
  model() {
    return this.modelFor('auth.config');
  }
}
