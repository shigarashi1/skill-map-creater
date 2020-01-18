import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { RouterSelector, AuthSelector } from '../../store/selector';

const mapStateToProps = (state: AppState) => {
  return {
    currentPath: RouterSelector.currentPath(state),
    isLoggedIn: AuthSelector.isLoggedIn(state),
    isLoggedInByLink: AuthSelector.isLoggedInByLink(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export type TPrivateGuardProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
