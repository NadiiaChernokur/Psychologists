import { NavLink } from "react-router-dom";
import {
  Buttons,
  ButtonsParagraf,
  ButtonsParagrafReg,
  Logo,
  LogoDiv,
  LogoSpan,
  Pages,
  PagesParagraf,
} from "../Header/Header.styled";
import {
  HeaderMenuBackground,
  HeaderMenuContainer,
  MenuButtons,
  MenuNav,
  MenuP,
  MenuPages,
  MenuPeg,
} from "./HeaderMenu.styled";

const HeaderMenu = () => {
  return (
    <HeaderMenuBackground>
      <HeaderMenuContainer>
        {/* <MenuPages> */}
        <MenuNav>
          <NavLink to="/">
            <MenuP>Home</MenuP>
          </NavLink>
          <NavLink to="/psychologists">
            <MenuP> Psychologists</MenuP>
          </NavLink>
        </MenuNav>
        {/* </MenuPages> */}
        <MenuButtons>
          <NavLink to="/login">
            <MenuPeg>Log In</MenuPeg>
          </NavLink>
          <NavLink to="/registration">
            <ButtonsParagrafReg> Registration</ButtonsParagrafReg>
          </NavLink>
        </MenuButtons>
      </HeaderMenuContainer>
    </HeaderMenuBackground>
  );
};
export default HeaderMenu;
