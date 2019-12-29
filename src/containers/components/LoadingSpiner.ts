import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import LoadingSpiner from '../../components/atoms/LoadingSpiner/LoadingSpiner';

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: false,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingSpiner);
