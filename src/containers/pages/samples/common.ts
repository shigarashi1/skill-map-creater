import { Dispatch } from 'redux';
import { AppState } from '../../../store';
import { mapDispatchToCommonProps } from '../../common';

export function mapStateToSamplePageCommonProps(state: AppState) {
  return {};
}

export function mapDispatchToSamplePageCommonProps(dispatch: Dispatch) {
  return {
    ...mapDispatchToCommonProps(dispatch),
  };
}
