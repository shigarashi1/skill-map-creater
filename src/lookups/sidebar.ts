import { EPath, TSidebarListItem } from '../types';

export const SIDEBAR_LIST: TSidebarListItem[][] = [
  [
    {
      text: 'SignIn',
      icon: 'input',
      path: EPath.SignIn,
      authorization: {
        canShowLogin: true,
      },
    },
    {
      text: 'SignUp',
      icon: 'person_add',
      path: EPath.SignUp,
      authorization: {
        canShowLogin: true,
      },
    },
  ],
  [
    {
      text: 'Home',
      icon: 'home',
      path: EPath.Home,
      authorization: {
        canShowSkill: true,
      },
    },
    {
      text: 'Skill Input',
      icon: 'edit',
      path: EPath.SkillInput,
      authorization: {
        canEditSkill: true,
      },
    },
    {
      text: 'Skill Map',
      icon: 'map',
      path: EPath.SkillMap,
      authorization: {
        canShowSkill: true,
      },
    },
    {
      text: 'Setting',
      icon: 'settings',
      path: EPath.Setting,
      children: [
        {
          text: 'User',
          icon: 'insert_emoticon',
          path: EPath.SettingUser,
        },
        {
          text: 'Group',
          icon: 'group',
          path: EPath.SettingGroup,
          authorization: {
            canSetting: true,
          },
        },
        {
          text: 'Project',
          icon: 'folder',
          path: EPath.SettingProject,
          authorization: {
            canSetting: true,
          },
        },
        {
          text: 'Skill',
          icon: 'build',
          path: EPath.SettingSkill,
          authorization: {
            canSetting: true,
          },
        },
      ],
    },
  ],
  [
    {
      text: 'How to',
      icon: 'import_contacts',
      path: EPath.Manual,
    },
    {
      text: 'Technology',
      icon: 'desktop_mac',
      path: EPath.Technology,
    },
  ],
  [
    {
      text: 'Sample',
      icon: 'accessibility_new',
      path: EPath.Sample,
      canShowDevelopOnly: true,
      children: [
        {
          text: 'Atoms',
          path: EPath.SampleAtoms,
        },
        {
          text: 'Molecules',
          path: EPath.SampleMolecules,
        },
        {
          text: 'Organisms',
          path: EPath.SampleOrganisms,
        },
      ],
    },
  ],
];
