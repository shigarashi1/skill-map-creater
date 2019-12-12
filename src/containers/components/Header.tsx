import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { mapDispatchToCommonProps } from '../pages/common-pages';
import { Header } from '../../components/molecules';

function mapStateToProps(state: AppState) {
  return {
    hasSignedIn: false,
    username: 'Sample',
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const { auth, sidebar, infoDialog } = mapDispatchToCommonProps(dispatch);
  return {
    auth,
    sidebar,
    infoDialog,
  };
}

export type THeaderProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
