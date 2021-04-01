import Header from 'components/Header';
import * as S from './styles';
import { PageLimit } from 'containers/PageLimit/styles';
import Hero from 'components/Hero';

const HeroSection = () => {
  const description =
    'Neste curso, Christian Dunker compartilha seu olhar psicanalítico para os afetos, sentimentos e emoções e apresenta <b>alternativas</b> para a melhoria das suas relações, a partir da escuta e do entendimento de si.';

  return (
    <PageLimit>
      <S.Wrapper>
        <Header />
        <Hero />
        <S.Description>
          Neste curso, Christian Dunker compartilha seu olhar psicanalítico
          para os afetos, sentimentos e emoções e apresenta <span>alternativas</span>
           para a melhoria das suas relações, a partir da escuta e do
          entendimento de si.
        </S.Description>
      </S.Wrapper>
    </PageLimit>
  );
};

export default HeroSection;
