import { NavLink } from 'react-router-dom';
import {
  ButtonsParagrafReg,
  LogoutButton,
  PagesParagraf,
} from '../Header/Header.styled';
import {
  HeaderMenuBackground,
  HeaderMenuContainer,
  MenuButtons,
  MenuNav,
  MenuOut,
  MenuP,
  MenuPeg,
} from './HeaderMenu.styled';
import sprite from '../sprite.svg';
import { useEffect, useState } from 'react';

const HeaderMenu = ({ close, isLogin, toLogOut }) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (isLogin) {
      setLogin(true);
    }
  }, [isLogin]);
  const handleBackgroundClick = event => {
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
          {login && (
            <NavLink to="/favorite">
              <PagesParagraf onClick={close}> Favorites</PagesParagraf>
            </NavLink>
          )}
        </MenuNav>
        {!login ? (
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
        ) : (
          <LogoutButton onClick={toLogOut}>
            <p>Log out</p>
          </LogoutButton>
        )}
      </HeaderMenuContainer>
    </HeaderMenuBackground>
  );
};
export default HeaderMenu;
