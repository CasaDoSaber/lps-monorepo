import { useEffect } from "react";
import * as S from "./styles";

const FacebookComments = () => {
  console.log("render CommentsFacebook");

  useEffect(() => {
    console.log("load facebook script");
    const facebookScript = document.createElement("script");
    facebookScript.async = true;
    facebookScript.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0&appId=323248409198817&autoLogAppEvents=1`;
    document.body.appendChild(facebookScript);
  }, []);

  return (
    <S.Wrapper>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href="https://christian-dunker-como-se-relacionar.vercel.app/como-melhorar-relacoes/aula-01"
        data-width="100%"
        data-numposts="10"
      ></div>
    </S.Wrapper>
  );
};

export default FacebookComments;
