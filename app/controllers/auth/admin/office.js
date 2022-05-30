/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

// noinspection NpmUsedModulesInstalled
import Controller from '@ember/controller';
// noinspection NpmUsedModulesInstalled
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthAdminOfficeController extends Controller {
  @tracked isModal = false;
  @tracked officeName = '';
  id = 0;

  @action newOffice() {
    this.officeName = '';
    this.id = 0;
    this.isModal = true;
  }
  @action onCancel() {
    this.isModal = false;
  }
  @action onSave() {
    if (this.id === 0) {
      let newOffice = this.store.createRecord('office', {
        name: this.officeName,
      });
      newOffice.save();
    } else {
      let obj = this.model.findBy('id', this.id);
      obj.set('name', this.officeName);
      obj.save();
    }
    this.isModal = false;
  }
  @action onDelete(obj) {
    obj.destroyRecord();
  }
  @action onEdit(obj) {
    this.officeName = obj.name;
    this.id = obj.id;
    this.isModal = true;
  }
}
