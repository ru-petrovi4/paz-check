/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DTInputComponent extends Component {
  @tracked inputDate = '2021-05-21';
  @tracked inputTime = '00:00:00';

  constructor(owner, args) {
    super(owner, args);
    let dt = new Date(args.value);
    let month = ('0' + (dt.getMonth() + 1)).slice(-2);
    let day = ('0' + dt.getDate()).slice(-2);
    this.inputDate = dt.getFullYear() + '-' + month + '-' + day;
    let hours = ('0' + dt.getHours()).slice(-2);
    let minutes = ('0' + dt.getMinutes()).slice(-2);
    let seconds = ('0' + dt.getSeconds()).slice(-2);
    this.inputTime = hours + ':' + minutes + ':' + seconds;
  }

  @action updateInputDate(event) {
    this.inputDate = event.target.value;
    this.updateValue();
  }

  @action updateInputTime(event) {
    this.inputTime = event.target.value;
    this.updateValue();
  }

  updateValue() {
    let newDate = new Date(this.inputDate);
    let parseTime = this.inputTime.split(/:/);
    newDate.setUTCHours(parseTime[0], parseTime[1], parseTime[2]);
    let finalValue = newDate.toISOString().slice(1, -1);
    this.args.updater(finalValue);
  }
}
