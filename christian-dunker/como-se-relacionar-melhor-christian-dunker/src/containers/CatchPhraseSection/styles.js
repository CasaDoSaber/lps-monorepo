import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: calc(2*${theme.spacings.xlarge}) 0;
  `}
`;

export const Phrase = styled.h3`
  ${({ theme }) => css`
    width: 70%;
    text-align: center;
    font: normal normal 400 ${theme.font.sizes.large} /
      ${theme.font.sizes.xlarge} ${theme.font.fontFamily.MaisonNeueExtended};
    letter-spacing: 0px;
    color: ${theme.colors.mainBg};
    margin: auto;

    @media all and (${device.mobileL}){
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }

    @media all and (${device.tablet}){
      width: 60%;
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }

    @media all and (${device.laptop}){
      width: 40%;
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.larger};
    }
  `}
`;
