/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr name;
  @attr level;
  @hasMany('section', { inverse: 'parent' }) children;
  @belongsTo('section', { inverse: 'children' }) parent;
  @attr alarmlevel;
  @belongsTo('unit') unit;
}
