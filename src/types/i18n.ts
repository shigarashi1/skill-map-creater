import { Message } from '../i18n/resource';

export type TI18nObj = {
  jp: string;
  en?: string;
};
export type TLangCode = keyof TI18nObj;
export const ELangCode = {
  jp: 'jp' as TLangCode,
  en: 'en' as TLangCode,
};

export type TMessageCode = keyof typeof Message;
