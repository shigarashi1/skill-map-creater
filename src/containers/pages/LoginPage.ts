import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../store';

import LoginPage from '../../components/pages/LoginPage/LoginPage';

function mapStateToProps(state: AppState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
