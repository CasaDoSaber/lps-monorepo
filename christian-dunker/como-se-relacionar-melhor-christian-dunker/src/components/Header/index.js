import Logo from 'components/Logo';
import LogoMobile from 'components/LogoMobile';
import { Link } from 'react-scroll';
import { links } from 'services/usefulLinks';

import * as S from './styles';

const Header = () => {
  function goToMainPage() {
    window.open(links.homePage);
  }

  const options = ['AS AULAS', 'COM QUEM VOU APRENDER', 'SAIBA MAIS'];

  const optionsRender = options.map((option) => (
    <Link key={option} to={option} duration={500} smooth={true}>
      <S.Option isLast={option}>{option}</S.Option>
    </Link>
  ));

  return (
    <S.Wrapper>
      <S.LogoWrapper onClick={goToMainPage}>
        <Logo />
      </S.LogoWrapper>
      <S.LogoMobileWrapper onClick={goToMainPage}>
        <LogoMobile />
      </S.LogoMobileWrapper>
      <S.MenuWrapper>{optionsRender}</S.MenuWrapper>
    </S.Wrapper>
  );
};

export default Header;
