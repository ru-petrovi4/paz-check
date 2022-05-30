import Route from '@ember/routing/route';

export default class AuthAdminIndexRoute extends Route {
  redirect() {
    super.redirect();
    this.transitionTo('auth.admin.licence'); //ToDo: Must be to users
  }
}
