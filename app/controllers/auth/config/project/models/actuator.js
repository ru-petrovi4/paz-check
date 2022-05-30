/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { actuatorTypes } from '../../../../../includes/actuators';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import object from '@ember/object';

export default class AuthConfigProjectModelsActuatorController extends Controller {
  actuatorTypes = ['- - -'].concat(actuatorTypes);
  @tracked actuatorType = this.actuatorTypes[0];
  queryParams = ['filter'];
  @tracked filter;
  @tracked isModal = false;
  @tracked tmpAct = null;

  @action onTypeChange(type) {
    this.actuatorType = type;
    if (type === this.actuatorTypes[0]) {
      this.filter = void 0;
    } else {
      this.filter =
        "and(equals(project.id,'" +
        this.model.project.id +
        "'),equals(type,'" +
        type +
        "'))";
    }
  }

  @action onNew() {
    this.isModal = true;
    this.tmpAct = object.create({
      name: '',
      type: this.actuatorTypes[0],
    });
  }

  @action
  async onSave() {
    this.tmpAct.project = this.model.project;
    let newActuator = this.store.createRecord('actuator', this.tmpAct);
    newActuator.save().then(() => {
      this.isModal = false;
      this.transitionToRoute(
        'auth.config.project.models.actuator.details',
        newActuator.id
      );
    });
  }

  @action onCancel() {
    this.isModal = false;
  }
}
