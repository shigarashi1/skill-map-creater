import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import { mapStateToSamplePageCommonProps, mapDispatchToSamplePageCommonProps } from './common';
import SampleAtomsPage from '../../../components/pages/SamplePages/SampleAtomsPage/SampleAtomsPage';

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

export type TSampleAtomsPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleAtomsPage);
