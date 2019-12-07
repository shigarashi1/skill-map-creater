import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { LoadingSpiner } from '../../components/atoms';

function mapStateToProps(state: AppState) {
  return {
    isLoading: false,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingSpiner);
