import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { EPath } from '../types';

import HomePage from '../containers/pages/HomePage';
import LoginPage from '../containers/pages/LoginPage';
import ManualPage from '../containers/pages/ManualPage';
import SamplePageTemplate from '../components/templates/SamplePageTemplate/SamplePageTemplate';

const AppRouter: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact={true} path={EPath.Login} component={LoginPage} />
      <Route exact={true} path={EPath.Home} component={HomePage} />
      <Route exact={true} path={EPath.Manual} component={ManualPage} />
      <Route
        exact={true}
        path={[EPath.Sample, EPath.SampleAtoms, EPath.SampleMolecules, EPath.SampleOrganisms]}
        component={SamplePageTemplate}
      />
      <Redirect to={EPath.Home} />
    </Switch>
  );
};

export default AppRouter;
