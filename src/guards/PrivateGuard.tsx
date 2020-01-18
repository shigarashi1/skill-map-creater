import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { TPrivateGuardProps } from '../containers/components/PrivateGuard';
import { getRole } from '../helpers';
import { EPath } from '../types';

type TProps = TPrivateGuardProps & RouteComponentProps;

const PrivateGuard: React.FC<TProps> = ({ isLoggedIn, isLoggedInByLink, currentPath, children, history }) => {
  const userRole = getRole(isLoggedIn, isLoggedInByLink);

  useEffect(() => {
    if (userRole === 'other') {
      history.replace(EPath.Forbidden);
    }
  }, [userRole, currentPath, history]);

  return <React.Fragment>{children ? children : null}</React.Fragment>;
};

export default withRouter(PrivateGuard);
