/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ActuatorModel extends Model {
  @attr name;
  @attr type;
  @belongsTo('project') project;
  @hasMany('actuatorparams') actuatorparams;
  @hasMany('tag') tags;
}
