/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TagModel extends Model {
  @attr name;
  @attr descr;
  @attr ext;
  @belongsTo('project') project;
  @hasMany('identity') identities;
  @belongsTo('actuator') actuator;
}
