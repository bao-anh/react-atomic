import React from 'react';
import { Alert } from 'antd';
import { ADivider, AButton } from '../../../components/atoms';
import { useAlert } from '../../../contexts/alert/alert';
import { ALERT_SET_OPEN } from '../../../contexts/alert/type';
import { ALERTS_ENUM } from './variable';
import './style.scss';

const AlertComponent = () => {
  const { alertDispatch } = useAlert();
  return (
    <React.Fragment>
      <ADivider orientation="left">
        Single
      </ADivider>
      <div className="alert-block-wrapper">
        {
          Object.values(ALERTS_ENUM).map((alert) => (
            <Alert type={alert.type} message={alert.message} showIcon />
          ))
        }
      </div>
      <ADivider orientation="left">
        Playground
      </ADivider>
      <div className="block-wrapper">
        {
          Object.values(ALERTS_ENUM).map((alert) => (
            <AButton
              type="default"
              onClick={() => alertDispatch({
                type: ALERT_SET_OPEN,
                payload: {
                  isOpen: true,
                  type: alert.type,
                  message: alert.message
                }
              })}
            >
              {alert.message}
            </AButton>
          ))
        }
      </div>
    </React.Fragment>
  );
};

export default AlertComponent;
