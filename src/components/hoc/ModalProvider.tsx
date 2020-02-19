import React, { createContext, useState, useCallback } from 'react';

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
  const open = useCallback((v: string[]) => setState({ ...state, selectedValues: v, hasOpened: true }), [
    setState,
    state,
  ]);
  const close = useCallback(() => setState({ ...initialPropsState, hasOpened: false }), [setState]);
  return <ModalContext.Provider value={{ ...state, open, close }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalContextProvider };
