import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {menuList.map((curElem, index) => (
          <button 
            key={index}
            className="btn-group__item"
            onClick={() => filterItem(curElem)}
          >
            {curElem}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
