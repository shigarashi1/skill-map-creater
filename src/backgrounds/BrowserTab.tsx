import { AppState } from '../store';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouterSelector, UtilsSelector } from '../store/selector';
import { getBrowserTabString } from '../helpers/view/browserTab';

const mapStateToProps = (state: AppState) => {
  return {
    currentPath: RouterSelector.currentPath(state),
    currentLangCode: UtilsSelector.language.langCode(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type TProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const BrowserTab: React.FC<TProps> = ({ currentPath, currentLangCode }) => {
  useEffect(() => {
    window.document.title = getBrowserTabString(currentPath, currentLangCode);
  }, [currentPath, currentLangCode]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowserTab);
