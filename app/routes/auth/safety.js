/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthSafetyRoute extends Route {
  model({ unit_id }) {
    return this.store.findRecord('unit', unit_id, { include: 'sections' });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    let contr = this.controllerFor('application');
    contr.headerTitle = 'header.titlesafety';
    contr.headerSubTitle = model.name;
    let rSect = model.sections.filterBy('level', 0);
    controller.currentSection = rSect[0];
  }
}
