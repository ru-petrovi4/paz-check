/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import object, { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

const searchTypes = ['Имя тега', 'Описание тега'];

export default class AuthConfigProjectTagsController extends Controller {
  searchTypes = searchTypes;
  @tracked searchType = searchTypes[0];
  @tracked searchString = '';
  queryParams = ['filter'];
  @tracked filter;
  @tracked isModal = false;
  @tracked isActuators = false;
  @tracked tmpTag = null;
  @tracked checkedItems = A();
  @tracked actuatorType;

  get isName() {
    return this.searchType === searchTypes[0];
  }

  get isDescr() {
    return this.searchType === searchTypes[1];
  }

  get isAllChecked() {
    return this.checkedItems.length > 0;
  }

  get actuatorTypes() {
    return this.model.actuators;
  }

  @action onTypeChange(type) {
    this.searchType = type;
    this.searchString = '';
    this.filter = void 0;
  }

  @action onInput() {
    this.checkedItems.clear();
    if (this.searchString.length > 1) {
      this.filter =
        "and(equals(project.id,'" +
        this.model.project.id +
        "'),contains(name,'" +
        this.searchString +
        "'))";
    } else {
      this.filter = void 0;
      this.transitionToRoute('auth.config.project.tags');
    }
  }

  @action onNew() {
    this.tmpTag = object.create({
      name: '',
      descr: '',
    });
    this.isModal = true;
  }

  @action onSave() {
    this.tmpTag.project = this.model.project;
    let newTag = this.store.createRecord('tag', this.tmpTag);
    newTag.save().then(() => {
      this.isModal = false;
      this.searchString = newTag.name;
      this.onInput();
      this.transitionToRoute('auth.config.project.tags.tag', newTag.id);
    });
  }

  @action onCancel() {
    this.isModal = false;
  }

  @action toggleAllItems() {
    if (this.checkedItems.length < 1) {
      this.model.tags.forEach((item) => {
        this.checkedItems.pushObject(item);
      });
    } else {
      this.checkedItems.clear();
    }
  }

  @action onActuators() {
    this.isActuators = true;
  }

  @action onActCancel() {
    this.isActuators = false;
  }

  @action
  async onActAdd() {
    let tags = await this.actuatorType.tags;
    this.checkedItems.forEach(async (item) => {
      item.set('actuator', this.actuatorType);
      await item.save();
      tags.addObject(item);
    });
    this.actuatorType.save().then(() => {
      this.checkedItems.clear();
      this.isActuators = false;
    });
  }
}
