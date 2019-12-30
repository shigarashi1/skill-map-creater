import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './SignUpPage.module.scss';
import I18nText from '../../../containers/components/I18nText';
import WithLabel from '../../molecules/WithLabel/WithLabel';
import SignPageTemplate from '../../templates/SignPageTemplate/SignPageTemplate';

import { Page } from '../../../i18n/resource';
import { EPath } from '../../../types';
import { TPageProps } from '../../../containers/pages/SignUpPage';

type TProps = TPageProps;

const SignUpPage: React.FC<TProps> = ({ formState, setFormState, signUp, init }) => {
  useEffect(() => {
    return () => {
      init();
    };
  }, [init]);

  const onChange = (key: keyof typeof formState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ key, value: e.target.value });
  };

  const onSignUp = () => {
    signUp();
  };

  return (
    <div id={styles.root}>
      <SignPageTemplate
        title={<I18nText i18nObj={Page.SignUpPage.formTitle} />}
        actions={
          <React.Fragment>
            <Button onClick={onSignUp} variant="contained" color="primary" fullWidth={true}>
              <I18nText i18nObj={Page.SignUpPage.signUpBtn} />
            </Button>
          </React.Fragment>
        }
        extra={
          <Typography>
            <Link to={EPath.SignIn}>
              <I18nText i18nObj={Page.SignUpPage.signInLink} />
            </Link>
          </Typography>
        }
      >
        <div className={styles.form}>
          <WithLabel label={Page.SignUpPage.username}>
            <TextField
              className={styles.text}
              value={formState.username}
              onChange={onChange('username')}
              variant="outlined"
              fullWidth={true}
            />
          </WithLabel>
          <WithLabel label={Page.SignUpPage.email}>
            <TextField
              className={styles.text}
              value={formState.email}
              onChange={onChange('email')}
              variant="outlined"
              fullWidth={true}
            />
          </WithLabel>
          <WithLabel label={Page.SignUpPage.password}>
            <TextField
              className={styles.text}
              value={formState.password}
              onChange={onChange('password')}
              variant="outlined"
              fullWidth={true}
              type="password"
            />
          </WithLabel>
          <WithLabel label={Page.SignUpPage.passwordConfirmation}>
            <TextField
              className={styles.text}
              value={formState.confirmation}
              onChange={onChange('confirmation')}
              variant="outlined"
              fullWidth={true}
              type="password"
            />
          </WithLabel>
        </div>
      </SignPageTemplate>
    </div>
  );
};

export default SignUpPage;
