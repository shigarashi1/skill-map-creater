import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '../../../store';
import { YesNoDialog } from '../../../components/organisms';
import { UtilsSelector } from '../../../store/selector';
import { CommonPageActions } from '../../../views';

function mapStateToProps(state: AppState) {
  return {
    ...UtilsSelector.dialogs.yesNo(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const { close } = bindActionCreators(CommonPageActions.yesNoDialog, dispatch);
  return {
    close: () => close(),
  };
}

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(YesNoDialog);
