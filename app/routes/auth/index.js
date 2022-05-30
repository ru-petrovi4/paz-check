import Route from '@ember/routing/route';
import fetch from 'fetch';
import { A } from '@ember/array';
import object from '@ember/object';

export default class AuthIndexRoute extends Route {
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
    return object.create({
      lic: lic,
      units: units,
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let progsState = A();
    model.lic.progs.forEach((item, idx) => {
      progsState[idx] = object.create({
        name: item.name,
        isActive: false,
        isLast: false,
        units: model.units,
      });
    });
    progsState[model.lic.progs.length - 1].set('isLast', true);
    controller.progsState = progsState;
  }
}
