/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import object, { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

const zoomPercents = ['100%', '50%', '25%'];

export default class AuthConfigDiagramController extends Controller {
  zoomPercents = zoomPercents;
  @tracked isFullScreen = false;
  @tracked zoomPercent = zoomPercents[0];
  @tracked isLoading = false;

  @action diagCheck() {
    debugger;
  }

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
        cellComponent: 'diag-cause-cell',
      },
    ];
    this.model.effects.forEach((item) => {
      clmn.push({
        name: item.name,
        valuePath: item.name,
        headerComponent: 'diag-header-cell',
        cellComponent: 'diag-intersect-cell',
        meta: {
          effect: item,
          project: this.model.project,
          diagram: this.model,
        },
      });
    });
    clmn.push({
      img: true,
      valuePath: 'addeffect',
      headerComponent: 'diag-header-cell',
      cellComponent: 'diag-intersect-cell',
      meta: {
        project: this.model.project,
        diagram: this.model,
      },
    });
    return clmn;
  }

  get rows() {
    let rows = [];
    let baseObj = {
      cause: '',
    };
    this.model.effects.forEach((item) => {
      baseObj[item.name] = '';
    });
    this.model.causes.forEach((item) => {
      let obj = object.create(baseObj);
      obj.cause = item.identities;
      let inter = this.model.get('intersections');
      let filtered = inter.filterBy('cause.id', item.id);
      filtered.forEach((item) => {
        obj[item.effect.get('name')] = item;
      });
      obj['meta'] = { cause: item, diagram: this.model };
      rows.push(obj);
    });
    let obj = Object.create(baseObj);
    rows.push(obj);
    obj['meta'] = { diagram: this.model };
    obj.cause = {};
    obj.cause.new = true;
    return rows;
  }
}
