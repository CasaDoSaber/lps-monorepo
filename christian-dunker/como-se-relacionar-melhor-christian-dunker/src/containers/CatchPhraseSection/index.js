import { PageLimit } from 'containers/PageLimit/styles';
import { forwardRef } from 'react';
import * as S from './styles';

const CatchPhraseSection = forwardRef(({phrase}, ref) => {

  return (
    <S.Wrapper ref={ref}>
      <PageLimit>
        <S.Phrase>{phrase}</S.Phrase>
      </PageLimit>
    </S.Wrapper>
  );
});

export default CatchPhraseSection;
