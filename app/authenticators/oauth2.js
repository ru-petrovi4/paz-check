import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2Authenticator extends OAuth2PasswordGrant {
  clientId = 'userfront';
  serverTokenEndpoint =
    document.location.protocol +
    '//' +
    document.location.hostname +
    ':5000' +
    '/connect/token';
}
