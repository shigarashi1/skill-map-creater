import clone from 'ramda/es/clone';

import { canShowAuthorization } from './sidebar';
import { TAuthorization, NestedPartial } from '../../types';

describe('canShowAuthorization', () => {
  it('itemAuthorizationがundefinedの場合、true', () => {
    const userAuth: TAuthorization = {
      canSetting: false,
      canEditSkill: false,
      canShowSkill: false,
      canShowLogin: true,
    };
    expect(canShowAuthorization(userAuth, undefined)).toBeTruthy();
  });
  it('itemAuthorizationのkeyがあり、値がuserAuthorizationと全て合致する場合、true', () => {
    const userAuth1: TAuthorization = {
      canSetting: false,
      canEditSkill: false,
      canShowSkill: false,
      canShowLogin: true,
    };
    const itemAuth1: NestedPartial<TAuthorization> = {
      canShowLogin: true,
    };
    expect(canShowAuthorization(userAuth1, itemAuth1)).toBeTruthy();

    const userAuth2: TAuthorization = {
      canSetting: true,
      canEditSkill: true,
      canShowSkill: false,
      canShowLogin: false,
    };
    const itemAuth2: NestedPartial<TAuthorization> = {
      canSetting: true,
      canEditSkill: true,
    };
    expect(canShowAuthorization(userAuth2, itemAuth2)).toBeTruthy();
  });
  it('上記以外、false', () => {
    const userAuth1: TAuthorization = {
      canSetting: false,
      canEditSkill: false,
      canShowSkill: false,
      canShowLogin: false,
    };
    const itemAuth1: NestedPartial<TAuthorization> = {
      canShowLogin: true,
    };
    const result1 = canShowAuthorization(userAuth1, itemAuth1);
    console.log(result1);
    expect(result1).toBeFalsy();

    const userAuth2: TAuthorization = {
      canSetting: true,
      canEditSkill: false,
      canShowSkill: false,
      canShowLogin: false,
    };
    const itemAuth2: NestedPartial<TAuthorization> = {
      canSetting: true,
      canEditSkill: true,
    };
    const result2 = canShowAuthorization(userAuth2, itemAuth2);
    expect(result2).toBeFalsy();
  });
});
