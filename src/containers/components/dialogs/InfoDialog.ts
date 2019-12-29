import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import InfoDialog from '../../../components/organisms/dialogs/InfoDialog/InfoDialog';
import { UtilsSelector } from '../../../store/selector';
import { mapDispatchToCommonProps } from '../../common';

const mapStateToProps = (state: AppState) => {
  return {
    ...UtilsSelector.dialogs.info(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { infoDialog } = mapDispatchToCommonProps(dispatch);
  return {
    ...infoDialog,
  };
};

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(InfoDialog);
