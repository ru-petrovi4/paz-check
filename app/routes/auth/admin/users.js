import Route from '@ember/routing/route';
import object from '@ember/object';

export default class AuthAdminUsersRoute extends Route {
  queryParams = {
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let users = await this.store.query('simuser', params);
    let offices = await this.store.findAll('office');
    return object.create({
      users: users,
      offices: offices,
    });
  }
}
