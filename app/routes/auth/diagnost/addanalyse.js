/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostAddanalyseRoute extends Route {
  model() {
    let unit = this.modelFor('auth.diagnost');
    return unit;
  }
}
