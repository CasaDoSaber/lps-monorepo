import * as S from './styles';

const Button = ({
  children,
  variant = 'nonOverlay',
  ...props
}) => (
  <S.Wrapper variant={variant} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
