import Route from '@ember/routing/route';

export default class AuthConfigRoute extends Route {
  model({ unit_id }) {
    return this.store.findRecord('unit', unit_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor('application');
    contr.headerTitle = 'header.titleconfig';
    contr.headerSubTitle = model.name;
  }
}
