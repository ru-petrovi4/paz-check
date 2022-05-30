/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CauseModel extends Model {
  @attr name;
  @attr limit;
  @attr delay;
  @attr('boolean') complex;
  @belongsTo('project') project;
  @hasMany('identity') identities;
  @hasMany('diagram') diagrams;
}
