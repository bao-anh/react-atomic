import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './style.scss';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const ANavBar = ({ location }) => {
  const renderSelectedItem = (order) => location.pathname.split('/')[order];
  return (
    <Menu
      defaultSelectedKeys={[`${renderSelectedItem(1)}-${renderSelectedItem(2)}`]}
      defaultOpenKeys={['components', renderSelectedItem(1)]}
      mode="inline"
    >
      <SubMenu key="components" icon={<AppstoreOutlined />} title="Components">
        <SubMenu key="atoms" title="Atoms">
          <Menu.Item key="atoms-button">
            <Link to="/atoms/button">Button</Link>
          </Menu.Item>
          <Menu.Item key="atoms-typography">
            <Link to="/atoms/typography">Typography</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="molecules" title="Molecules">
          <Menu.Item key="molecules-input-label">
            <Link to="/molecules/input-label">Input label</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="organisms" title="Organisms">
          <Menu.Item key="organisms-navbar">
            <Link to="/organisms/navbar">Navbar</Link>
          </Menu.Item>
          <Menu.Item key="organisms-header">
            <Link to="/organisms/header">Header</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="documents" title="Documents">
          <Menu.Item key="documents--button">
            <Link to="/documents/button">Button</Link>
          </Menu.Item>
          <Menu.Item key="documents-typography">
            <Link to="/documents/typography">Typography</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
        <Menu.Item key="settings-profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="settings-themes">
          <Link to="/themes">Themes</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default withRouter(ANavBar);

ANavBar.propTypes = {
  location: PropTypes.objectOf().isRequired
};
