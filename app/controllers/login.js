/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;
  @service intl;
  name = '';
  passwd = '';

  @action
  async authenticate(e) {
    e.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:oauth2',
        this.name,
        this.passwd,
        'openid custom.profile userapi'
      );
    } catch (error) {
      this.errorMessage = this.intl.t('index.error');
    }
    if (this.session.isAuthenticated) {
      this.errorMessage = '';
    }
  }
}
