/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthConfigProjectModelsActuatorDetailsController extends Controller {
  @tracked isEdit = false;

  @action onDelete() {
    this.model.destroyRecord().then(() => {
      this.transitionToRoute('auth.config.project.models.actuator');
    });
  }

  @action onEdit() {
    this.isEdit = true;
  }

  @action onSave() {
    this.model.actuatorparams
      .forEach(async (item) => {
        await item.save();
      })
      .then(() => {
        this.model.save().then(() => {
          this.isEdit = false;
        });
      });
  }

  @action onCancel() {
    this.model.rollbackAttributes();
    this.model.actuatorparams.forEach((item) => {
      item.rollbackAttributes();
    });
    this.isEdit = false;
  }
}
