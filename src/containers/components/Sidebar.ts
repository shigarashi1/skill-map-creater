import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Sidebar from '../../components/organisms/Sidebar/Sidebar';

import { AppState } from '../../store';
import { UtilsSelector, RouterSelector, AuthSelector } from '../../store/selector';
import { mapDispatchToCommonProps } from '../common';

const mapStateToProps = (state: AppState) => {
  return {
    isLoggedIn: AuthSelector.isLoggedIn(state),
    isLoggedInByLink: AuthSelector.isLoggedInByLink(state),
    hasOpened: UtilsSelector.sidebar.hasOpened(state),
    currentPath: RouterSelector.currentPath(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { sidebar, router } = mapDispatchToCommonProps(dispatch);
  return {
    sidebar,
    router,
  };
};

export type TSidebarProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
