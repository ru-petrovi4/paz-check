/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { userRoles } from '../../../includes/roles';

const searchTypes = ['- - -', 'Отдел', 'Роль', 'ФИО']; //ToDo: Добавить многоязычность

export default class AuthAdminUsersController extends Controller {
  @service intl;
  searchTypes = searchTypes;
  userRoles = userRoles;
  @tracked userRole = userRoles[0];
  @tracked userOffice;
  @tracked searchType = searchTypes[0];
  @tracked isInfo = false;
  @tracked isAccess = false;
  @tracked currentUser = null;
  @tracked userName = '';
  queryParams = ['filter'];
  @tracked filter;
  columns = [
    {
      name: this.intl.t('admin.users.table.login'),
      valuePath: 'username',
      cellComponent: 'user-login-cell',
    },
    { name: this.intl.t('admin.users.table.name'), valuePath: 'fullname' },
    { name: this.intl.t('admin.users.table.role'), valuePath: 'role' },
    { name: this.intl.t('admin.users.table.office'), valuePath: 'office.name' },
    {
      name: this.intl.t('admin.users.table.lastlogin'),
      valuePath: 'lastlogin',
    },
    {
      name: this.intl.t('admin.users.table.access'),
      valuePath: 'access',
      cellComponent: 'user-access-cell',
    },
  ];

  get isOffice() {
    return this.searchType === searchTypes[1];
  }

  get isRole() {
    return this.searchType === searchTypes[2];
  }

  get isName() {
    return this.searchType === searchTypes[3];
  }

  get rows() {
    return this.model.users.toArray();
  }

  get offices() {
    return this.model.offices;
  }

  @action onTypeChange(type) {
    this.searchType = type;
    this.userName = '';
    if (this.isRole) {
      this.onSearchRoleChange(this.userRole);
    } else if (this.isOffice) {
      if (this.userOffice) {
        this.onSearchOfficeChange(this.userOffice);
      }
    } else {
      this.filter = void 0;
    }
  }

  @action setSelected(cell, cellMeta, columnMeta, rowMeta) {
    debugger;
  }

  @action onAction(clmn, idx) {
    this.currentUser = this.model.users.findBy('id', idx);
    //Info
    if (clmn === 0) {
      this.isInfo = true;
    }
    //Access rights
    if (clmn === 5) {
      this.isAccess = true;
    }
  }

  @action onSave() {
    this.isInfo = false;
    this.isAccess = false;
  }

  @action onCancel() {
    this.isInfo = false;
    this.isAccess = false;
  }

  @action onEdit() {
  }

  @action onSearchRoleChange(role) {
    this.userRole = role;
    this.filter = "equals(role,'" + role + "')";
  }

  @action onSearchOfficeChange(office) {
    this.userOffice = office;
    this.filter = "equals(office.id,'" + office.id + "')";
  }

  @action onInput() {
    if (this.userName.length > 0) {
      this.filter = "contains(lastname,'" + this.userName + "')";
    } else {
      this.filter = void 0;
    }
  }
}
