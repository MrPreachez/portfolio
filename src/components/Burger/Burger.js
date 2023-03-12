import React, { useState, useEffect } from "react";
import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import "./Burger.scss";
import burger from "../../assets/icons/icons8-hamburger-menu-48.png";
import { NavLink, useLocation } from "react-router-dom";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <img src={burger} alt="burger icon" className="burger__icon" />
      </div>
      <Menu
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={"entry"}
        onClose={() => setIsOpen(false)}
      >
        <NavLink to="/about" activeClassName="active">
          <Item itemKey={"details"} text={"About"} />
        </NavLink>

        <SubMenu title="Projects">
          <NavLink to="/project/melder" onClick={() => setIsOpen(false)}>
            <Item itemKey={"capstone"} text={"Melder"}></Item>
          </NavLink>
          <NavLink to="/project/inStock" onClick={() => setIsOpen(false)}>
            <Item itemKey={"program2"} text={"InStock"}></Item>
          </NavLink>
          <NavLink to="/project/brainflix" onClick={() => setIsOpen(false)}>
            <Item itemKey={"program1"} text={"BrainFlix"}></Item>
          </NavLink>
        </SubMenu>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          <Item itemKey={"email"} text={"Contact"}></Item>
        </NavLink>
      </Menu>
    </>
  );
}

export default Burger;
