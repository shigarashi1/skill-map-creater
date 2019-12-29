import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './LanguageSelect.module.scss';
import { TLangCode, ELangCode } from '../../../types';
import I18nText from '../../../containers/components/I18nText';
import { Component } from '../../../i18n/resource';

type TProps = {
  currentLangCode: TLangCode;
  changeLangCode: (v: TLangCode) => void;
  isCol?: boolean;
};

const LanguageSelect: React.FC<TProps> = ({ currentLangCode, changeLangCode, isCol = false }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value as TLangCode;
    changeLangCode(value);
  };

  return (
    <React.Fragment>
      <div id={styles.root}>
        <RadioGroup
          className={styles.group}
          aria-label="language-select"
          name="language-select"
          value={currentLangCode}
          onChange={onChange}
          row={!isCol}
        >
          <FormControlLabel
            className={styles.label}
            value={ELangCode.jp}
            control={<Radio color="secondary" />}
            label={<I18nText i18nObj={Component.languageSelect.japanese}/>}
            labelPlacement="end"
          />
          <FormControlLabel
            className={styles.label}
            value={ELangCode.en}
            control={<Radio color="secondary" />}
            label={<I18nText i18nObj={Component.languageSelect.english}/>}
            labelPlacement="end"
          />
        </RadioGroup>
      </div>
    </React.Fragment>
  );
};

export default LanguageSelect;
