import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppState } from '../../store';

import PasswordResetPage from '../../components/pages/PasswordResetPage/PasswordResetPage';

import { PasswordResetPageActions } from '../../views';
import { PasswordResetPageSelector } from '../../store/selector';

const mapStateToProps = (state: AppState) => {
  return {
    formState: { ...PasswordResetPageSelector.stateAll(state) },
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(PasswordResetPageActions, dispatch),
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetPage);
