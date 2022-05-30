/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';

export default class SaferyPlateComponent extends Component {
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
