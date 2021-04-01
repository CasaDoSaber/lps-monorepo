import ConfirmationTwo from 'components/ConfirmationTwo';
import Footer from 'components/Footer';
import Logo from 'components/Logo';
import * as S from './styles';

const ConfirmationSection = () => {
  return (
    <>
      <S.Wrapper>
        <ConfirmationTwo />
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default ConfirmationSection;
