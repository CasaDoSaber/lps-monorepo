import * as S from './styles';

const EmbeddedVideo = ({ 
  src, 
  allow = 'autoplay; fullscreen' 
}) => (
  <S.IFrame 
  src={src} 
  frameborder="0" 
  allow={allow} 
  allowfullscreen>
  </S.IFrame>
);

export default EmbeddedVideo;
