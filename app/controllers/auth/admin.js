/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';

export default class AuthAdminController extends Controller {
  tabs = [
    {
      name: 'admin.tabs.one',
      route: 'auth.admin.users',
      isActive: false,
    },
    {
      name: 'admin.tabs.two',
      route: 'auth.admin.office',
      isActive: false,
    },
    {
      name: 'admin.tabs.three',
      route: 'auth.admin.licence',
      isActive: false,
    },
  ];
}
