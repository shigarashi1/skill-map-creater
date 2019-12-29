import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './PasswordResetPage.module.scss';
import I18nText from '../../../containers/components/I18nText';
import WithLabel from '../../molecules/WithLabel/WithLabel';
import SignPageTemplate from '../../templates/SignPageTemplate/SignPageTemplate';

import { TPageProps } from '../../../containers/pages/PasswordResetPage';
import { Page } from '../../../i18n/resource';
import { EPath } from '../../../types';

type TProps = TPageProps;

const PasswordResetPage: React.FC<TProps> = ({ init, formState, setFormState, resetPassword }) => {
  useEffect(() => {
    return () => {
      init();
    };
  }, [init]);

  const onChange = (key: keyof typeof formState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ key, value: e.target.value });
  };

  const onReset = () => {
    resetPassword();
  };

  return (
    <div id={styles.root}>
      <SignPageTemplate
        title={<I18nText i18nObj={Page.PasswordResetPage.formTitle} />}
        actions={
          <React.Fragment>
            <Button onClick={onReset} variant="contained" color="primary" fullWidth={true}>
              <I18nText i18nObj={Page.PasswordResetPage.resetBtn} />
            </Button>
          </React.Fragment>
        }
        extra={
          <Typography>
            <Link to={EPath.SignUp}>
              <I18nText i18nObj={Page.PasswordResetPage.createAccountLink} />
            </Link>
          </Typography>
        }
      >
        <div className={styles.form}>
          <WithLabel label={Page.PasswordResetPage.email}>
            <TextField
              className={styles.text}
              value={formState.email}
              onChange={onChange('email')}
              variant="outlined"
              fullWidth={true}
            />
          </WithLabel>
        </div>
      </SignPageTemplate>
    </div>
  );
};

export default PasswordResetPage;
