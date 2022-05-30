/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class IdentityModel extends Model {
  @attr identifier;
  @attr eventtype;
  @attr value;
  @belongsTo('tag') tag;
  @hasMany('cause') causes;
}
