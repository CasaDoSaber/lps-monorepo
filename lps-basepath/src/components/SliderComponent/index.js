import * as S from './styles';
import SlickSlider from 'react-slick';

const SlickSliderComponent = ({ settings, children }) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
);

export default SlickSliderComponent;
