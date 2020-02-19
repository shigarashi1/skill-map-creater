import React, { useContext, useState, useEffect, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BaseDialog from '../organisms/dialogs/BaseDialog/BaseDialog';
import { ModalContext } from './ModalProvider';

type TProps = {
  changedValues: (v: string[]) => void;
};

const ReactHooksSampleDialog: React.FC<TProps> = ({ changedValues }) => {
  const { hasOpened, close, selectedValues } = useContext(ModalContext);
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    setValues(selectedValues);
  }, [selectedValues]);

  const onClose = useCallback(() => {
    close();
  }, [close]);

  const onSubmit = useCallback(() => {
    changedValues(values);
    close();
  }, [changedValues, values, close]);

  const onChecked = useCallback(
    (v: string) => () => {
      if (values.includes(v)) {
        setValues(values.filter((vv) => vv !== v));
      } else {
        setValues([...values, v]);
      }
    },
    [setValues, values],
  );

  return (
    <div>
      <BaseDialog
        hasOpen={hasOpened}
        onClose={onClose}
        title="Sample"
        buttonChildren={
          <div>
            <Button onClick={onSubmit} variant="contained">
              OK
            </Button>
          </div>
        }
      >
        <FormGroup row={true}>
          {['aaa', 'bbb', 'ccc', 'ddd', 'eee'].map((v, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  checked={values.includes(v)}
                  onChange={onChecked(v)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label={v}
            />
          ))}
        </FormGroup>
      </BaseDialog>
    </div>
  );
};

export default ReactHooksSampleDialog;
