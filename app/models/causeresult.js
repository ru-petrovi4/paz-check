/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class CauseresultModel extends Model {
  @hasMany('subcauseresult') subcauseresults;
  @attr triggeredtime;
  @belongsTo('diagresult') diagresult;
}
