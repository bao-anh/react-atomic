import React from 'react';
import { useTranslation } from 'react-i18next';
import { ATypography } from '../../../../components/atoms';
import './style.scss';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="ui-handler">
      <ATypography variant="title" level={1}>
        404
      </ATypography>
      <ATypography variant="title" level={2}>
        {t('handler.uiHandler.notFound')}
      </ATypography>
    </div>
  );
};

export default NotFound;
