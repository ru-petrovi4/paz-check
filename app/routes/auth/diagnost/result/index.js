/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostResultIndexRoute extends Route {
  redirect() {
    super.redirect();
    this.transitionTo('auth.diagnost.result.diagrams');
  }
}
