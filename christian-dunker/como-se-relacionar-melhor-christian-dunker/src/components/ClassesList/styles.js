import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Aula = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: ${theme.spacings.xlarge};
    color: ${theme.font.colors.primary};
    width: 100%;

    @media all and (${device.mobileL}) {
      width: 70%;
    }
    @media all and (${device.tablet}) {
      flex-direction: row;
      padding-bottom: ${theme.spacings.xxlarge};
    }
    @media all and (${device.laptop}) {
      width: 60%;
    }
  `}
`;

export const ClassIcon = styled.span`
  ${({ theme }) => css`
    font-family: 'MaisonNeue';
    font-weight: 700;
    color: ${theme.font.colors.secondary};
    -webkit-text-fill-color: ${theme.colors.mainBg};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${theme.font.colors.secondary};
    font-size: ${theme.font.sizes.xxxlarge};
    letter-spacing: 0.05em;
    padding-bottom: 5px;

    @media all and (${device.tablet}) {
      margin-right: ${theme.spacings.large};
      font-size: ${theme.font.sizes.largest};
    }
  `}
`;

export const DetailsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font: normal normal 700 ${theme.font.sizes.small} /
      ${theme.font.sizes.large} ${theme.font.fontFamily.primary};

    @media all and (${device.tablet}) {
      width: 50%;
      font: normal normal 700 ${theme.font.sizes.medium} /
        ${theme.font.sizes.large} ${theme.font.fontFamily.primary};
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    padding: 5px 0;
  `}
`;
export const Description = styled.span`
  ${({ theme }) => css`
    @media all and (${device.laptop}) {
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`;
export const Dash = styled.span`
  ${({ theme }) => css`
    font: normal normal 100 ${theme.font.sizes.largest} /
      ${theme.font.sizes.large} ${theme.font.fontFamily.secondary};

    @media all and (${device.laptop}) {
      padding: ${theme.spacings.xxsmall} 0;
    }
  `}
`;
export const Date = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
  `}
`;
