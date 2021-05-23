import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalAction from '../../../../redux/actions/modal';
import { AModal } from '../../../../components/atoms';
import { removeToken } from '../../../../utils/storageUtils';

const ResponseHandler = ({
  modal,
  setModalClose,
}) => {
  const history = useHistory();
  const onOk = () => {
    removeToken();
    history.push('/');
    setModalClose();
  };

  return (
    <AModal
      title="Server response"
      visible={modal.isOpen}
      onOk={onOk}
      cancelButtonProps={{ style: { display: 'none' } }}
      closable={false}
      okText="Login"
    >
      {modal.content}
    </AModal>
  );
};

ResponseHandler.propTypes = {
  modal: PropTypes.object.isRequired,
  setModalClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  setModalClose: bindActionCreators(modalAction.setClose, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseHandler);
