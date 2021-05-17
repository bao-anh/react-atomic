import React, { useEffect } from 'react';
import { Alert, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useAlert } from '../../../contexts/alert/alert';
import { ALERT_SET_CLOSE } from '../../../contexts/alert/type';
import './style.scss';

const timeout = 2000;

const AAlert = () => {
  const { alertState, alertDispatch } = useAlert();
  useEffect(() => {
    if (alertState.isOpen) {
      setTimeout(() => {
        alertDispatch({
          type: ALERT_SET_CLOSE,
          payload: {}
        });
      },
      timeout);
    }
  }, [alertState.isOpen]);

  if (!alertState.isOpen) return null;
  return (
    <Alert
      className="alert"
      message={alertState.message}
      type={alertState.type}
      showIcon
      action={(
        <Button size="small" type="text">
          <CloseOutlined onClick={() => alertDispatch({
            type: ALERT_SET_CLOSE,
            payload: {}
          })}
          />
        </Button>
      )}
    />
  );
};

export default AAlert;
