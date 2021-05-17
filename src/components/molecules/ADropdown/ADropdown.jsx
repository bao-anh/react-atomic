import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AButton } from '../../atoms';

const ADropDown = ({
  children,
  className,
  items,
  trigger,
  onClickButton,
  onClickItem
}) => {
  const menu = (
    <Menu onClick={onClickItem}>
      {
        items.map((item) => (
          <Menu.Item key={item.value} icon={item.icon ?? null}>
            {item.name}
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={[trigger]}
      className={className}
    >
      <AButton
        type="default"
        onClick={onClickButton}
      >
        {children}
        <DownOutlined />
      </AButton>
    </Dropdown>
  );
};

ADropDown.defaultProps = {
  items: [],
  trigger: 'hover',
  onClickButton: () => {},
  onClickItem: () => {},
  className: ''
};

ADropDown.propTypes = {
  items: PropTypes.array,
  trigger: PropTypes.string,
  onClickButton: PropTypes.func,
  onClickItem: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default ADropDown;
