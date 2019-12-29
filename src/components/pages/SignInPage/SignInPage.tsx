import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './SignInPage.module.scss';
import I18nText from '../../../containers/components/I18nText';
import WithLabel from '../../molecules/WithLabel/WithLabel';
import SignPageTemplate from '../../templates/SignPageTemplate/SignPageTemplate';

import { Page } from '../../../i18n/resource';
import { TPageProps } from '../../../containers/pages/SignInPage';
import { EPath } from '../../../types';

type TProps = TPageProps;

const SignInPage: React.FC<TProps> = ({ formState, setFormState, signIn, init }) => {
  useEffect(() => {
    return () => {
      init();
    };
  }, [init]);

  const onChange = (key: keyof typeof formState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ key, value: e.target.value });
  };

  const onSignIn = () => {
    signIn();
  };

  return (
    <div id={styles.root}>
      <SignPageTemplate
        title={<I18nText i18nObj={Page.SignInPage.formTitle} />}
        actions={
          <React.Fragment>
            <Button onClick={onSignIn} variant="contained" color="primary" fullWidth={true}>
              <I18nText i18nObj={Page.SignInPage.loginBtn} />
            </Button>
          </React.Fragment>
        }
        extra={
          <Typography>
            <Link to={EPath.SignUp}>
              <I18nText i18nObj={Page.SignInPage.createAccountLink} />
            </Link>
          </Typography>
        }
      >
        <div className={styles.form}>
          <WithLabel label={Page.SignInPage.email}>
            <TextField
              className={styles.text}
              value={formState.email}
              onChange={onChange('email')}
              variant="outlined"
              fullWidth={true}
            />
          </WithLabel>
          <WithLabel label={Page.SignInPage.password}>
            <TextField
              className={styles.text}
              value={formState.password}
              onChange={onChange('password')}
              variant="outlined"
              fullWidth={true}
              type="password"
            />
          </WithLabel>
          <div className={styles.linkWrap}>
            <Typography>
              <Link to={EPath.PasswordReset}>
                <I18nText i18nObj={Page.SignInPage.forgetPasswordLink} />
              </Link>
            </Typography>
          </div>
        </div>
      </SignPageTemplate>
    </div>
  );
};

export default SignInPage;
