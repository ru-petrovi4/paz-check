/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActuatorparamModel extends Model {
  @attr name;
  @attr value;
  @belongsTo('actuator') actuator;
}
