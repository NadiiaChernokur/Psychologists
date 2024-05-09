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

const HeaderMenu = ({ close }) => {
  return (
    <HeaderMenuBackground>
      <HeaderMenuContainer>
        {/* <MenuPages> */}
        <MenuNav>
          <NavLink to="/">
            <MenuP onClick={close}>Home</MenuP>
          </NavLink>
          <NavLink to="/psychologists">
            <MenuP onClick={close}> Psychologists</MenuP>
          </NavLink>
        </MenuNav>
        {/* </MenuPages> */}
        <MenuButtons>
          <NavLink to="/login">
            <MenuPeg onClick={close}>Log In</MenuPeg>
          </NavLink>
          <NavLink to="/registration">
            <ButtonsParagrafReg onClick={close}>
              {" "}
              Registration
            </ButtonsParagrafReg>
          </NavLink>
        </MenuButtons>
      </HeaderMenuContainer>
    </HeaderMenuBackground>
  );
};
export default HeaderMenu;
