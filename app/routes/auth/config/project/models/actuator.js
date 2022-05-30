/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';
import object from '@ember/object';
import { action } from '@ember/object';

export default class AuthConfigProjectModelsActuatorRoute extends Route {
  queryParams = {
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let prj = this.modelFor('auth.config.project');
    let actuators = object.create({});
    actuators = await this.store.query('actuator', params);
    return object.create({
      project: prj,
      actuators: actuators,
    });
  }

  @action willTransition() {
    this.refresh();
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    if (controller.filter) {
      let sresult = controller.filter.match(/type,'(\w+)'/);
      if (sresult) {
        controller.actuatorType = sresult[1];
      }
    }
  }
}
