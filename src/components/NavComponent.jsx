import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const NavComponent = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isNavBg =
      !isHome &&
      ["/about", "/service", "/blog", "/contact"].includes(location.pathname);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <div>
      <div className={`header ${isHome ? "" : isNavBg ? "navBg" : "navComp"}`}>
        <div className="container">
          <div className="row">
            <div className=" logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="index.html">2Rings</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nav className="navigation navbar">
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav">
                    {menuItems.map((item, index) => (
                      <li
                        className={`nav-item ${
                          item.title === "Home" ? "active" : ""
                        }`}
                        key={index}
                      >
                        <Link className="nav-link" to={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    <li className="search">
                      <ImSearch />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
