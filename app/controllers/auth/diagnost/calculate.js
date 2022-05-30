/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthDiagnostCalculateController extends Controller {
  @tracked start;
  @tracked end;
  @tracked guid;
  /**
   * 0 - начало
   * 1 - идет расчет
   * 2 - результат расчитан
   * @type {number}
   */
  @tracked stage = 0;

  get isNewRange() {
    return this.stage > 0;
  }

  get isCalculated() {
    return this.stage > 1;
  }

  get isCalculating() {
    return this.stage === 1;
  }

  get isRangeDisabled() {
    return this.stage > 0;
  }

  @action cancelAdd() {
    this.transitionToRoute('auth.diagnost');
  }

  @action updateStart(value) {
    this.start = value;
  }

  @action updateEnd(value) {
    this.end = value;
  }

  @action
  async onNewLog() {
    let unit = await this.model.get('unit');
    this.transitionToRoute('auth.diagnost.addanalyse', unit.id);
  }

  @action onNewRange() {
    this.stage = 0;
  }

  @action
  async onCalculate() {
    let askUrl =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':5000/processor/analyze/' +
      this.model.id +
      '/' +
      this.start +
      '/' +
      this.end;
    fetch(askUrl, { mode: 'cors' }).then((response) => {
      response.json().then((data) => {
        this.guid = data.guid;
        this.stage = 1;
      });
    });
  }

  @action onCalculationFinished() {
    this.stage = 2;
  }
}
