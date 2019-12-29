import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './PageTitle.module.scss';

import I18nText from '../../../containers/components/I18nText';
import { getPageTitleObject } from '../../../helpers/view/page-title';

type TProps = {
  currentPath: string;
};

const PageTitle: React.FC<TProps> = ({ currentPath }) => {
  const i18nObj = getPageTitleObject(currentPath);
  return !i18nObj ? null : (
    <React.Fragment>
      <div className={styles.root}>
        <Typography variant="h4" color="inherit">
          <I18nText i18nObj={i18nObj} />
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default PageTitle;
