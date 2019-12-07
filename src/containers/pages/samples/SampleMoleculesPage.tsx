import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SampleMoleculesPage } from '../../../components/pages/samples';
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

export type TSampleMoleculesPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleMoleculesPage);
