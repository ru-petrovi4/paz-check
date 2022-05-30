/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, belongsTo } from '@ember-data/model';

export default class SubcauseresultModel extends Model {
  @attr name;
  @attr descr;
  @attr state;
  @attr triggeredtime;
  @belongsTo('causeresult') causeresult;
}
