import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as MenuSVG } from "../../assets/navImages/menu.svg";
import { ReactComponent as CloseSVG } from "../../assets/navImages/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navContainer">
        <div className="navCompanyname">
          <span>Company</span>
        </div>
        <div className="navCompanyLists">
          <li to="#" className="navCompanyList">
            Home
          </li>
          <li to="about" className="navCompanyList">
            About
          </li>
          <li className="navCompanyList">Work</li>
          <li className="navCompanyList">My Blog</li>
          <li className="navCompanyList">Contact</li>
        </div>
        <div className="navBuy">
          <button className="navBuyButton">Buy Now</button>
        </div>
      </nav>

      <div className="navmobileMenubox">
        <MenuSVG
          className="navmobileMenuSvg"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <>
          <div className="navmobileContainer">
            <div className="navmobileClose">
              <CloseSVG
                className="navmobileCloseSvg"
                onClick={() => setToggle(false)}
              />
            </div>
            <div className="navmobileLinktexts">
              <span className="navmobileLinktext">Menu</span>
            </div>
            <div>
              <span className="navmobileLinktext">About</span>
            </div>
            <div>
              <span className="navmobileLinktext">Work</span>
            </div>
            <div>
              <span className="navmobileLinktext">Contact</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
