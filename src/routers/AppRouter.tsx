import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { EPath } from '../types';

import HomePage from '../containers/pages/HomePage';
import SignInPage from '../containers/pages/SignInPage';
import SignUpPage from '../containers/pages/SignUpPage';
import ManualPage from '../containers/pages/ManualPage';
import SamplePageTemplate from '../components/templates/SamplePageTemplate/SamplePageTemplate';
import TechnologyPage from '../containers/pages/TechnologyPage';
import ForbiddenPage from '../containers/pages/ForbiddenPage';
import NotFoundPage from '../containers/pages/NotFoundPage';

const AppRouter: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact={true} path={EPath.Forbidden} component={ForbiddenPage} />
      <Route exact={true} path={EPath.NotFound} component={NotFoundPage} />
      <Route exact={true} path={EPath.SignIn} component={SignInPage} />
      <Route exact={true} path={EPath.SignUp} component={SignUpPage} />
      <Route exact={true} path={EPath.Home} component={HomePage} />
      <Route exact={true} path={EPath.Manual} component={ManualPage} />
      <Route exact={true} path={EPath.Technology} component={TechnologyPage} />
      <Route
        exact={true}
        path={[EPath.Sample, EPath.SampleAtoms, EPath.SampleMolecules, EPath.SampleOrganisms]}
        component={SamplePageTemplate}
      />
      <Redirect to={EPath.NotFound} />
    </Switch>
  );
};

export default AppRouter;
