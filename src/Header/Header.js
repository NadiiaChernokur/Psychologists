import { NavLink, Outlet } from "react-router-dom";
import {
  Buttons,
  HeaderContainer,
  Logo,
  LogoDiv,
  LogoSpan,
  LogoutButton,
  LogoutDiv,
  Name,
  OutletDiv,
  Pages,
  People,
} from "./Header.styled";
import sprite from "../sprite.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
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
        <LogoutDiv>
          <People width="16" height="16">
            <use href={`${sprite}#Vector`}></use>
          </People>
          <Name>{user.name}</Name>
          <LogoutButton>
            <p>Log out</p>
          </LogoutButton>
        </LogoutDiv>
      </HeaderContainer>
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </>
  );
};
export default Header;
