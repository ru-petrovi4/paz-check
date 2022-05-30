/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CheckItemComponent extends Component {
  get isChecked() {
    if (this.args.list) {
      return this.args.list.includes(this.args.item);
    } else {
      return false;
    }
  }

  @action toggleItem() {
    if (this.args.list.includes(this.args.item)) {
      this.args.list.removeObject(this.args.item);
    } else {
      this.args.list.pushObject(this.args.item);
    }
  }
}
