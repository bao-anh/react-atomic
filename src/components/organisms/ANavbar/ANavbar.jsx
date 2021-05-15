import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './style.scss';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const NavBar = () => (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['button']}
    defaultOpenKeys={['components', 'atoms']}
    mode="inline"
  >
    <SubMenu key="components" icon={<AppstoreOutlined />} title="Components">
      <SubMenu key="atoms" title="Atoms">
        <Menu.Item key="button">
          <Link to="/button">Button</Link>
        </Menu.Item>
        <Menu.Item key="typography">
          <Link to="/typography">Typography</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="molecules" title="Molecules">
        <Menu.Item key="input-label">
          <Link to="/input-label">Input label</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="organisms" title="Organisms">
        <Menu.Item key="navbar">
          <Link to="/navbar">Navbar</Link>
        </Menu.Item>
        <Menu.Item key="header">
          <Link to="/header">Header</Link>
        </Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="themes">
        <Link to="/themes">Themes</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
);

export default NavBar;
