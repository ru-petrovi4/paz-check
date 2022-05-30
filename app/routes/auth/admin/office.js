import Route from '@ember/routing/route';

export default class AuthAdminOfficeRoute extends Route {
  async model() {
    return await this.store.findAll('office');
  }
}
