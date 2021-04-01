import styled, { css } from 'styled-components';

export const Wrapper = styled.img`
  ${({ theme }) => css`
    min-width: 115px;
    width: 45vw;
    max-width: 230px;
    height: 45px;
  `}
`