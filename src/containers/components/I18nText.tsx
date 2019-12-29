import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';

import I18nText from '../../components/atoms/I18nText/I18nText';
import { UtilsSelector } from '../../store/selector';

const mapStateToProps = (state: AppState) => {
  return {
    langCode: UtilsSelector.language.langCode(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(I18nText);
