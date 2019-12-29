import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import { mapStateToSamplePageCommonProps, mapDispatchToSamplePageCommonProps } from './common';
import SampleMoleculesPage from '../../../components/pages/SamplePages/SampleMoleculesPage/SampleMoleculesPage';

const mapStateToProps = (state: AppState) => {
  return {
    ...mapStateToSamplePageCommonProps(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...mapDispatchToSamplePageCommonProps(dispatch),
  };
};

export type TSampleMoleculesPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleMoleculesPage);
