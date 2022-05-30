/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { later, cancel } from '@ember/runloop';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthSafetyController extends Controller {
  @tracked currentSection;

  constructor() {
    super();
    this.task = later(this, this.updateState, 5000);
  }

  get rootSections() {
    let rSect = this.model.sections.filterBy('level', 1);
    return rSect;
  }

  @action updateState() {
    this.model.reload();
    this.task = later(this, this.updateState, 5000);
  }

  @action updateCurrent(section) {
    this.currentSection = section;
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.task !== null) {
      cancel(this.task);
      this.task = null;
    }
  }
}
