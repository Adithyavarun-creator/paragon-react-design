import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as MenuSVG } from "../../assets/navImages/menu.svg";
import { ReactComponent as CloseSVG } from "../../assets/navImages/close.svg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navContainer">
        <div className="navCompanyname">
          <span>Company</span>
        </div>
        <div className="navCompanyLists">
          <ScrollLink
            activeClass="active"
            to="#"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            delay={1000}
          >
            <li to="#" className="navCompanyList">
              Home
            </li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            delay={1000}
          >
            <li to="about" className="navCompanyList">
              About
            </li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            delay={1000}
          >
            <li className="navCompanyList">Work</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="blogs"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            delay={800}
          >
            <li className="navCompanyList">My Blog</li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            delay={1000}
          >
            <li className="navCompanyList">Contact</li>
          </ScrollLink>
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
