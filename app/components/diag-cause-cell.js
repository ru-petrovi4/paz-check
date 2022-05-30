/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

/* eslint-disable no-self-assign */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import object from '@ember/object';

export default class DiagCauseCellComponent extends Component {
  @service store;
  @tracked isModal = false;
  @tracked cause;
  @tracked tag = null;
  @tracked identity = null;
  @tracked lines;

  get isNew() {
    return !this.args.meta.cause;
  }

  get identities() {
    if (this.tag) {
      return this.tag.get('identities');
    } else {
      return null;
    }
  }

  @action
  async onClick() {
    if (this.args.value.new) {
      let prj = await this.args.meta.diagram.get('project');
      this.cause = object.create({
        project: prj,
        limit: 0,
        delay: 0,
      });
      this.lines = A();
    } else {
      this.cause = this.args.meta.cause;
      this.lines = this.cause.identities;
    }
    this.isModal = true;
  }

  @action onCancel() {
    this.isModal = false;
  }

  @action
  async onSave() {
    if (this.isNew && this.lines.length > 0) {
      let newCause = this.store.createRecord('cause', this.cause);
      let diagram = this.store.peekRecord('diagram', this.args.meta.diagram.id);
      diagram.causes.pushObject(newCause);
      await newCause.save();
      await diagram.save();
      newCause.identities.pushObjects(this.lines);
      await newCause.save();
    }
    this.isModal = false;
  }

  @action
  async onDelete() {
    let diagram = this.store.peekRecord('diagram', this.args.meta.diagram.id);
    let cause = this.store.peekRecord('cause', this.args.meta.cause.id);
    let intersect = await diagram.get('intersections');
    diagram.causes.removeObject(cause);
    intersect.forEach((item) => {
      if (item.cause.get('id') === cause.id) {
        //Удалив следствие, мы должны удалить все пересечения с ним связанные внутри этой диаграммы
        item.destroyRecord();
      }
    });
    await diagram.save();
    let cdiags = await cause.get('diagrams'); //Если не выносить эту строку, то запрос на массив диаграмм выполняется уже после удаления. Видимо в условии используется кеш в том случае.
    if (cdiags.length < 1) {
      await cause.destroyRecord();
    }
    this.isModal = false;
  }

  @action searchTag(query) {
    let tags = null;
    if (query.length > 1) {
      let prj = this.args.meta.diagram.get('project');
      let prjId = prj.get('id');
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

  @action onAdd() {
    if (this.identity) {
      this.lines.push(this.identity);
      // noinspection SillyAssignmentJS
      this.lines = this.lines; //Нужно, чтобы передернулся массив и обновилось окно
      this.identity = null;
      this.tag = null;
    }
  }
}
