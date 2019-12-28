import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './SignInPage.module.scss';
import I18nText from '../../../containers/components/I18nText';
import PageTitle from '../../../containers/components/PageTitle';
import WithLabel from '../../molecules/WithLabel/WithLabel';

import { Page } from '../../../i18n/resource';
import { TPageProps } from '../../../containers/pages/SignInPage';
import { EPath } from '../../../types';

type TProps = TPageProps;

const SignInPage: React.FC<TProps> = ({ formState, setFormState, signIn, init }) => {
  const onChange = (key: keyof typeof formState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ key, value: e.target.value });
  };

  const onClear = () => {
    init();
  };

  const onSignIn = () => {
    signIn();
  };

  return (
    <div id={styles.root}>
      <PageTitle />
      <Grid className={styles.grid} container={true} spacing={2} alignContent="center" justify="center">
        <Grid item={true} xs={12} sm={12} md={6} lg={6} xl={3}>
          <Card className={styles.card}>
            <CardHeader className={styles.header} title={<I18nText i18nObj={Page.SignInPage.formTitle} />} />
            <CardContent className={styles.card}>
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
                    <Link to={EPath.SignUp}>
                      {/* password再発行画面を作成する */}
                      <I18nText i18nObj={Page.SignInPage.forgetPasswordLink} />
                    </Link>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardContent className={styles.card}>
              <div className={styles.linkWrap}>
                <Typography>
                  <Link to={EPath.SignUp}>
                    <I18nText i18nObj={Page.SignInPage.createAccountLink} />
                  </Link>
                </Typography>
              </div>
            </CardContent>
            <CardActions className={styles.action}>
              <Button onClick={onClear} variant="contained">
                <I18nText i18nObj={Page.SignInPage.clearBtn} />
              </Button>
              <Button onClick={onSignIn} variant="contained" color="primary">
                <I18nText i18nObj={Page.SignInPage.loginBtn} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInPage;
