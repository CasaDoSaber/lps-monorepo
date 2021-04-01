import Footer from 'components/Footer';
import Logo from 'components/Logo';
import * as S from './styles';

const Confirmation = () => {
  const props = {
    heroTexts: {
      thanks:
        'Obrigada pelo interesse no próximo curso gratuito da Casa do Saber com Christian Dunker:',
      title1: `COMO SE`,
      title2: `RELACIONAR`,
      title3: `MELHOR`,
      subtitle: `Sentimentos e Emoções em Tempos de Incerteza`,
      theme: 'A psicanálise de',
      author: `Christian Dunker`,
      instructions:
        'Acesse o e-mail enviado para sua conta cadastrada e confirme sua participação.',
    },
  };

  const thankYouRepeat = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ].map((thanks, index) => <S.ThankYou key={index}>OBRIGADA</S.ThankYou>);

  return (
    <>
      <S.Wrapper>
        <Logo />
        <S.Thanks>{props.heroTexts.thanks}</S.Thanks>
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
        </S.DetailsWrapper>
        <S.Instructions>{props.heroTexts.instructions}</S.Instructions>
      </S.Wrapper>
      <S.ThankYouBackground>{thankYouRepeat}</S.ThankYouBackground>
    </>
  );
};

export default Confirmation;
