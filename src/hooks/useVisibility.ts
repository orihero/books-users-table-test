import {useCallback, useMemo, useState} from 'react';

const useVisibility = (initialState?: boolean) => {
  const [visible, setVisible] = useState(initialState || false);

  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => setVisible(false), []);
  const toggle = useCallback(() => setVisible(prev => !prev), []);

  return useMemo(
    () => ({
      visible,
      show,
      hide,
      toggle,
    }),
    [visible, show, hide, toggle],
  );
};

export type UseVisibility = {
  visible: boolean;
  show: (id?: number) => void;
  hide: () => void;
  toggle: () => void;
};

export default useVisibility;
