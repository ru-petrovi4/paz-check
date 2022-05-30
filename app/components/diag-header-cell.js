/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DiagHeaderCellComponent extends Component {
  @service store;
  @tracked isModal = false;
  @tracked tag = null;
  @tracked identity = null;

  get isNew() {
    return !this.args.meta.effect;
  }

  get identities() {
    if (this.tag) {
      return this.tag.get('identities');
    } else {
      return null;
    }
  }

  @action onClick() {
    if (this.args.meta.effect) {
      this.identity = this.args.meta.effect.get('identity');
      this.tag = this.identity.get('tag');
    }
    this.isModal = true;
  }

  @action onCancel() {
    this.isModal = false;
  }

  @action
  async onSave() {
    if (this.isNew && this.tag) {
      let effect = {
        name: this.tag.name,
        project: this.args.meta.project,
        identity: this.identity,
      };
      let newEffect = this.store.createRecord('effect', effect);
      let diagram = this.store.peekRecord('diagram', this.args.meta.diagram.id);
      diagram.effects.pushObject(newEffect);
      await newEffect.save();
      await diagram.save();
    }
    this.isModal = false;
  }

  @action
  async onDelete() {
    let diagram = this.store.peekRecord('diagram', this.args.meta.diagram.id);
    let effect = this.store.peekRecord('effect', this.args.meta.effect.id);
    let intersect = await diagram.get('intersections');
    diagram.effects.removeObject(effect);
    intersect.forEach((item) => {
      if (item.effect.get('id') === effect.id) {
        //Удалив следствие, мы должны удалить все пересечения с ним связанные внутри этой диаграммы
        item.destroyRecord();
      }
    });
    await diagram.save();
    let ediags = await effect.get('diagrams'); //Если не выносить эту строку, то запрос на массив диаграмм выполняется уже после удаления. Видимо в условии используется кеш в том случае.
    if (ediags.length < 1) {
      await effect.destroyRecord();
    }
    this.isModal = false;
  }

  @action searchTag(query) {
    let tags = null;
    if (query.length > 1) {
      let prjId = this.args.meta.project.get('id');
      tags = this.store.query('tag', {
        filter:
          "and(equals(project.id,'" +
          prjId +
          "'),contains(name,'" +
          query +
          "'))",
      });
    }
    return tags;
  }

  @action onChangeTag(tag) {
    this.tag = tag;
  }

  @action onChangeIdentity(identity) {
    this.identity = identity;
  }
}
