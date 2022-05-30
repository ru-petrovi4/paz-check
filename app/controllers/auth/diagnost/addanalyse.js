/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthDiagnostAddanalyseController extends Controller {
  @tracked stage = 0;
  @tracked guid;
  @tracked isLoading = false;

  @action cancelAdd() {
    this.transitionToRoute('auth.diagnost');
  }

  @action createLog(file) {
    let upUrl =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':5000/importer/log/' +
      this.model.get('id');
    file.upload(upUrl, { fileKey: 'files' }).then((response) => {
      this.guid = response.body.guids[0];
      this.isLoading = true;
    });
  }

  @action onDelete(log) {
    log.destroyRecord();
  }

  @action onCalculationFinished() {
    this.model.reload().then(() => {
      this.isLoading = false;
    });
  }
}
