import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '../../store';

import SignInPage from '../../components/pages/SignInPage/SignInPage';

import { SignInPageActions } from '../../views';
import { SignInPageSelector } from '../../store/selector/pages';

const mapStateToProps = (state: AppState) => {
  return {
    formState: { ...SignInPageSelector.stateAll(state) },
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(SignInPageActions, dispatch),
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
