/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthConfigProjectModelsIndexRoute extends Route {
  redirect() {
    super.redirect();
    this.transitionTo('auth.config.project.models.actuator');
  }
}
