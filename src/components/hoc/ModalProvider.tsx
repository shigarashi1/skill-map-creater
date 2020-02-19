import React, { createContext, useState } from 'react';

type TProps = {
  open: (values: string[]) => void;
  close: () => void;
};

type TState = {
  hasOpened: boolean;
  selectedValues: string[];
};

const initialPropsState: TProps & TState = {
  open: () => {},
  close: () => {},
  hasOpened: false,
  selectedValues: [],
};

// type S = typeof initialPropsState;
// type NewStateAction = Partial<S> | ((prevState: S) => Partial<S>);
// type ContextValue = {
//   globalState: S;
//   setGlobalState: (newState: NewStateAction) => void;
// };

const ModalContext = createContext(initialPropsState);

const ModalContextProvider: React.FC = ({ children = null }) => {
  const [state, setState] = useState({ ...initialPropsState });
  const open = (v: string[]) => setState({ ...state, selectedValues: v, hasOpened: true });
  const close = () => setState({ ...initialPropsState, hasOpened: false });
  return <ModalContext.Provider value={{ ...state, open, close }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalContextProvider };
