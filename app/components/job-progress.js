/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later, cancel } from '@ember/runloop';

export default class JobProgressComponent extends Component {
  @tracked progress;
  @tracked guid;

  constructor(owner, args) {
    super(owner, args);
    if (args.guid) {
      this.guid = args.guid;
      this.progress = 0;
      this.updateProgress();
    }
  }

  @action updateProgress() {
    let self = this;
    let askUrl =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':5000/progress/' +
      this.guid;
    fetch(askUrl, { mode: 'cors' }).then((response) => {
      response.json().then((data) => {
        this.progress = data.progress;
        if (!data.isFinished) {
          this.task = later(self, self.updateProgress, 1000);
        } else {
          this.task = null;
          this.args.completed();
        }
      });
    });
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.task !== null) {
      cancel(this.task);
      this.task = null;
    }
  }
}
