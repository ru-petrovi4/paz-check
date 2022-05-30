import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import object from '@ember/object';

export default class NavAreaComponent extends Component {
  @service router;

  @action btnClick(idx) {
    this.router.transitionTo(this.args.tabs[idx].route);
  }

  @action backClick() {
    this.router.transitionTo(this.args.backroute, this.args.backmodels);
  }

  get tbs() {
    let ret = A();
    this.args.tabs.forEach((itm, idx) => {
      ret[idx] = object.create(itm);
      ret[idx].isActive = this.router.isActive(itm.route);
    });
    return ret;
  }
}
