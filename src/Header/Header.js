import {
  Button,
  Buttons,
  HeaderContainer,
  HeaderParagraf,
  Logo,
  LogoDiv,
  LogoSpan,
  Pages,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <Logo>
          <LogoSpan>psychologists.</LogoSpan>services
        </Logo>
        <Pages>
          <HeaderParagraf>Home</HeaderParagraf>
          <HeaderParagraf>Psychologists</HeaderParagraf>
        </Pages>
      </LogoDiv>
      <Buttons>
        <Button>Log In</Button>
        <Button>Registration</Button>
      </Buttons>
    </HeaderContainer>
  );
};
export default Header;
