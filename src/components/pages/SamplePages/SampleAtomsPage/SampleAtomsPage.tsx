import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './SampleAtomsPage.module.scss';

import SampleCard from '../../../molecules/SampleCard/SampleCard';
import { SAMPLE_PAGE_BREAK_POINT } from '../../../../lookups';
import { TSampleAtomsPageProps } from '../../../../containers/pages/samples/SampleAtomsPage';

type TProps = TSampleAtomsPageProps;

const SampleAtomsPage: React.FC<TProps> = ({ notification }) => {
  const Samples = [
    {
      title: 'notification(default)',
      contexts: 'notification',
      action: () => {
        notification.enqueueNotification('default', new Date().toUTCString());
      },
    },
    {
      title: 'notification(error)',
      contexts: 'notification',
      action: () => {
        notification.enqueueNotification('error', new Date().toUTCString());
      },
    },
    {
      title: 'notification(info)',
      contexts: 'notification',
      action: () => {
        notification.enqueueNotification('info', new Date().toUTCString());
      },
    },
    {
      title: 'notification(success)',
      contexts: 'notification',
      action: () => {
        notification.enqueueNotification('success', new Date().toUTCString());
      },
    },
    {
      title: 'notification(warning)',
      contexts: 'notification',
      action: () => {
        notification.enqueueNotification('warning', new Date().toUTCString());
      },
    },
  ];

  return (
    <div id={styles.container}>
      <div className={styles.contents}>
        <Typography variant="h5">Atoms</Typography>
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

export default SampleAtomsPage;
