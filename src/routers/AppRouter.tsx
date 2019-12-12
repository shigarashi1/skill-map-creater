import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { EPath } from '../types';
import SamplePageTemplate from '../components/templates/SamplePageTemplate/SamplePageTemplate';

const AppRouter: React.FC<{}> = () => {
  return (
    <Switch>
      {/* <Route exact={true} path={EPath.Home} component={HomePage} />
      <Route exact={true} path={EPath.Manual} component={ManualPage} /> */}
      <Route
        exact={true}
        path={[EPath.SampleAtoms, EPath.SampleMolecules, EPath.SampleOrganisms]}
        component={SamplePageTemplate}
      />
      <Redirect to={EPath.Home} />
    </Switch>
  );
};

export default AppRouter;
