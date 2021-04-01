import * as S from './styles';

const ClassesList = ({aulas}) => {
  let renderArray = [];

  function classesRender() {
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
  return <>{classesRender()}</>;
};

export default ClassesList;
