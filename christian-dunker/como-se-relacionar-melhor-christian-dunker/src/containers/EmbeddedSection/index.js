import CountDownTimer from 'components/CountDownTimer';
import EmbeddedVideo from 'components/EmbeddedVideo';
import { PageLimit } from 'containers/PageLimit/styles';
import * as S from './styles';

const EmbeddedSection = () => (
  <S.Wrapper id="ASSISTIR AULA">
    <PageLimit>
      <S.EmbeddedWrapper>
        <CountDownTimer />
        <EmbeddedVideo src='https://player.vimeo.com/video/530951662' />
      </S.EmbeddedWrapper>
    </PageLimit>
  </S.Wrapper>
);

export default EmbeddedSection;
