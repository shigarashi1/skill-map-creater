import { AppState } from '../store';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToCommonProps } from '../containers/common';
import { LocalStorageService } from '../services/local-storage';
import { TLangCode } from '../types';

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { language } = mapDispatchToCommonProps(dispatch);
  return {
    changeLangCode: language.change,
  };
};

type TProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SettingRestore: React.FC<TProps> = ({ changeLangCode }) => {
  // langCode
  useEffect(() => {
    const func = async () => {
      const localStorageValue = await LocalStorageService.read<TLangCode>('langCode');
      if (localStorageValue) {
        changeLangCode(localStorageValue);
      }
    };
    func();
  }, [changeLangCode]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingRestore);
