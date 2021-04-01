import CountDownTimer from 'components/CountDownTimer';
import EmbeddedVideo from 'components/EmbeddedVideo';
import { PageLimit } from 'containers/PageLimit/styles';
import * as S from './styles';

const EmbeddedSection = () => (
  <S.Wrapper id="ASSISTIR AULA">
    <PageLimit>
      <S.EmbeddedWrapper>
        <CountDownTimer />
        <EmbeddedVideo src={process.env.NEXT_PUBLIC_VIMEO_CLASS1} />
      </S.EmbeddedWrapper>
    </PageLimit>
  </S.Wrapper>
);

export default EmbeddedSection;
