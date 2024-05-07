import { NavLink, Outlet } from "react-router-dom";
import {
  Buttons,
  HeaderContainer,
  Logo,
  LogoDiv,
  LogoSpan,
  Pages,
} from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoDiv>
          <NavLink to="/">
            <Logo>
              <LogoSpan>psychologists.</LogoSpan>services
            </Logo>
          </NavLink>
          <Pages>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/psychologists">Psychologists</NavLink>
            <NavLink to="/favorite"> Favorites</NavLink>
          </Pages>
        </LogoDiv>
        <Buttons>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/registration">Registration</NavLink>
        </Buttons>
      </HeaderContainer>
      <Outlet />
    </>
  );
};
export default Header;
