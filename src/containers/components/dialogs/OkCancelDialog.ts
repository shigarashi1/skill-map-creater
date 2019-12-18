import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import { OkCancelDialog } from '../../../components/organisms';
import { UtilsSelector } from '../../../store/selector';
import { mapDispatchToCommonProps } from '../../common';

const mapStateToProps = (state: AppState) => {
  return {
    ...UtilsSelector.dialogs.okCancel(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { okCancelDialog } = mapDispatchToCommonProps(dispatch);
  return {
    ...okCancelDialog,
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelDialog);
