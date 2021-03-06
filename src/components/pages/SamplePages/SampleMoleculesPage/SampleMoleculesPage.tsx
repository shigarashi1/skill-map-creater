import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './SampleMoleculesPage.module.scss';

import SampleCard from '../../../molecules/SampleCard/SampleCard';
import { SAMPLE_PAGE_BREAK_POINT } from '../../../../lookups';
import { TSampleMoleculesPageProps } from '../../../../containers/pages/samples/SampleMoleculesPage';

type TProps = TSampleMoleculesPageProps;

const SampleMoleculesPage: React.FC<TProps> = () => {
  const Samples = [
    {
      title: 'test',
      contexts: 'test',
      node: <p>console log</p>,
      action: () => console.log('test'),
    },
  ];

  return (
    <div id={styles.container}>
      <div className={styles.contents}>
        <Typography variant="h5">Molecules</Typography>
        <Grid container={true} spacing={2}>
          {Samples.map((sample, i) => {
            return (
              <Grid
                key={i}
                item={true}
                xs={SAMPLE_PAGE_BREAK_POINT.xs}
                sm={SAMPLE_PAGE_BREAK_POINT.sm}
                md={SAMPLE_PAGE_BREAK_POINT.md}
                lg={SAMPLE_PAGE_BREAK_POINT.lg}
                xl={SAMPLE_PAGE_BREAK_POINT.lg}
              >
                <SampleCard {...sample} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}; // Render End

export default SampleMoleculesPage;
