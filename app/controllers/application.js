/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service session;
  @service currentUser;
  @tracked headerTitle = '';
  @tracked headerSubTitle = '';

  get isAuthenticated() {
    this.currentUser.load();
    return this.session.isAuthenticated;
  }
}
