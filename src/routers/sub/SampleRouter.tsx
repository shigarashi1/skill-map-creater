import React from 'react';
import { Route, Redirect } from 'react-router';

import { EPath } from '../../types';
import SampleAtomsPage from '../../containers/pages/samples/SampleAtomsPage';
import SampleMoleculesPage from '../../containers/pages/samples/SampleMoleculesPage';
import SampleOrganismsPage from '../../containers/pages/samples/SampleOrganismsPage';

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
