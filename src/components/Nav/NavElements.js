import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const NavContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 30px;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ scrollNav }) => (scrollNav ? "#111" : "transparent")};
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
export const LogoH1 = styled.h1`
  margin-left: 10px;
  color: #fff;
  cursor: pointer;
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.button`
  background: #00b997;
  border-radius: 5px;
  font-size: 1rem;
  color: #fff;
  border: none;
  white-space: nowrap;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Login = styled(LinkR)`
  text-decoration: none;
  margin-left: 24px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 18.75px;
`;
