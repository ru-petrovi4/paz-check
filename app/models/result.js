/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ResultModel extends Model {
  @attr name;
  @attr descr;
  @attr logfile;
  @attr projectname;
  @attr alalyzedate;
  @attr issaved;
  @attr start;
  @attr end;
  @belongsTo('unit') unit;
  @hasMany('diagresult') diagresults;
}
