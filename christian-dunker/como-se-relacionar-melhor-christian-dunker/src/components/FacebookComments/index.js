import { useEffect } from "react";
import * as S from "./styles";

const FacebookComments = () => {
  return (
    <S.Wrapper>
      <div
        className="fb-comments"
        data-href="https://christian-dunker-como-se-relacionar.vercel.app/como-melhorar-relacoes/aula-01"
        data-width="300"
        data-numposts="10"
      ></div>
    </S.Wrapper>
  );
};

export default FacebookComments;
