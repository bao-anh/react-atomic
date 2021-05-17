import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './style.scss';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { AMenu } from '../../atoms';

const ANavBar = ({ location }) => {
  const handleGetSelectedItem = (order) => location.pathname.split('/')[order];

  const [menu] = useState({
    renderDefaultSelectedKeys: [`${handleGetSelectedItem(1)}-${handleGetSelectedItem(2)}`],
    renderDefaultOpenKey: ['components', handleGetSelectedItem(1)],
    mode: 'inline',
    childrens: [
      {
        key: 'components',
        title: 'Components',
        icon: <AppstoreOutlined />,
        childrens: [
          {
            key: 'components-button',
            title: 'Button',
            link: '/components/button'
          },
          {
            key: 'components-typography',
            title: 'Typography',
            link: '/components/typography'
          },
          {
            key: 'components-alert',
            title: 'Alert',
            link: '/components/alert'
          }
        ]
      },
      {
        key: 'settings',
        title: 'Settings',
        icon: <SettingOutlined />,
        childrens: [
          {
            key: 'settings-profile',
            title: 'Profile',
            link: '/settings/profile'
          },
          {
            key: 'settings-themes',
            title: 'Themes',
            link: '/settings/themes'
          }
        ]
      }
    ]
  });

  return (
    <AMenu menu={menu} />
  );
};

export default withRouter(ANavBar);

ANavBar.propTypes = {
  location: PropTypes.any.isRequired
};
