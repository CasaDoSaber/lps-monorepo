import IconSocialNetwork from 'components/IconSocialNetwork';
import LogoFooter from 'components/LogoFooter';
import { PageLimit } from 'containers/PageLimit/styles';
import { forwardRef } from 'react';
import { links } from 'services/usefulLinks';
import * as S from './styles';

const Footer = forwardRef((props, ref ) => {

    function goTo(link) {
      window.open(link);
    }
  

  const socialNetworks = [
    {
      src: '/como-melhorar-relacoes/static/img/iconFacebook.svg',
      href: links.facebook,
    },
    {
      src: '/como-melhorar-relacoes/static/img/iconInstagram.svg',
      href: links.instagram,
    },
    {
      src: '/como-melhorar-relacoes/static/img/iconLinkedin.svg',
      href: links.linkedin,
    },
    {
      src: '/como-melhorar-relacoes/static/img/iconYoutube.svg',
      href: links.youtube,
    },
    {
      src: '/como-melhorar-relacoes/static/img/iconTwitter.svg',
      href: links.twitter,
    },
  ];

  function socialNetworksRender() {
    let socialNetworksArray = [];

    for (const social of socialNetworks) {
      socialNetworksArray.push(
        <IconSocialNetwork
          key={social.src}
          src={social.src}
          onClick={() => goTo(social.href)}
        />
      );
    }

    return socialNetworksArray;
  }

  return (
    <S.Wrapper ref={ref}>
      <PageLimit>
        <S.IconsWrapper>
          <LogoFooter />
          <S.SocialNetworkWrapper>
            {socialNetworksRender()}
          </S.SocialNetworkWrapper>
        </S.IconsWrapper>
      </PageLimit>
    </S.Wrapper>
  );
});

export default Footer;
