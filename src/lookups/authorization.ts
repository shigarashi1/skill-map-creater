import { TRoleType, TAuthorization } from '../types';

export const AUTHORIZATION_SETTING_CONFIG: Array<[TRoleType, TAuthorization]> = [
  ['owner', { canSetting: true, canEditSkill: true, canShowSkill: true, canShowLogin: false }],
  ['projectMember', { canSetting: false, canEditSkill: true, canShowSkill: true, canShowLogin: false }],
  ['guestMember', { canSetting: false, canEditSkill: false, canShowSkill: true, canShowLogin: false }],
  ['other', { canSetting: false, canEditSkill: false, canShowSkill: false, canShowLogin: true }],
];

export const INITIAL_AUTHORIZATION: TAuthorization = {
  canSetting: false,
  canEditSkill: false,
  canShowSkill: false,
  canShowLogin: false,
};
