import * as S from './styles';
import { Ring } from 'react-awesome-spinners';
import theme from 'styles/theme';

const LoadingOverlay = ({ isLoading }) => {

  return (
    <S.Wrapper isLoading={isLoading}>
        <Ring size="100" color={theme.colors.primary} />{' '}
    </S.Wrapper>
  );
};

export default LoadingOverlay;
