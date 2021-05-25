import React, { useState } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import { AIconLabel } from '../../../components/molecules';
import { ASelect, ATypography, AButton } from '../../../components/atoms';
import { LANGUAGES_ENUM } from './variable';
import { getLanguage, setLanguage as setLanguageToLocalStorage } from '../../../utils/storageUtils';

const Language = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(getLanguage());

  const onChangeLanguage = () => {
    setLanguageToLocalStorage(language);
    window.location.reload();
  };

  return (
    <div className="setting-general-grid">
      <AIconLabel
        icon={<GlobalOutlined />}
        label={t('settings.general.language')}
        className="settings-general-left"
      />
      <div className="settings-general-right">
        <ATypography variant="title" level={3}>
          {t('settings.general.language.title')}
        </ATypography>
        <ATypography>
          {t('settings.general.language.subTitle')}
        </ATypography>
        <ASelect
          items={Object.values(LANGUAGES_ENUM)}
          defaultValue={language}
          onChange={(e) => setLanguage(e)}
          className="settings-general-select"
        />
        <AButton
          onClick={onChangeLanguage}
          className="settings-general-submit"
        >
          {t('settings.general.language.submit')}
        </AButton>
      </div>
    </div>
  );
};

export default Language;
