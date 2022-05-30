import Route from '@ember/routing/route';
import object from '@ember/object';

export default class AuthAdminLicenceRoute extends Route {
  async model() {
    let dlUrl =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':5000' +
      '/licence';
    let lic_resp = await fetch(dlUrl, { mode: 'cors' });
    let lic = await lic_resp.json();
    let units = await this.store.findAll('unit');
    let model = object.create({
      lic: lic,
      units: units,
    });
    return model;
  }
}
