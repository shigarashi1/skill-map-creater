import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import SampleOrganismsPage from '../../../components/pages/SamplePages/SampleOrganismsPage/SampleOrganismsPage';
import { AppState } from '../../../store';
import { mapStateToSamplePageCommonProps, mapDispatchToSamplePageCommonProps } from './common';

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

export type TSampleOrganismsPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleOrganismsPage);
