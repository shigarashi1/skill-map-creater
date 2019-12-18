import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SampleMoleculesPage } from '../../../components/pages/SamplePages';
import { AppState } from '../../../store';
import { mapStateToCommonProps, mapDispatchToCommonProps } from './common';

const mapStateToProps = (state: AppState) => {
  return {
    ...mapStateToCommonProps(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...mapDispatchToCommonProps(dispatch),
  };
};

export type TSampleMoleculesPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(SampleMoleculesPage);
