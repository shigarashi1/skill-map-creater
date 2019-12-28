import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';

import I18nText from '../../components/atoms/I18nText/I18nText';
import { ELangCode } from '../../types';

const mapStateToProps = (state: AppState) => {
  return {
    langCode: ELangCode.jp,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(I18nText);
