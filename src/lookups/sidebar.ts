import { EPath, TSidebarListItem } from '../types';

export const SIDEBAR_LIST: TSidebarListItem[][] = [
  [
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
      text: 'Home',
      icon: 'home',
      path: EPath.Home,
      authorization: {
        isOwner: false,
        isPrivate: false,
      },
    },
    {
      text: 'Skill Input',
      icon: 'edit',
      path: EPath.SkillInput,
      authorization: {
        isOwner: true,
        isPrivate: true,
      },
    },
    {
      text: 'Skill Map',
      icon: 'map',
      path: EPath.SkillMap,
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
      children: [
        {
          text: 'User',
          icon: 'insert_emoticon',
          path: EPath.SettingUser,
          authorization: {
            isOwner: true,
            isPrivate: true,
          },
        },
        {
          text: 'Group',
          icon: 'group',
          path: EPath.SettingGroup,
          authorization: {
            isOwner: true,
            isPrivate: true,
          },
        },
        {
          text: 'Project',
          icon: 'folder',
          path: EPath.SettingProject,
          authorization: {
            isOwner: true,
            isPrivate: true,
          },
        },
        {
          text: 'Skill',
          icon: 'build',
          path: EPath.SettingSkill,
          authorization: {
            isOwner: true,
            isPrivate: true,
          },
        },
      ],
    },
    {
      text: 'How to',
      icon: 'import_contacts',
      path: EPath.Manual,
      authorization: {
        isOwner: false,
        isPrivate: false,
      },
    },
  ],
  [
    {
      text: 'Sample',
      icon: 'accessibility_new',
      path: EPath.Sample,
      authorization: {
        isOwner: false,
        isPrivate: false,
      },
      children: [
        {
          text: 'Atoms',
          path: EPath.SampleAtoms,
          authorization: {
            isOwner: false,
            isPrivate: false,
          },
        },
        {
          text: 'Molecules',
          path: EPath.SampleMolecules,
          authorization: {
            isOwner: false,
            isPrivate: false,
          },
        },
        {
          text: 'Organisms',
          path: EPath.SampleOrganisms,
          authorization: {
            isOwner: false,
            isPrivate: false,
          },
        },
      ],
    },
  ],
];

export const SUB_ROUTERS = [
  {
    root: EPath.Sample,
    children: [EPath.SampleAtoms, EPath.SampleMolecules, EPath.SampleOrganisms],
  },
];
