import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.font.colors.primary};
    margin: ${theme.spacings.large} ${theme.spacings.large};
    max-width: 400px;

    @media all and (${device.tablet}) {
      max-width: 600px;
      margin: ${theme.spacings.large} calc(2 * ${theme.spacings.xlarge});
    }
  `}
`;

export const Thanks = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.fontFamily.MaisonNeueBook};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.height.small};
    max-width: 250px;
    margin: ${theme.spacings.medium} 0;

    @media all and (${device.mobileM}) {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.height.large};
      max-width: 300px;
    }
    @media all and (${device.tablet}) {
      margin: ${theme.spacings.large} 0;
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.height.xxlarge};
      font-weight: 700;
      max-width: 550px;
    }
  `}
`;
export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    color: ${theme.font.colors.secondary};
    font-size: ${theme.font.sizes.larger};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-weight: 900;

    @media all and (${device.mobileM}) {
      font-size: calc(2 * ${theme.font.sizes.large});
      max-width: 85%;
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.largest};
      max-width: 85%;
    }
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    margin: 10px 0 20px 0;
    padding: 0;
    color: ${theme.font.colors.primary};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.height.medium};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-weight: 100;
    max-width: 235px;

    @media all and (${device.mobileM}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      max-width: 350px;
    }

    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxxlarge};
      line-height: ${theme.font.height.xxxlarge};
      max-width: 420px;
    }
  `}
`;

export const DetailsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.medium} 0;

    @media all and (${device.tablet}) {
      margin: ${theme.spacings.large} 0;
    }
  `}
`;

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media all and (${device.tablet}) {
      display: flex;
      flex-direction: row;
    }
  `}
`;
export const Theme = styled.p`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    color: ${theme.font.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-weight: 100;

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }

    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      margin-right: 8px;
    }
  `}
`;
export const Author = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    color: ${theme.font.colors.primary};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-weight: 900;

    @media all and (${device.mobileM}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }

    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const Instructions = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.fontFamily.MaisonNeueBook};
    font-size: ${theme.font.sizes.medium};

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.large};
      max-width: 400px;
    }

    @media all and (${device.tablet}) {
      max-width: 600px;
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const ThankYouBackground = styled.div`
  display: none;
  @media all and (${device.laptop}) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    overflow: hidden;
  }
`;

export const ThankYou = styled.span`
  ${({ theme }) => css`
    display: none;
    @media all and (${device.laptopM}) {
      display: inline;
      font-size: 8vw;
      line-height: 6vw;
      font-family: ${theme.font.fontFamily.MaisonNeueExtended};
      color: ${theme.font.colors.gray};
      -webkit-text-fill-color: ${theme.colors.mainBg};
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: ${theme.colors.gray};
    }
  `}
`;
