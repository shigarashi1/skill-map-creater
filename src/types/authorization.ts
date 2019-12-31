export type TRoleType = 'owner' | 'projectMember' | 'guestMember' | 'other';
export type TAuthorization = {
  canSetting: boolean;
  canEditSkill: boolean;
  canShowSkill: boolean;
  canShowLogin: boolean;
};
