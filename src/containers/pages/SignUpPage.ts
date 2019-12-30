import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '../../store';

import SignUpPage from '../../components/pages/SignUpPage/SignUpPage';
import { SignUpPageSelector } from '../../store/selector';
import { SignUpPageActions } from '../../views';

const mapStateToProps = (state: AppState) => {
  return {
    formState: { ...SignUpPageSelector.stateAll(state) },
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(SignUpPageActions, dispatch),
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
