/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthConfigProjectModelsSafetyController extends Controller {
  @action createSafetyConfig(file) {
    let upUrl =
      document.location.protocol +
      '//' +
      document.location.hostname +
      ':5000/importer/safety/' +
      this.model.get('id');
    file.upload(upUrl, { fileKey: 'files' }).then((response) => {
      this.model.reload().then(() => {
        let respBody = response.body;
      });
    });
  }
}
