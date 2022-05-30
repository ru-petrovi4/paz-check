/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo } from '@ember-data/model';

export default class IntersectresultModel extends Model {
  @belongsTo('causeresult') causeresult;
  @belongsTo('effectresult') effectresult;
  @attr state;
  @attr triggeredtype;
  @belongsTo('diagresult') diagresult;
}
