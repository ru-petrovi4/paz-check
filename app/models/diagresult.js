/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DiagresultModel extends Model {
  @attr name;
  @belongsTo('result') result;
  @hasMany('causeresult') causeresults;
  @hasMany('effectresult') effectresults;
  @hasMany('intersectresult') intersectresults;
}
