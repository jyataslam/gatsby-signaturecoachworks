import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleSearchClick = e => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`header_01 ${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between align-items-center">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
              <Link to="/">
                <img src={LogoImage.light} alt="signature coachworks logo" />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
              <ul>
                {NavLinks.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        undefined !== links.subItems
                          ? "menu-item-has-children"
                          : ""
                      }`}
                    >
                      <Link to={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link to={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div className="navigator text-right">
              <Link className="common_btn red_bg nav__quote-btn" to="/contact">
                <span>Get a quote</span>
              </Link>
              <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              <a
                id="open-overlay-nav"
                className="menu hamburger d-lg-none"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderOne;
