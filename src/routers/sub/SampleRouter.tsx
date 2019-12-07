import React from 'react';
import { Route, Redirect } from 'react-router';

import { EPath } from '../../types';
import { SampleAtomsPage, SampleMoleculesPage, SampleOrganismsPage } from '../../containers';

const SamplePageRouter: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Route exact={true} path={EPath.SampleAtoms} component={SampleAtomsPage} />
      <Route exact={true} path={EPath.SampleMolecules} component={SampleMoleculesPage} />
      <Route exact={true} path={EPath.SampleOrganisms} component={SampleOrganismsPage} />
      <Redirect from={EPath.Sample} to={EPath.SampleAtoms} />
    </React.Fragment>
  );
};

export default SamplePageRouter;
