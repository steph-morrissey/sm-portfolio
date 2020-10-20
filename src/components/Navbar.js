import React, { useState } from 'react';
import { Menu } from 'antd';

const Navbar = () => {
  const [current, setCurrent] = useState('about');

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='about'>About</Menu.Item>
      <Menu.Item key='projects'>Projects</Menu.Item>
      <Menu.Item key='contact'>Contact</Menu.Item>
    </Menu>
  );
};

export default Navbar;
