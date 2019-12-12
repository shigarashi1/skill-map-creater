import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store';
import { InfoDialog } from '../../../components/organisms';
import { Logger } from '../../../models';

function mapStateToProps(state: AppState) {
  return {
    hasOpen: false,
    title: '',
    context: '',
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    close: () => Logger.log(''),
  };
}

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(InfoDialog);
