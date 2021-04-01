import * as S from './styles';

const IconSocialNetwork = ({ src, onClick}) => (
  <S.Wrapper onClick={onClick}>
    <S.Icon src={src} />
  </S.Wrapper>
);

export default IconSocialNetwork;
