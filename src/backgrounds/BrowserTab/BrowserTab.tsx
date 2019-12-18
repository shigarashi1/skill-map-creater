import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => {
  return {
    title: '',
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type TProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const MAIN_TITLE = 'Skill Map Creater';

const BrowserTab: React.FC<TProps> = ({ title }) => {
  useEffect(() => {
    window.document.title = title || MAIN_TITLE;
  }, [title]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowserTab);
