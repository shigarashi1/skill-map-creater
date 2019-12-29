import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { RouterSelector } from '../../store/selector';

import PageTitle from '../../components/atoms/PageTitle/PageTitle';

const mapStateToProps = (state: AppState) => {
  return {
    currentPath: RouterSelector.currentPath(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
