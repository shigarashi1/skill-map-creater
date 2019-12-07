import { TI18nObj, TLangCode, TMessageCode } from '../types';
import { Message } from './resource';

export const getText = (langCode: TLangCode, resource: TI18nObj): string => resource?.[langCode] || resource.jp;
export const getMessageObj = (messageCode: TMessageCode) => Message[messageCode];
export const getMessage = (messageCode: TMessageCode, langCode: TLangCode) =>
  getText(langCode, getMessageObj(messageCode));
