import { useState } from 'react';
import { SIZES_ENUM, STATES_ENUM } from '../pages/components/Button/variable';

const usePlayGround = () => {
  const [size, setSize] = useState(SIZES_ENUM.MIDDLE.value);
  const [state, setState] = useState(STATES_ENUM.DEFAULT.value);

  const disabled = () => state === 'disabled';
  const loading = () => state === 'loading';
  const danger = () => state === 'danger';
  const readonly = () => state === 'readonly';
  const allowClear = () => state === 'allowClear';

  return {
    size,
    setSize,
    state,
    setState,
    disabled: disabled(),
    loading: loading(),
    danger: danger(),
    readonly: readonly(),
    allowClear: allowClear()
  };
};

export default usePlayGround;
