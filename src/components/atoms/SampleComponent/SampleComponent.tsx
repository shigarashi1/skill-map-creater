import React from 'react';

import styles from './SampleComponent.module.scss';

type TProps = {
  text: string;
};

const SampleComponent: React.FC<TProps> = ({ text }) => {
  return (
    <React.Fragment>
      <div id={styles.root}>
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default SampleComponent;
