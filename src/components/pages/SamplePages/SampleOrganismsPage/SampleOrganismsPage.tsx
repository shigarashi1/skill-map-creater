import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './SampleOrganismsPage.module.scss';

import { SampleCard } from '../../../molecules';
import { SAMPLE_PAGE_BREAK_POINT } from '../../../../lookups';
import { TSampleOrganismsPageProps } from '../../../../containers/pages';

type TProps = TSampleOrganismsPageProps;

const SampleOrganismsPage: React.FC<TProps> = ({ infoDialog, okCancelDialog, yesNoDialog }) => {
  const Samples = [
    {
      title: 'infoDialog',
      contexts: 'infoDialog show',
      action: () => {
        infoDialog.show({ title: 'infoDialog', context: 'infoinfoinfoinfoinfo', close: () => {} });
      },
    },
    {
      title: 'okCancelDialog',
      contexts: 'okCancelDialog show',
      action: () => {
        okCancelDialog.show({
          title: 'okCancelDialog',
          context: 'okCancelokCancelokCancelokCancelokCancelokCancel',
          ok: () => console.log('ok'),
          cancel: () => console.log('cancel'),
          close: () => {},
        });
      },
    },
    {
      title: 'yesNoDialog',
      contexts: 'yesNoDialog show',
      action: () => {
        yesNoDialog.show({
          title: 'yesNoDialog',
          context: 'yesNoyesNoyesNoyesNoyesNoyesNoyesNoyesNoyesNoyesNo',
          yes: () => console.log('yes'),
          no: () => console.log('no'),
          close: () => {},
        });
      },
    },
  ];

  return (
    <div id={styles.container}>
      <div className={styles.contents}>
        <Typography variant="h5">Organisms</Typography>
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

export default SampleOrganismsPage;
