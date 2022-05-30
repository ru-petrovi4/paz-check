/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class DiagramModel extends Model {
  @attr name;
  @belongsTo('project') project;
  @hasMany('cause') causes;
  @hasMany('effect') effects;
  @hasMany('intersection') intersections;
}
