/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  progsState = A();
  currentProg = null;
  @tracked unitsList = null;

  get units() {
    return this.unitsList;
  }

  @action progSelect(idx) {
    this.progsState.forEach((item, index) => {
      item.set('isActive', index === idx);
      if (index === idx) {
        this.currentProg = item;
        this.unitsList = item.get('units');
      }
    });
  }

  @action logOut() {
    this.transitionToRoute('logout');
  }

  @action unitSelect(id) {
    switch (this.currentProg.name) {
      case 'insp':
        this.transitionToRoute('auth.inspector', id);
        break;
      case 'dgst':
        this.transitionToRoute('auth.diagnost', id);
        break;
      case 'tst':
        this.transitionToRoute('auth.tester', id);
        break;
      case 'sft':
        this.transitionToRoute('auth.safety', id);
        break;
      case 'hlp':
        this.transitionToRoute('auth.helper', id);
        break;
      case 'cfg':
        this.transitionToRoute('auth.config', id);
        break;
    }
    this.unitsList = null;
  }
}
