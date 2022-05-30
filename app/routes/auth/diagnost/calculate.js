/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostCalculateRoute extends Route {
  model({ log_id }) {
    return this.store.findRecord('log', log_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.start = model.start;
    controller.end = model.end;
    controller.stage = 0;
  }
}
