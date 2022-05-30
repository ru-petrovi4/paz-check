import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host =
    document.location.protocol + '//' + document.location.hostname + ':5000';
  namespace = 'api/v1';
}
