import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import YesNoDialog from '../../../components/organisms/dialogs/YesNoDialog/YesNoDialog';
import { UtilsSelector } from '../../../store/selector';
import { mapDispatchToCommonProps } from '../../common';

const mapStateToProps = (state: AppState) => {
  return {
    ...UtilsSelector.dialogs.yesNo(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { yesNoDialog } = mapDispatchToCommonProps(dispatch);
  return {
    ...yesNoDialog,
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(YesNoDialog);
