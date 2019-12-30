import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './NotFoundPage.module.scss';
import I18nText from '../../../containers/components/I18nText';

import { TPageProps } from '../../../containers/pages/NotFoundPage';
import { Page } from '../../../i18n/resource';
import { EPath } from '../../../types';

type TProps = TPageProps & RouteComponentProps;

const NotFoundPage: React.FC<TProps> = ({ history }) => {
  const onGotoPage = () => {
    // FIXME: 本来なら権限を確認して遷移先を変更するべき
    history.push(EPath.Home);
  };

  return (
    <div id={styles.root}>
      <div className={styles.block}>
        <Typography variant="body1" color="inherit">
          <I18nText i18nObj={Page.NotFoundPage.message} />
        </Typography>
        <div className={styles.btnWrapper}>
          <Button onClick={onGotoPage} className={styles.btn} variant="contained" color="primary">
            <I18nText i18nObj={Page.NotFoundPage.goToPageBtn} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NotFoundPage);
