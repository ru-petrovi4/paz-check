/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class EffectModel extends Model {
  @attr name;
  @belongsTo('project') project;
  @belongsTo('identity') identity;
  @hasMany('diagram') diagrams;
}
