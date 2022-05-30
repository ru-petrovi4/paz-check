/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TagIdentityComponent extends Component {
  @tracked isDetail = false;
  @tracked isEdit = false;

  @action toggleDetails() {
    this.isDetail = !this.isDetail;
  }

  get caption() {
    if (this.args.identity) {
      let value = this.args.identity.get('value');
      if (value) {
        return value;
      } else {
        return this.args.identity.get('identifier');
      }
    } else {
      return null;
    }
  }

  @action onEdit() {
    this.isEdit = true;
    this.isDetail = true;
  }

  @action onCancel() {
    this.args.identity.rollbackAttributes();
    this.isEdit = false;
  }

  @action onSave() {
    this.args.identity.save().then(() => {
      this.isEdit = false;
    });
  }

  @action onDelete() {
    this.args.identity.destroyRecord().then(() => {
      this.isEdit = false;
    });
  }
}
