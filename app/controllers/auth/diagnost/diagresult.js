/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import object, { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const zoomPercents = ['100%', '50%', '25%'];

export default class AuthDiagnostDiagresultController extends Controller {
  zoomPercents = zoomPercents;
  @tracked isFullScreen = false;
  @tracked zoomPercent = zoomPercents[0];

  @action fullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  @action onPercentChange(percent) {
    this.zoomPercent = percent;
  }

  get columns() {
    let clmn = [
      {
        name: '',
        valuePath: 'cause',
        headerComponent: 'diag-header-first-cell',
        cellComponent: 'r-cause-cell',
      },
    ];
    this.model.effectresults.forEach((item) => {
      clmn.push({
        value: item,
        valuePath: item.name,
        headerComponent: 'r-header-cell',
        cellComponent: 'r-intersect-cell',
      });
    });
    return clmn;
  }

  get rows() {
    let rows = [];
    let baseObj = {
      cause: '',
    };
    this.model.effectresults.forEach((item) => {
      baseObj[item.name] = '';
    });
    this.model.causeresults.forEach((item) => {
      let obj = object.create(baseObj);
      obj.cause = item;
      let inter = this.model.get('intersectresults');
      let filtered = inter.filterBy('causeresult.id', item.id);
      filtered.forEach((item) => {
        obj[item.effectresult.get('name')] = item;
      });
      //obj['meta'] = { cause: item, diagram: this.model };
      rows.push(obj);
    });
    return rows;
  }
}
