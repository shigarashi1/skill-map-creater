import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { RouterSelector } from '../../store/selector';

import PageTitle from '../../components/atoms/PageTitle/PageTitle';
import { getPageTitleObject } from '../../helpers/view/page-title';

const mapStateToProps = (state: AppState) => {
  const currentPath = RouterSelector.currentPath(state);
  return {
    title: getPageTitleObject(currentPath),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
