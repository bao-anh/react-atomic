import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const AModal = ({
  title,
  visible,
  onOk,
  onCancel,
  children,
  closable,
  okText,
  cancelButtonProps
}) => (
  <Modal
    title={title}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    cancelButtonProps={cancelButtonProps}
    closable={closable}
    okText={okText}
    centered
  >
    {children}
  </Modal>
);

AModal.defaultProps = {
  title: '',
  visible: false,
  onOk: () => {},
  onCancel: () => {},
  closable: true,
  cancelButtonProps: '',
  okText: 'OK'
};

AModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.any.isRequired,
  closable: PropTypes.bool,
  cancelButtonProps: PropTypes.any,
  okText: PropTypes.string
};

export default AModal;
