/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class EffectresultModel extends Model {
  @attr name;
  @attr descr;
  @attr state;
  @attr triggeredtype;
  @attr triggeredtime;
  @attr maxdelayms;
  @belongsTo('diagresult') diagresult;
}
