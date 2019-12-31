import partial from 'ramda/es/partial';
import pipe from 'ramda/es/pipe';

import { TRoleType, TAuthorization } from '../types';
import { AUTHORIZATION_SETTING_CONFIG, INITIAL_AUTHORIZATION } from '../lookups/authorization';

export const getRole = (isLoggedIn: boolean, isLoggedInByLink: boolean): TRoleType =>
  isLoggedIn ? 'owner' : isLoggedInByLink ? 'projectMember' : 'other';

const getAuthorizationConf = (conf: typeof AUTHORIZATION_SETTING_CONFIG, role: TRoleType): TAuthorization => {
  const match = conf.find(([roleType, _auth]) => roleType === role);
  return match ? match[1] : { ...INITIAL_AUTHORIZATION };
};

export const getAuthorizationByRole = partial(getAuthorizationConf, [AUTHORIZATION_SETTING_CONFIG]);

export const getAuthorization = pipe(getRole, getAuthorizationByRole);
