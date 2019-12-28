import { EPath } from '../types';
import { Component } from '../i18n/resource';

export const PAGE_TITLE = [
  { path: EPath.Home, title: Component.pageTitle.Home },
  { path: EPath.SignIn, title: Component.pageTitle.SignIn },
  { path: EPath.SignUp, title: Component.pageTitle.SignUp },
  { path: EPath.Manual, title: Component.pageTitle.Manual },
  { path: EPath.Technology, title: Component.pageTitle.Tech },
  { path: EPath.Forbidden, title: Component.pageTitle.Forbidden },
  { path: EPath.NotFound, title: Component.pageTitle.NotFound },
  // sample
  { path: EPath.SampleAtoms, title: Component.pageTitle.Sample },
  { path: EPath.SampleMolecules, title: Component.pageTitle.Sample },
  { path: EPath.SampleOrganisms, title: Component.pageTitle.Sample },
];
