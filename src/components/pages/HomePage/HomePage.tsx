import React, { useState, useContext } from 'react';

import styles from './HomePage.module.scss';
import ReactHooksSampleDialog from '../../hoc/Modal';
import { ModalContext } from '../../hoc/ModalProvider';
import Button from '@material-ui/core/Button';

type TProps = {};

const HomePage: React.FC<TProps> = () => {
  const { open } = useContext(ModalContext);
  const [selectedValues, setSelectedValues] = useState(['aaa']);
  const onOpen = () => {
    open(selectedValues);
  };
  const onChanged = (v: string[]) => {
    setSelectedValues(v);
  };
  return (
    <div className={styles.root}>
      {selectedValues.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
      <Button onClick={onOpen}>表示</Button>
      <ReactHooksSampleDialog changedValues={onChanged} />
    </div>
  );
};

export default HomePage;
