import React, { useEffect, useState } from "react";
import {
  NavContiner,
  NavLeft,
  NavLogo,
  Logo,
  NavRight,
  Btn,
  Login,
  LogoH1,
} from "../../components/Nav/NavElements";
import logo from "../../images/logo.png";

const Nav = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <NavContiner scrollNav={scrollNav}>
      <NavLeft>
        <NavLogo>
          <Logo src={logo} />
          <LogoH1>Beema</LogoH1>
        </NavLogo>
      </NavLeft>
      <NavRight>
        <Btn>Get Started</Btn>
        <Login to="">Login</Login>
      </NavRight>
    </NavContiner>
  );
};

export default Nav;
