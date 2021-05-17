import React from 'react';
import { Alert } from 'antd';
import { ADivider, AButton } from '../../../components/atoms';
import { useAlert } from '../../../contexts/alert/alert';
import { ALERT_SET_OPEN } from '../../../contexts/alert/type';
import './style.scss';

const AlertComponent = () => {
  const { alertDispatch } = useAlert();
  return (
    <React.Fragment>
      <ADivider orientation="left">
        Single
      </ADivider>
      <div className="alert-block-wrapper">
        <Alert type="info" message="Info" showIcon />
        <Alert type="success" message="Success" showIcon />
        <Alert type="warning" message="Warning" showIcon />
        <Alert type="error" message="Error" showIcon />
      </div>
      <ADivider orientation="left">
        Playground
      </ADivider>
      <div className="block-wrapper">
        <AButton
          type="primary"
          onClick={() => alertDispatch({
            type: ALERT_SET_OPEN,
            payload: {
              isOpen: true,
              type: 'success',
              message: 'Success'
            }
          })}
        >
          Success
        </AButton>
      </div>
    </React.Fragment>
  );
};

export default AlertComponent;
