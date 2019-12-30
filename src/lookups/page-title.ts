import { EPath } from '../types';
import { Component } from '../i18n/resource';

export const PAGE_TITLE = [
  { path: EPath.Home, title: Component.pageTitle.Home },
  { path: EPath.Manual, title: Component.pageTitle.Manual },
  { path: EPath.Technology, title: Component.pageTitle.Tech },
  { path: EPath.Forbidden, title: Component.pageTitle.Forbidden },
  // sample
  { path: EPath.SampleAtoms, title: Component.pageTitle.Sample },
  { path: EPath.SampleMolecules, title: Component.pageTitle.Sample },
  { path: EPath.SampleOrganisms, title: Component.pageTitle.Sample },
];
