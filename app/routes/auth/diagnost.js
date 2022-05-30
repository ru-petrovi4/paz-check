/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostRoute extends Route {
  async model({ u_id }) {
    let unit = await this.store.findRecord('unit', u_id, {
      include: 'activeproject',
    });
    return unit;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor('application');
    contr.headerTitle = 'header.titlediagnost';
    contr.headerSubTitle = model.name;
  }
}
