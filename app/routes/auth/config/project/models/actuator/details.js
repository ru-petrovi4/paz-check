/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthConfigProjectModelsActuatorDetailsRoute extends Route {
  async model({ a_id }) {
    return this.store.findRecord('actuator', a_id, {
      include: 'actuatorparams',
    });
  }
}
