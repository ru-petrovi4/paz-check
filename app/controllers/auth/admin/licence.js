/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

// noinspection NpmUsedModulesInstalled
import Controller from '@ember/controller';
// noinspection NpmUsedModulesInstalled
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthAdminLicenceController extends Controller {
  @tracked isModal = false;
  @tracked unitName = '';
  id = 0;

  get isMaxLic() {
    return this.model.units.length >= this.model.lic.units;
  }
  @action newUnit() {
    this.unitName = '';
    this.id = 0;
    this.isModal = true;
  }
  @action onCancel() {
    this.isModal = false;
  }
  @action onSave() {
    if (this.id === 0) {
      let newUnit = this.store.createRecord('unit', { name: this.unitName });
      newUnit.save();
    } else {
      let units = this.model.units;
      let obj = units.findBy('id', this.id);
      obj.set('name', this.unitName);
      obj.save();
    }
    this.isModal = false;
  }
  @action onDelete(obj) {
    obj.destroyRecord();
  }
  @action onEdit(obj) {
    this.unitName = obj.name;
    this.id = obj.id;
    this.isModal = true;
  }
}
