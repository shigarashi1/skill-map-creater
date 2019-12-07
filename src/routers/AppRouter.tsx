import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { EPath } from '../types';
import { SamplePageTemplate } from '../components/templates';

const AppRouter: React.FC<{}> = () => {
  return (
    <Switch>
      {/* <Route exact={true} path={EPath.Home} component={HomePage} />
      <Route exact={true} path={EPath.Manual} component={ManualPage} /> */}
      <Route exact={false} path={EPath.Sample} component={SamplePageTemplate} />
      <Redirect to={EPath.Home} />
    </Switch>
  );
};

export default AppRouter;
