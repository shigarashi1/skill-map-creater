import partial from 'ramda/es/partial';

import { TI18nObj } from '../../types';
import { PAGE_TITLE } from '../../lookups/page-title';

const getPageTitleObj = (config: typeof PAGE_TITLE, path: string): TI18nObj | undefined =>
  config.find((v) => v.path === path)?.title;

export const getPageTitleObject = partial(getPageTitleObj, [PAGE_TITLE]);
