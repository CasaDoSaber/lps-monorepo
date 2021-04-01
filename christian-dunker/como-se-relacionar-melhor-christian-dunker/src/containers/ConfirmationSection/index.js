import Confirmation from 'components/Confirmation';
import Footer from 'components/Footer';
import Logo from 'components/Logo';
import * as S from './styles';

const ConfirmationSection = () => {
  return (
    <>
      <S.Wrapper>
        <Confirmation />
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ConfirmationSection;
