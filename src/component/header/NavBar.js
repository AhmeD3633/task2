import React from "react";
import logo from "../../media/image 2.png";
import Button from "../button/Button";

const NavBar = ({ links, activeLink, setActiveLink }) => {
  return (
    <div >
      <div className="navbar flex">
        {/* HEADER-LOGO */}
        <div className="flex-[0.25] flex justify-start items-center">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* HEADER-LINKS */}
        <div className="flex-[0.5] flex justify-center items-center">
          <ul className="menu menu-horizontal space-x-8 px-1 text-[18px] font-medium flex justify-center items-center">
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeLink === link.title ? 'active-link' : ''
                }`}
                onClick={() => setActiveLink(link.title)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end items-center flex-[0.25]">
          <Button title={"Get a Demo"}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
