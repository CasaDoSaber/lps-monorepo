import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 500px;
    width: 100%;
    border: 1px solid black;
  `}
`