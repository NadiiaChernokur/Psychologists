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
import { useEffect, useState } from "react";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isToken, setIsToken] = useState(false);
  console.log(user);
  useEffect(() => {
    if (user) {
      setIsToken(true);
    }
    const getToken = JSON.parse(localStorage.getItem("tokenPsych"));
    console.log(getToken);
    if (getToken && getToken.length !== 0) {
      console.log("9999999999");
      setIsToken(true);
    }
    console.log(getToken);
  }, [user]);
  const toLogOut = () => {
    setIsToken(false);
    localStorage.setItem("tokenPsych", JSON.stringify([]));
  };

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
            {isToken && <NavLink to="/favorite"> Favorites</NavLink>}
          </Pages>
        </LogoDiv>
        {!isToken && (
          <Buttons>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/registration">Registration</NavLink>
          </Buttons>
        )}
        <LogoutDiv>
          <People width="16" height="16">
            <use href={`${sprite}#Vector`}></use>
          </People>
          <Name>{user.name}</Name>
          <LogoutButton onClick={toLogOut}>
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
