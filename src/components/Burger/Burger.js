import React, { useState } from 'react';
import { Menu, SubMenu, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import './Burger.scss'
import burger from "../../assets/icons/icons8-hamburger-menu-48.png"

function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <img src={burger} alt="burger icon" className='burger__icon'/></div>
      <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <Item itemKey={'manage'} text={'User Management'}></Item>
        <Item itemKey={'user'} text={'User Center'}></Item>
        <SubMenu title="Union Management">
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default Burger;