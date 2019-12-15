import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Sidebar from '../../components/organisms/Sidebar/Sidebar';

import { AppState } from '../../store';
import { UtilsSelector, RouterSelector } from '../../store/selector';
import { CommonPageActions } from '../../views';

function mapStateToProps(state: AppState) {
  return {
    hasOpened: UtilsSelector.sidebar.hasOpened(state),
    // currentPath: RouterSelector.currentPath(state),
    currentPath: window.location.pathname,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const { close } = bindActionCreators(CommonPageActions.sidebar, dispatch);
  return {
    close: () => close(),
  };
}

export type TSidebarProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
