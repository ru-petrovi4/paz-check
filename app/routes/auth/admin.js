import Route from '@ember/routing/route';

export default class AuthAdminRoute extends Route {
  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor('application');
    contr.headerTitle = 'header.titleadmin';
  }
}
