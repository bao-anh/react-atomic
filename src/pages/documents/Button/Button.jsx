import React, { useState } from 'react';
import { ADivider, AButton, ASelect } from '../../../components/atoms';
import './style.scss';
import { SIZES_ENUM } from './variable';

const Button = () => {
  const [size, setSize] = useState(SIZES_ENUM.MIDDLE.value);

  return (
    <React.Fragment>
      <ADivider orientation="left">
        Single
      </ADivider>
      <div className="block-wrapper">
        <AButton type="primary" size={size}>
          Primary
        </AButton>
        <AButton type="ghost" size={size}>
          Ghost
        </AButton>
        <AButton type="dashed" size={size}>
          Dashed
        </AButton>
        <AButton type="link" size={size}>
          Link
        </AButton>
        <AButton type="text" size={size}>
          Text
        </AButton>
        <AButton type="default" size={size}>
          Default
        </AButton>
      </div>
      <ADivider orientation="left">
        Playground
      </ADivider>
      <div className="d-flex align-center mb-6">
        <ASelect
          className="playground-item"
          items={Object.values(SIZES_ENUM)}
          defaultValue={size}
          onChange={(value) => setSize(value)}
        />
      </div>
    </React.Fragment>
  );
};

export default Button;
