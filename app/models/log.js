/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo } from '@ember-data/model';

export default class LogModel extends Model {
  @attr name;
  @belongsTo('unit') unit;
  @attr start;
  @attr end;
}
