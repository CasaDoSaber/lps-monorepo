import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const EmbeddedWrapper = styled.div`
  width: auto;
  height: 40vw;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10vw 0;
`;
