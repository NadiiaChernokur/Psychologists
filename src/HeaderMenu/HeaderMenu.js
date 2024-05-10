import { NavLink } from "react-router-dom";
import { ButtonsParagrafReg } from "../Header/Header.styled";
import {
  HeaderMenuBackground,
  HeaderMenuContainer,
  MenuButtons,
  MenuNav,
  MenuOut,
  MenuP,
  MenuPeg,
} from "./HeaderMenu.styled";
import sprite from "../sprite.svg";

const HeaderMenu = ({ close }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <HeaderMenuBackground onClick={handleBackgroundClick}>
      <HeaderMenuContainer>
        <MenuOut onClick={close}>
          <svg width="32" height="32">
            <use href={`${sprite}#out`}></use>
          </svg>
        </MenuOut>
        <MenuNav>
          <NavLink to="/">
            <MenuP onClick={close}>Home</MenuP>
          </NavLink>
          <NavLink to="/psychologists">
            <MenuP onClick={close}> Psychologists</MenuP>
          </NavLink>
        </MenuNav>

        <MenuButtons>
          <NavLink to="/login">
            <MenuPeg onClick={close}>Log In</MenuPeg>
          </NavLink>
          <NavLink to="/registration">
            <ButtonsParagrafReg onClick={close}>
              Registration
            </ButtonsParagrafReg>
          </NavLink>
        </MenuButtons>
      </HeaderMenuContainer>
    </HeaderMenuBackground>
  );
};
export default HeaderMenu;
