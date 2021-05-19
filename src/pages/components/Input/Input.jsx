import React from 'react';
import { AInput, ADivider } from '../../../components/atoms';
import { AInputLabel, ASelectLabel } from '../../../components/molecules';
import './style.scss';
import {
  SIZES_ENUM,
  STATES_ENUM
} from './variable';
import usePlayGround from '../../../hooks/usePlayGround';

const Input = () => {
  const {
    state,
    setState,
    size,
    setSize,
    disabled,
    readonly,
    allowClear
  } = usePlayGround();

  return (
    <React.Fragment>
      <ADivider orientation="left">
        Single
      </ADivider>
      <div className="input-block-wrapper">
        <AInput
          placeholder="Write your text here..."
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
        <AInput
          placeholder="Write your password here..."
          type="password"
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
        <AInput
          placeholder="Write your textarea here..."
          type="textarea"
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
      </div>
      <ADivider orientation="left">
        Single + Label
      </ADivider>
      <div className="input-block-wrapper">
        <AInputLabel
          label="Input"
          className="full-width"
          placeholder="Write your input here..."
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
        <AInputLabel
          label="Password"
          className="full-width"
          placeholder="Write your password here..."
          type="password"
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
        <AInputLabel
          label="Textarea"
          className="full-width"
          placeholder="Write your textarea here..."
          type="textarea"
          disabled={disabled}
          allowClear={allowClear}
          size={size}
          readonly={readonly}
        />
      </div>
      <ADivider orientation="left">
        Playground
      </ADivider>
      <div className="block-wrapper">
        <ASelectLabel
          label="Size"
          className="playground-item"
          items={Object.values(SIZES_ENUM)}
          defaultValue={size}
          onChange={(value) => setSize(value)}
        />
        <ASelectLabel
          label="State"
          className="playground-item"
          items={Object.values(STATES_ENUM)}
          defaultValue={state}
          onChange={(value) => setState(value)}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
