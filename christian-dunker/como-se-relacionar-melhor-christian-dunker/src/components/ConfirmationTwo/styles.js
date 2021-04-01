import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    flex-direction: column;
    color: ${theme.font.colors.primary};
    margin: ${theme.spacings.large} ${theme.spacings.large};
    max-width: 400px;

    @media all and (${device.mobileL}) {
      max-width: 1000px;
      margin: ${theme.spacings.large} 0 ${theme.spacings.large} 18vw;
    }
  `}
`;

export const BlueSquare = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 20px;
    right: 0;
    height: 17vw;
    width: 23vw;
    background-color: ${theme.colors.secondary};
    min-height: 120px;
    max-height: 215px;
    z-index: -1;

    @media all and (${device.mobileL}) {
      top: 50px;
      left: 0;
      width: 17vw;


    }
  `}
`;

export const Congrats = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-size: calc(2 * ${theme.font.sizes.xlarge});
    line-height: calc(2 * ${theme.font.sizes.xlarge});
    margin-top: ${theme.spacings.xlarge};
    font-weight: 900;

    @media all and (${device.tablet}) {
      margin-bottom: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.largest};
      line-height: ${theme.font.height.largest};
    }
  `}
`;

export const Thanks = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-size: calc(2 * ${theme.font.sizes.xlarge});
    line-height: calc(2 * ${theme.font.sizes.xlarge});
    margin-bottom: ${theme.spacings.xlarge};
    font-weight: 400;

    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.largest};
      line-height: ${theme.font.height.largest};
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

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.medium} 0;
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

export const ClassesListWrapper = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0 -10px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    @media all and (${device.mobileL}) {
      min-width: 600px;
    }
  `}
`;
