import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const onOk = () => {
    removeToken();
    history.push('/login');
    setModalClose();
  };

  return (
    <AModal
      title={`${t('handler.responseHandler.title')}`}
      visible={modal.isOpen}
      onOk={onOk}
      cancelButtonProps={{ style: { display: 'none' } }}
      closable={false}
      okText={`${t('handler.responseHandler.okText')}`}
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
