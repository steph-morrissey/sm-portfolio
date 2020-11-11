import React, { useState } from 'react';
import { Menu } from 'antd';
const Navbar = () => {
  const [current, setCurrent] = useState('about');

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='about'>
        <a href='#about'>About</a>
      </Menu.Item>
      <Menu.Item key='projects'>
        <a href='#projects'>Projects</a>
      </Menu.Item>
      <Menu.Item key='contact'>
        <a href='#connect'>Connect</a>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
