import { Dispatch } from 'redux';
import { AppState } from '../../../store';
import { mapDispatchToCommonPageProps } from '../common-pages';

export function mapStateToCommonProps(state: AppState) {
  return {};
}

export function mapDispatchToCommonProps(dispatch: Dispatch) {
  return {
    ...mapDispatchToCommonPageProps(dispatch),
  };
}
