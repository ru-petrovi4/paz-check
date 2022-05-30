/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DiagIntersectCellComponent extends Component {
  @service store;
  @tracked isModal = false;

  get isNew() {
    return !this.args.value;
  }

  get displ() {
    if (this.isNew) {
      return '';
    } else {
      let effect = this.args.value.get('effect');
      let ident = effect.get('identity');
      let v = ident.get('value');
      return v.charAt(0);
    }
  }

  get cause() {
    let cause = this.args.meta.cause;
    let identities = cause.get('identities');
    return identities;
  }

  get effect() {
    let effect = this.args.effect;
    return effect.identity;
  }

  @action onClick() {
    this.isModal = true;
  }

  @action onCancel() {
    this.isModal = false;
  }

  @action
  async onSave() {
    let intersect = {
      diagram: this.args.meta.diagram,
      cause: this.args.meta.cause,
      effect: this.args.effect,
    };
    let newIntersect = this.store.createRecord('intersection', intersect);
    await newIntersect.save();
    this.isModal = false;
  }

  @action
  async onDelete() {
    let intersect = this.store.peekRecord('intersection', this.args.value.id);
    await intersect.destroyRecord();
    this.isModal = false;
  }
}
