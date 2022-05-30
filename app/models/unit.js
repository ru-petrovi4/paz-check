/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class UnitModel extends Model {
  @attr name;
  @attr descr;
  @hasMany('project') projects;
  @belongsTo('project') activeproject;
  @belongsTo('simuser') byuser;
  @attr loadeddate;
  @hasMany('log') logs;
  @hasMany('result') results;
  @hasMany('section') sections;
}
