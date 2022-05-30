/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { belongsTo } from '@ember-data/model';

export default class IntersectionModel extends Model {
  @belongsTo('diagram') diagram;
  @belongsTo('cause') cause;
  @belongsTo('effect') effect;
}
