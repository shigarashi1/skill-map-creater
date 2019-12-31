import { EPath } from '..';
import { NestedPartial } from '../common';
import { TAuthorization } from '../authorization';

export type TSidebarListItem = {
  text: string;
  path: EPath;
  authorization?: NestedPartial<TAuthorization>;
  canShowDevelopOnly?: boolean;
  icon?: string;
  children?: TSidebarListItem[];
};
