import React, { useState, useContext, useCallback } from 'react';

import styles from './HomePage.module.scss';
import ReactHooksSampleDialog from '../../hoc/Modal';
import { ModalContext } from '../../hoc/ModalProvider';
import Button from '@material-ui/core/Button';

type TProps = {};

const HomePage: React.FC<TProps> = () => {
  const { open } = useContext(ModalContext);
  const [selectedValues, setSelectedValues] = useState(['aaa']);

  const onOpen = useCallback(() => {
    open(selectedValues);
  }, [open, selectedValues]);

  const onChanged = useCallback(
    (v: string[]) => {
      setSelectedValues(v);
    },
    [setSelectedValues],
  );

  return (
    <div className={styles.root}>
      {selectedValues.join(', ')}
      <Button onClick={onOpen}>表示</Button>
      <ReactHooksSampleDialog changedValues={onChanged} />
    </div>
  );
};

export default HomePage;
