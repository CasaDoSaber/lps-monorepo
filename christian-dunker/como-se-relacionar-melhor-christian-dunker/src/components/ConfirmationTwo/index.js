import ClassesList from 'components/ClassesList';
import Footer from 'components/Footer';
import Logo from 'components/Logo';
import * as S from './styles';

const ConfirmationTwo = () => {
  const props = {
    thankYouTexts: {
      congrats: 'Parabéns!',
      thanks: 'Sua inscrição está confirmada.',
      instructions:
        'Fique atento ao seu e-mail, enviaremos todas as informações de acesso por lá.',
      title1: `COMO SE`,
      title2: `RELACIONAR`,
      title3: `MELHOR`,
      subtitle: `Sentimentos e Emoções em Tempos de Incerteza`,
      theme: 'A psicanálise de',
      author: `Christian Dunker`,
      aulas: [
        {
          icon: '/como-melhorar-relacoes/static/img/aula1.svg',
          aula: 'AULA 1',
          title: 'A PARTILHA DOS AFETOS',
          description:
            'Como transformar e compartilhar nossos afetos para viver na contemporaneidade?',
          date: 'Segunda-feira, 26 de abril às 20h',
        },
        {
          icon: '/como-melhorar-relacoes/static/img/aula2.svg',
          aula: 'AULA 2',
          title: 'O PODER DA ESCUTA',
          description:
            'O que se ganha ao aperfeiçoar sua escuta de si, do outro e como fazer isso.',
          date: 'Terça-feira, 27 de abril às 20h',
        },
        {
          icon: '/como-melhorar-relacoes/static/img/aula3.svg',
          aula: 'AULA 3',
          title: 'O MEDO E O SOFRIMENTO',
          description:
            'Os danos que nosso modo e vida causa à psique.  Há saída para essa situação?',
          date: 'Quarta-feira, 28 de abril às 20h',
        },
        {
          icon: '/como-melhorar-relacoes/static/img/aula4.svg',
          aula: 'AULA 4',
          title: 'O AMOR E SUAS TRANSFORMAÇÕES',
          description:
            'As faces do amor na atualidade. Amor e liberdade, amor e traição, amor e sociedade: compreenda essas relações pela ótica da psicanálise.',
          date: 'Quinta-feira, 29 de abril às 20h',
        },
      ],
    },
  };

  return (
    <>
      <S.Wrapper>
        <S.BlueSquare />
        <Logo />
        <S.Congrats>{props.thankYouTexts.congrats}</S.Congrats>
        <S.Thanks>{props.thankYouTexts.thanks}</S.Thanks>
        <S.Instructions>{props.thankYouTexts.instructions}</S.Instructions>
        <S.TitleWrapper>
          <S.Title>{props.thankYouTexts.title1}</S.Title>
          <S.Title>{props.thankYouTexts.title2}</S.Title>
          <S.Title>{props.thankYouTexts.title3}</S.Title>
          <S.SubTitle>{props.thankYouTexts.subtitle}</S.SubTitle>
        </S.TitleWrapper>
        <S.DetailsWrapper>
          <S.AuthorWrapper>
            <S.Theme>{props.thankYouTexts.theme}</S.Theme>
            <S.Author>{props.thankYouTexts.author}</S.Author>
          </S.AuthorWrapper>
        </S.DetailsWrapper>
        <S.ClassesListWrapper>
          <ClassesList aulas={props.thankYouTexts.aulas}/>
        </S.ClassesListWrapper>
      </S.Wrapper>
    </>
  );
};

export default ConfirmationTwo;
