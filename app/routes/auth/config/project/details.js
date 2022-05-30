/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthConfigProjectDetailsRoute extends Route {
  model() {
    return this.modelFor('auth.config.project');
  }
}
