import React, { useState } from 'react';
import { ADivider, AButton } from '../../../components/atoms';
import { ASelectLabel } from '../../../components/molecules';
import './style.scss';
import {
  BUTTONS_ENUM,
  SIZES_ENUM,
  STATES_ENUM
} from './variable';

const Button = () => {
  const [size, setSize] = useState(SIZES_ENUM.MIDDLE.value);
  const [state, setState] = useState(STATES_ENUM.DEFAULT.value);

  const renderState = (currentState) => currentState === state;

  return (
    <React.Fragment>
      <ADivider orientation="left">
        Single
      </ADivider>
      <div className="block-wrapper">
        {
          Object.values(BUTTONS_ENUM).map((button) => (
            <AButton
              type={button.type}
              key={button.type}
              size={size}
              disabled={renderState(STATES_ENUM.DISABLED.value)}
              loading={renderState(STATES_ENUM.LOADING.value)}
              danger={renderState(STATES_ENUM.DANGER.value)}
            >
              {button.title}
            </AButton>
          ))
        }
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

export default Button;
