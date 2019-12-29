import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store';
import { UtilsSelector } from '../../store/selector';
import { mapDispatchToCommonProps } from '../common';
import { TLangCode } from '../../types';
import LanguageSelect from '../../components/molecules/LanguageSelect/LanguageSelect';

const mapStateToProps = (state: AppState) => {
  return {
    currentLangCode: UtilsSelector.language.langCode(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { language } = mapDispatchToCommonProps(dispatch);
  return {
    changeLangCode: (v: TLangCode) => language.change(v),
  };
};

export type TLanguageSelectProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);
