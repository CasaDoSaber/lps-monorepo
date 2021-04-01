import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.footer};
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    width: 80%;
    min-height: ${theme.spacings.xxlarge};
    height: 20vw;
    max-height: calc(2*${theme.spacings.xxlarge});
    align-items: center;
    justify-content: space-between;
  `}
`;

export const SocialNetworkWrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 ${theme.spacings.xsmall};
  `}
`;
