/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr name;
  @attr descr;
  @attr comment;
  @hasMany('diagram') diagrams;
  @belongsTo('unit', { inverse: 'projects' }) unit;
  @attr lastchanged;
  @belongsTo('simuser') byuser;
}
