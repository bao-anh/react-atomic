import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { setClose } from '../../../redux/actions/alert';
import { useAlert } from '../../../contexts/alert/alert';
import { ALERT_SET_CLOSE } from '../../../contexts/alert/type';
import './style.scss';

const timeout = 5000;

const AAlert = ({ alert, setAlertClose, className }) => {
  const { alertState, alertDispatch } = useAlert();
  useEffect(() => {
    if (alertState.isOpen || alert) {
      setTimeout(() => {
        alertDispatch({
          type: ALERT_SET_CLOSE,
          payload: {}
        });
        setAlertClose();
      },
      timeout);
    }
  }, [alertState.isOpen, alert.isOpen]);

  if (!(alertState.isOpen || alert.isOpen)) return null;
  return (
    <Alert
      className={`alert ${className}`}
      message={alertState.message || alert.message}
      type={alertState.type || alert.type}
      showIcon
      action={(
        <Button size="small" type="text">
          <CloseOutlined onClick={() => {
            alertDispatch({
              type: ALERT_SET_CLOSE,
              payload: {}
            });
            setAlertClose();
          }}
          />
        </Button>
      )}
    />
  );
};

AAlert.defaultProps = {
  setAlertClose: () => {},
  className: ''
};

AAlert.propTypes = {
  setAlertClose: PropTypes.func,
  alert: PropTypes.object.isRequired,
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  setAlertClose: bindActionCreators(setClose, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AAlert);
