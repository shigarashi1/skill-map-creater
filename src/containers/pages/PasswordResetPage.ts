import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store';

import PasswordResetPage from '../../components/pages/PasswordResetPage/PasswordResetPage';

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetPage);
