/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';

export default class RHeaderCellComponent extends Component {
  get isFaultTriggered() {
    if (this.args.column) {
      return this.args.column.value.triggeredtype === 5;
    } else {
      return false;
    }
  }

  get isSuccessTriggered() {
    if (this.args.column) {
      return this.args.column.value.triggeredtype === 2;
    } else {
      return false;
    }
  }

  get isLateTriggered() {
    if (this.args.column) {
      return this.args.column.value.triggeredtype === 3;
    } else {
      return false;
    }
  }

  get isNotTriggered() {
    if (this.args.column) {
      return this.args.column.value.triggeredtype === 4;
    } else {
      return false;
    }
  }
}
