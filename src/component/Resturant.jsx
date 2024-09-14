import React, { useState } from "react";
import MenuCard from "./Menucard";
import Navbar from "./Basics/Navbar";
import Menu from "./menuApi.jsx";
import "./style.css";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => curElem.category)
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
    } else {
      const updatedList = Menu.filter((curElem) => curElem.category === category);
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
