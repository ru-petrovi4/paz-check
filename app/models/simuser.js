/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo } from '@ember-data/model';

export default class SimuserModel extends Model {
  @attr username;
  @attr password;
  @attr firstname;
  @attr lastname;
  @attr middlename;
  @attr personnelnumber;
  @belongsTo('office') office;
  @attr role;

  get fullname() {
    return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
  }

  get lastlogin() {
    return '2021-01-01 00:01';
  }
}
