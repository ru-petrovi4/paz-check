/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const searchTypes = ['Имени', 'Тегам'];

export default class AuthConfigProjectDiagramsController extends Controller {
  searchTypes = searchTypes;
  @tracked searchType = searchTypes[0];
  @tracked searchString = '';
  queryParams = ['filter'];
  @tracked filter;

  get isName() {
    return this.searchType === searchTypes[0];
  }

  get isTags() {
    return this.searchType === searchTypes[1];
  }

  @action onTypeChange(type) {
    this.searchType = type;
    this.searchString = '';
    this.filter = void 0;
  }

  @action onInput() {
    if (this.searchString.length > 1) {
      this.filter =
        "and(equals(project.id,'" +
        this.model.project.id +
        "'),contains(name,'" +
        this.searchString +
        "'))";
    } else {
      this.filter = void 0;
    }
  }
}
