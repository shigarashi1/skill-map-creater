import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './PageTitle.module.scss';
import { TI18nObj } from '../../../types';
import I18nText from '../../../containers/components/I18nText';

type TProps = {
  title?: TI18nObj;
};

const PageTitle: React.FC<TProps> = ({ title }) => {
  return (
    <React.Fragment>
      <div className={styles.root}>
        <Typography variant="h4" color="inherit">
          <I18nText i18nObj={title} />
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default PageTitle;
