import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const AMenu = ({ menu }) => {
  const renderMenuContent = (menuContent) => menuContent.childrens
    .map((data) => {
      if (data.childrens) {
        return (
          <SubMenu
            key={data.key}
            title={data.title}
            icon={data.icon ?? null}
          >
            {renderMenuContent(data)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={data.key}>
          <Link to={data.link}>{data.title}</Link>
        </Menu.Item>
      );
    });

  return (
    <Menu
      defaultSelectedKeys={menu.renderDefaultSelectedKeys}
      defaultOpenKeys={menu.renderDefaultOpenKey}
      mode={menu.mode}
    >
      {renderMenuContent(menu)}
    </Menu>
  );
};

export default AMenu;

AMenu.propTypes = {
  menu: PropTypes.any.isRequired
};
