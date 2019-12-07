import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './SamplePageTemplate.module.scss';

import SamplePageRouter from '../../../routers/sub/SampleRouter';
import { EPath } from '../../../types';
import { matchCondition } from '../../../helpers';

const LABELS = ['Atoms', 'Molecules', 'Organisms'];

type TProps = RouteComponentProps;

const SamplePageTemplate: React.FC<TProps> = ({ history }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const pathname = '';
  useEffect(() => {
    // TODO: pathnameに応じて、setTabIndexを設定
  }, [pathname]);

  const onChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (tabIndex === newValue) {
      return;
    }

    setTabIndex(newValue);
    const toPath = matchCondition(
      [
        [EPath.SampleAtoms, newValue === 0],
        [EPath.SampleMolecules, newValue === 1],
        [EPath.SampleOrganisms, newValue === 2],
      ],
      EPath.SampleAtoms,
    );
    history.push(toPath);
  };

  return (
    <div id={styles.root}>
      <div className={styles.title}>
        <Typography variant="h4" color="inherit">
          Sample Page
        </Typography>
      </div>
      <div className={styles.tab}>
        <AppBar position="static">
          <Tabs value={tabIndex} onChange={onChange}>
            {LABELS.map((v, i) => (
              <Tab key={i} label={v} />
            ))}
          </Tabs>
        </AppBar>
      </div>
      <div className={styles.contents}>
        <SamplePageRouter />
      </div>
    </div>
  );
};

export default withRouter(SamplePageTemplate);
