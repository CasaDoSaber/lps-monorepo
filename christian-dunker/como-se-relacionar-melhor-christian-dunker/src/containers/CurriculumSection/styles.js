import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media all and (${device.tablet}) {
      padding: calc(2 * ${theme.spacings.xxlarge}) 0;
    }
    @media all and (${device.laptop}) {
      padding: calc(3 * ${theme.spacings.xxlarge}) 0;
      flex-direction: row;
      max-width: 1200px;
      margin: auto;
    }
  `}
`;

export const HeroBlock = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-end;
  `}
`;

export const Hero = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 200px;
    min-width: 195px;
    height: 44vw;
    width: 65vw;
    max-height: 600px;
    max-width: 580px;
    background-color: ${theme.colors.mainBg};

    @media all and (${device.tablet}) {
      height: 50vw;
      width: 47vw;
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: ${theme.spacings.large};
    margin: auto;

    @media all and (${device.laptop}) {
      margin: 0 calc(2 * ${theme.spacings.xsmall}) 0 ${theme.spacings.large};
    }
  `}
`;

export const AuthorMobile = styled.span`
  ${({ theme }) => css`
    box-sizing: border-box;
    margin-left: ${theme.spacings.small};
    padding: 0;
    color: ${theme.font.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 700;
    width: 85%;

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.larger};
      max-width: 400px;
    }
    @media all and (${device.laptop}) {
      display: none;
    }
  `}
`;
export const AuthorDesktop = styled.span`
  ${({ theme }) => css`
    display: none;

    @media all and (${device.laptop}) {
      display: block;
      margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.medium} 0;
      padding: 0;
      color: ${theme.font.colors.primary};
      font-size: ${theme.font.sizes.largest};
      font-family: ${theme.font.fontFamily.primary};
      font-weight: 700;
      max-width: 400px;
    }
  `}
`;

export const Curriculum = styled.span`
  ${({ theme }) => css`
    text-align: left;
    font: normal normal normal ${theme.font.sizes.large} /
      ${theme.font.sizes.xxxlarge} ${theme.font.fontFamily.MaisonNeueBook};
    letter-spacing: 0px;
    color: #4d4d4d;
    margin-left: 8vw;
    width: 90%;

    @media all and (${device.mobileM}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
      width: 80%;
    }

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
      width: 60%;
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.larger};
      width: 50%;
    }
    @media all and (${device.laptop}) {
      text-align: left;
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxxlarge};
      margin-left: 0;
      width: 85%;
    }
  `}
`;
