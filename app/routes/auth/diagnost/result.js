/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostResultRoute extends Route {
  model({ r_id }) {
    return this.store.findRecord('result', r_id, { include: 'unit' });
  }
}
