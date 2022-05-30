/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthDiagnostIndexController extends Controller {
  @action addLog() {
    this.transitionToRoute('auth.diagnost.addanalyse');
  }

  @action onDelete(result) {
    result.destroyRecord();
  }
}
