import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Buttons,
  ButtonsParagraf,
  ButtonsParagrafReg,
  HeaderContainer,
  Logo,
  LogoDiv,
  LogoSpan,
  LogoutButton,
  LogoutDiv,
  Name,
  OutletDiv,
  Pages,
  PagesParagraf,
  People,
} from "./Header.styled";
import sprite from "../sprite.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isToken, setIsToken] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    // if (user) {
    //   setIsToken(true);
    // }
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
    navigate("/");
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
          <svg width="26" height="26" onClick={openModal}>
            <use href={`${sprite}#Hamburger`}></use>
          </svg>
          {isModalOpen && <HeaderMenu close={closeModal} />}
          <Pages>
            <NavLink to="/">
              <PagesParagraf>Home</PagesParagraf>
            </NavLink>
            <NavLink to="/psychologists">
              <PagesParagraf> Psychologists</PagesParagraf>
            </NavLink>
            {isToken && (
              <NavLink to="/favorite">
                <PagesParagraf> Favorites</PagesParagraf>
              </NavLink>
            )}
          </Pages>
        </LogoDiv>
        {!isToken ? (
          <Buttons>
            <NavLink to="/login">
              <ButtonsParagraf>Log In</ButtonsParagraf>
            </NavLink>
            <NavLink to="/registration">
              <ButtonsParagrafReg> Registration</ButtonsParagrafReg>
            </NavLink>
          </Buttons>
        ) : (
          <LogoutDiv>
            <People width="16" height="16">
              <use href={`${sprite}#Vector`}></use>
            </People>
            <Name>{user.name}</Name>
            <LogoutButton onClick={toLogOut}>
              <p>Log out</p>
            </LogoutButton>
          </LogoutDiv>
        )}
      </HeaderContainer>
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </>
  );
};
export default Header;
