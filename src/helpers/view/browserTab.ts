import partial from 'ramda/es/partial';

import { TLangCode } from '../../types';
import { PAGE_TITLE, MAIN_TITLE } from '../../lookups/browser-tab';

const getBrowserTabStr = (config: typeof PAGE_TITLE, path: string, langCode: TLangCode): string => {
  const match = config.find((v) => v.path === path)?.title;
  return match ? `${match[langCode]} | ${MAIN_TITLE}` : MAIN_TITLE;
};

export const getBrowserTabString = partial(getBrowserTabStr, [PAGE_TITLE]);
