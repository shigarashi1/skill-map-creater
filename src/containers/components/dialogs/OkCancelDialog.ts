import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '../../../store';
import { OkCancelDialog } from '../../../components/organisms';
import { UtilsSelector } from '../../../store/selector';
import { CommonPageActions } from '../../../views';

const mapStateToProps = (state: AppState) => {
  return {
    ...UtilsSelector.dialogs.okCancel(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { close } = bindActionCreators(CommonPageActions.okCancelDialog, dispatch);
  return {
    close: () => close(),
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(OkCancelDialog);
