import { useCallback, useState } from "react";

export interface BooleanState {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  setValue: (value: boolean) => void;
}

export const useBoolean = (defaultState = false): BooleanState => {
  const [state, setState] = useState(defaultState);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);
  const setFalse = useCallback(() => {
    setState(false);
  }, []);
  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return {
    value: state,
    setTrue,
    setFalse,
    setValue: setState,
    toggle,
  };
};
