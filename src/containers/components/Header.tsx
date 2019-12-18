import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { mapDispatchToCommonPageProps } from '../pages/common-pages';
import { Header } from '../../components/molecules';

const mapStateToProps = (state: AppState) => {
  return {
    hasSignedIn: true,
    username: 'Sample',
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { auth, sidebar, infoDialog } = mapDispatchToCommonPageProps(dispatch);
  return {
    auth,
    sidebar,
    infoDialog,
  };
};

export type THeaderProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
