import { EPath } from '..';

export type TSidebarListItem = {
  text: string;
  icon?: string;
  path: EPath;
  authorization: {
    isOwner?: boolean;
    isPrivate?: boolean;
    isSignedIn?: boolean;
  };
  children?: TSidebarListItem[];
};
