import Button from 'components/Button';
import * as S from './styles';

const ClassBearer = () => {
  const aulas = [
    {
      icon: '/static/img/aula1.svg',
      aula: 'AULA 1',
      title: 'A PARTILHA DOS AFETOS',
      description:
        'Como transformar e compartilhar nossos afetos para viver na contemporaneidade?',
      date: 'Segunda-feira, 26 de abril às 20h',
    },
    {
      icon: '/static/img/aula2.svg',
      aula: 'AULA 2',
      title: 'O PODER DA ESCUTA',
      description:
        'O que se ganha ao aperfeiçoar sua escuta de si, do outro e como fazer isso.',
      date: 'Terça-feira, 27 de abril às 20h',
    },
    {
      icon: '/static/img/aula3.svg',
      aula: 'AULA 3',
      title: 'O MEDO E O SOFRIMENTO',
      description:
        'Os danos que nosso modo e vida causa à psique.  Há saída para essa situação?',
      date: 'Quarta-feira, 28 de abril às 20h',
    },
    {
      icon: '/static/img/aula4.svg',
      aula: 'AULA 4',
      title: 'O AMOR E SUAS TRANSFORMAÇÕES',
      description:
        'As faces do amor na atualidade. Amor e liberdade, amor e traição, amor e sociedade: compreenda essas relações pela ótica da psicanálise.',
      date: 'Quinta-feira, 29 de abril às 20h',
    },
  ];

  function classesRender() {
    let renderArray = [];

    for (const aula of aulas) {
      renderArray.push(
        <S.Aula key={aula.title}>
          <S.ClassIcon>{aula.aula}</S.ClassIcon>
          <S.DetailsWrapper>
            <S.Title>{aula.title}</S.Title>
            <S.Description>{aula.description}</S.Description>
            <S.Dash>-</S.Dash>
            <S.Date>{aula.date}</S.Date>
          </S.DetailsWrapper>
        </S.Aula>
      );
    }

    return renderArray;
  }

  return (
    <S.Wrapper>
      {classesRender()}
    </S.Wrapper>
  );
};

export default ClassBearer;
