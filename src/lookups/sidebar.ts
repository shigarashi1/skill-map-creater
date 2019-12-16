import { EPath, TSidebarListItem } from '../types';

export const SIDEBAR_LIST: TSidebarListItem[][] = [
  [
    {
      text: 'Home',
      icon: 'home',
      path: EPath.Home,
      authorization: {
        isOwner: true,
        isPrivate: true,
      },
    },
    {
      text: 'Setting',
      icon: 'settings',
      path: EPath.Setting,
      authorization: {
        isOwner: true,
        isPrivate: true,
      },
    },
    {
      text: 'SignIn',
      icon: 'input',
      path: EPath.SignIn,
      authorization: {
        isOwner: false,
        isPrivate: false,
        isSignedIn: false,
      },
    },
    {
      text: 'SignUp',
      icon: 'person_add',
      path: EPath.SignUp,
      authorization: {
        isOwner: false,
        isPrivate: false,
        isSignedIn: false,
      },
    },
  ],
  [
    {
      text: 'How to',
      icon: 'import_contacts',
      path: EPath.Manual,
      authorization: {
        isOwner: false,
        isPrivate: false,
      },
    },
    {
      text: 'Sample',
      icon: 'accessibility_new',
      path: EPath.Sample,
      authorization: {
        isOwner: false,
        isPrivate: false,
      },
    },
  ],
];
