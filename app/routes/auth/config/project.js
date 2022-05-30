import Route from '@ember/routing/route';

export default class AuthConfigProjectRoute extends Route {
  model({ prj_id }) {
    return this.store.findRecord('project', prj_id);
  }
}
