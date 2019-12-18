import { Dispatch, bindActionCreators } from 'redux';
import { AppState } from '../../store';
import { CommonPageActions } from '../../views';

export function mapStateToCommonProps(state: AppState) {
  return {};
}

export function mapDispatchToCommonProps(dispatch: Dispatch) {
  // TODO: もっと楽したいよねー
  const auth = bindActionCreators(CommonPageActions.auth, dispatch);
  const sidebar = bindActionCreators(CommonPageActions.sidebar, dispatch);
  const infoDialog = bindActionCreators(CommonPageActions.infoDialog, dispatch);
  const okCancelDialog = bindActionCreators(CommonPageActions.okCancelDialog, dispatch);
  const yesNoDialog = bindActionCreators(CommonPageActions.yesNoDialog, dispatch);
  const router = bindActionCreators(CommonPageActions.router, dispatch);
  return {
    auth,
    sidebar,
    infoDialog,
    okCancelDialog,
    yesNoDialog,
    router,
  };
}
