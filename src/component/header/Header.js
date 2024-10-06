import React, { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null); // Track the active link
  
  const links = [
    { title: "Why JustGo?", href: "/why justGo" },
    { title: "Features", href: "/Features" },
    { title: "Community", href: "/Community" },
    { title: "JustGo Blog", href: "/JustGo Blog" },
    { title: "Pricing", href: "/Pricing" },
  ];

  return (
    <div className="absolute w-full left-0 top-0 px-32 z-10">
      <NavBar links={links} activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
};

export default Header;
