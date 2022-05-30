/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SaferyListComponent extends Component {
  @tracked isOpen = false;

  @action toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.args.updater && this.args.section) {
      if (this.isOpen) {
        this.args.updater(this.args.section);
      } else {
        this.args.updater(this.args.section.parent);
      }
    }
  }

  get hasChildren() {
    if (this.args.section) {
      let children = this.args.section.get('children');
      return children.length > 0;
    } else {
      return false;
    }
  }

  get isGreen() {
    if (this.args.section) {
      return this.args.section.alarmlevel === 0;
    } else {
      return false;
    }
  }

  get isYellow() {
    if (this.args.section) {
      return this.args.section.alarmlevel === 1;
    } else {
      return false;
    }
  }

  get isRed() {
    if (this.args.section) {
      return this.args.section.alarmlevel === 2;
    } else {
      return false;
    }
  }
}
