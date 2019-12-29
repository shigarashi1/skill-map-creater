import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { mapDispatchToCommonProps } from '../common';
import Header from '../../components/organisms/Header/Header';

const mapStateToProps = (state: AppState) => {
  return {
    hasSignedIn: true,
    username: 'Sample',
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { auth, sidebar, infoDialog, router } = mapDispatchToCommonProps(dispatch);
  return {
    auth,
    sidebar,
    infoDialog,
    router,
  };
};

export type THeaderProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
