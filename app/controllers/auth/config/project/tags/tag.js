/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthConfigProjectTagsTagController extends Controller {
  @tracked isEdit = false;

  @action onEdit() {
    this.isEdit = true;
  }

  @action onSave() {
    this.model.save().then(() => {
      this.isEdit = false;
    });
  }

  @action onCancel() {
    this.model.rollbackAttributes();
    this.isEdit = false;
  }

  @action onDelete() {
    this.model.destroyRecord().then(() => {
      this.transitionToRoute('auth.config.project.tags');
    });
  }

  @action
  async onNewAlarm() {
    let alarm = {
      tag: this.model,
    };
    let newAlarm = this.store.createRecord('identity', alarm);
    await newAlarm.save();
  }
}
