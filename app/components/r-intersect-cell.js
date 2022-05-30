/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';

export default class RIntersectCellComponent extends Component {
  get isNotActivated() {
    if (this.args.value) {
      return this.args.value.triggeredtype === 0;
    } else {
      return false;
    }
  }

  get isSuccessFirstTriggered() {
    if (this.args.value) {
      return this.args.value.triggeredtype === 1;
    } else {
      return false;
    }
  }

  get isSuccessTriggered() {
    if (this.args.value) {
      return this.args.value.triggeredtype === 2;
    } else {
      return false;
    }
  }

  get isLateTriggered() {
    if (this.args.value) {
      return this.args.value.triggeredtype === 3;
    } else {
      return false;
    }
  }

  get isNotTriggered() {
    if (this.args.value) {
      return this.args.value.triggeredtype === 4;
    } else {
      return false;
    }
  }
}
