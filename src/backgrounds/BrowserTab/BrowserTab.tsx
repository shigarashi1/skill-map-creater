import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { MAIN_TITLE } from '../../lookups';

const mapStateToProps = (state: AppState) => {
  return {
    title: '',
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type TProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const BrowserTab: React.FC<TProps> = ({ title }) => {
  useEffect(() => {
    window.document.title = title || MAIN_TITLE;
  }, [title]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowserTab);
