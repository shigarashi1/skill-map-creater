import { EPath } from '../types';
import { Component } from '../i18n/resource';

export const MAIN_TITLE = 'Skill Map Creater';

export const PAGE_TITLE = [
  { path: EPath.Manual, title: Component.browserTab.Manual },
  { path: EPath.Technology, title: Component.browserTab.Technology },
  { path: EPath.SignIn, title: Component.browserTab.SignIn },
  { path: EPath.SignUp, title: Component.browserTab.SignUp },
  // sample
  { path: EPath.SampleAtoms, title: Component.browserTab.Sample },
  { path: EPath.SampleMolecules, title: Component.browserTab.Sample },
  { path: EPath.SampleOrganisms, title: Component.browserTab.Sample },
];
