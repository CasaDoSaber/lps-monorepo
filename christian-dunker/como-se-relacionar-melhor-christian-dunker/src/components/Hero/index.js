import * as S from './styles';
import Image from 'next/image';

const Hero = () => {
  const props = {
    heroTexts: {
      title1: `COMO SE`,
      title2: `RELACIONAR`,
      title3: `MELHOR`,
      subtitle: `Sentimentos e Emoções em Tempos de Incerteza`,
      theme: 'A psicanálise de',
      author: `Christian Dunker`,
    },
  };
  const infos = [
    {
      text: '4 AULAS',
    },
    {
      text: 'AO VIVO',
    },
    {
      text: 'ONLINE',
    },
  ];

  const infosRender = infos.map((info, index) => (
    <S.ClassInfo key={index} position={index}>
      {info.text}
    </S.ClassInfo>
  ));

  const gratuitoRender = [1, 2, 3, 4, 5].map((info, index) => (
    <S.Gratuito position={info} key={index} times={info}>
      GRATUITO
    </S.Gratuito>
  ));

  return (
    <S.HeroBlock>
      <S.TitleWrapper>
        <S.Title>{props.heroTexts.title1}</S.Title>
        <S.Title>{props.heroTexts.title2}</S.Title>
        <S.Title>{props.heroTexts.title3}</S.Title>
        <S.SubTitle>{props.heroTexts.subtitle}</S.SubTitle>
      </S.TitleWrapper>
      <S.DetailsWrapper>
        <S.AuthorWrapper>
          <S.Theme>{props.heroTexts.theme}</S.Theme>
          <S.Author>{props.heroTexts.author}</S.Author>
        </S.AuthorWrapper>
        <S.Informations>{infosRender}</S.Informations>
        <S.DateWrapper>
          <S.Date>26 a 29 de abril</S.Date>
          <S.Time>Às 20h</S.Time>
        </S.DateWrapper>
        <S.EmptySpace />
      </S.DetailsWrapper>
      <S.HeroWrapper>
        <S.Hero
          src="/como-melhorar-relacoes/static/img/hero.webp"
          alt="Foto de Christian Dunker sorrindo"
        ></S.Hero>
        <S.BlueRectangle></S.BlueRectangle>
        <S.GratuitoWrapper>{gratuitoRender}</S.GratuitoWrapper>
      </S.HeroWrapper>
    </S.HeroBlock>
  );
};

export default Hero;
