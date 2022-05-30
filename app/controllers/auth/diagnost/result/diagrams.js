/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const searchTypes = ['Имени', 'Тегам'];

export default class AuthDiagnostResultDiagramsController extends Controller {
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
        "and(equals(result.id,'" +
        this.model.result.id +
        "'),contains(name,'" +
        this.searchString +
        "'))";
    } else {
      this.filter = void 0;
    }
  }
}
