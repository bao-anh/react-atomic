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
            key: 'atoms',
            title: 'Atoms',
            childrens: [
              {
                key: 'atoms-button',
                title: 'Button',
                link: '/atoms/button'
              },
              {
                key: 'atoms-typography',
                title: 'Typography',
                link: '/atoms/typography'
              }
            ],
          },
          {
            key: 'molecules',
            title: 'Molecules',
            childrens: [
              {
                key: 'molecules-input-label',
                title: 'Input label',
                link: '/molecules/input-label'
              }
            ]
          },
          {
            key: 'organisms',
            title: 'Organisms',
            childrens: [
              {
                key: 'organisms-navbar',
                title: 'Navbar',
                link: '/organisms/navbar'
              },
              {
                key: 'organisms-header',
                title: 'Header',
                link: '/organisms/header'
              }
            ]
          },
          {
            key: 'documents',
            title: 'Documents',
            childrens: [
              {
                key: 'documents--button',
                title: 'Button',
                link: '/documents/button'
              },
              {
                key: 'documents-typography',
                title: 'Typography',
                link: '/documents/typography'
              }
            ]
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
