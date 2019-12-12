import { Dispatch, bindActionCreators } from 'redux';
import { AppState } from '../../store';
import { CommonPageActions } from '../../views';

export function mapStateToCommonPageProps(state: AppState) {
  return {};
}

export function mapDispatchToCommonPageProps(dispatch: Dispatch) {
  // TODO: もっと楽したいよねー
  const auth = bindActionCreators(CommonPageActions.auth, dispatch);
  const sidebar = bindActionCreators(CommonPageActions.sidebar, dispatch);
  const infoDialog = bindActionCreators(CommonPageActions.infoDialog, dispatch);
  const okCancelDialog = bindActionCreators(CommonPageActions.okCancelDialog, dispatch);
  const yesNoDialog = bindActionCreators(CommonPageActions.yesNoDialog, dispatch);
  return {
    auth,
    sidebar,
    infoDialog,
    okCancelDialog,
    yesNoDialog,
  };
}
