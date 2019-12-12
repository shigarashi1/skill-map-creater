import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SampleAtomsPage } from '../../../components/pages/SamplePages';
import { AppState } from '../../../store';
import { mapStateToCommonProps, mapDispatchToCommonProps } from './common';

function mapStateToProps(state: AppState) {
  return {
    ...mapStateToCommonProps(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    ...mapDispatchToCommonProps(dispatch),
  };
}

export type TSampleAtomsPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleAtomsPage);
