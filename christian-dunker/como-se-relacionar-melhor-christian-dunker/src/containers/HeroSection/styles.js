import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6vw;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.font.colors.primary};
    font-family: ${theme.font.fontFamily.MaisonNeueBook};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.medium};
    max-width: 450px;
    margin: 8vw 0;

    span{
      font-weight: 900;
    }

    @media all and (${device.mobileM}) {
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.mobileL}) {
      max-width: 630px;
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }
    @media all and (${device.tablet}) {
      max-width: 95%;
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
      margin-top: 0;
    }
    @media all and (${device.laptop}) {
      padding: 0 calc(1 * ${theme.spacings.xxlarge}) ${theme.spacings.xxlarge} 25vw;
    }
    @media all and (${device.laptopL}) {
      max-width: 90%;
      padding: 0 calc(1 * ${theme.spacings.xxlarge}) ${theme.spacings.xxlarge} 340px;
    }
  `}
`;
