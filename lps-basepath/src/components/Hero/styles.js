import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const HeroBlock = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media all and (${device.tablet}) {
      align-items: flex-end;
    }
  `}
`;

// export const Info = styled.div`
//   ${({ theme }) => css`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     @media all and (${device.tablet}) {
//       margin: 0 calc(2 * ${theme.spacings.xsmall}) 0 ${theme.spacings.small};
//     }

//     @media all and (${device.tabletL}) {
//       padding-left: ${theme.spacings.large};
//     }
//   `}
// `;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media all and (${device.tablet}) {
      width: 55%;
    }
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
      font-size: calc(2 * ${theme.font.sizes.xlarge});
      max-width: 100%;
    }
    @media all and (${device.tablet}) {
      font-size: calc(2 * ${theme.font.sizes.xlarge});
      max-width: 100%;
      align-self: flex-start;
    }
    @media all and (${device.laptop}) {
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
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
      max-width: 280px;
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      max-width: 350px;
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xxxlarge};
      line-height: ${theme.font.height.xxxlarge};
      max-width: 420px;
    }
  `}
`;

export const DetailsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 3fr;

  @media all and (${device.tablet}) {
    display: flex;
    flex-direction: column;
    width: 55%;
  }
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
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
      margin-right: 8px;
    }
    @media all and (${device.laptop}) {
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
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-self: flex-end;

  @media all and (${device.tablet}) {
    margin-top: 4vw;
  }
`;

export const ClassInfo = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 0;
    font-weight: 900;
    text-align: right;
    color: ${(props) =>
      props.position === 1
        ? theme.font.colors.primary
        : theme.font.colors.secondary};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.small};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};

    @media all and (${device.mobileM}) {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.medium};
    }
    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxlarge};
      text-align: left;
    }
  `}
`;

export const EmptySpace = styled.div`
  width: 60%;

  @media all and (${device.tablet}) {
    width: 0;
    display: none;
  }
`;

export const DateWrapper = styled.div`
  ${({ theme }) => css`
    align-self: center;
    align-items: flex-start;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 72px;

    @media all and (${device.mobileL}) {
      align-self: flex-end;
      width: auto;
      max-width: 285px;
    }

    @media all and (${device.tablet}) {
      position: relative;
      max-width: 305px;
      bottom: 78px;
      right: 50px;
    }
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.font.colors.primary};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-family: ${theme.font.fontFamily.MaisonNeueExtended};
    font-weight: 100;

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      width: 100%;
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xxxlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const Time = styled.span`
  ${({ theme }) => css`
    color: ${theme.font.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.fontFamily.primary};
    padding-top: 6px;

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.xlarge};
      padding-top: 12px;
    }
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.xxlarge};
      padding-top: 8px;
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const HeroWrapper = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    align-self: flex-end;
    margin-top: -140px;

    @media all and (${device.tablet}) {
      position: absolute;
      top: 270px;
      left: 17vw;
    }
    @media all and (${device.laptop}) {
      top: 270px;
      left: 20vw;
    }
  `}
`;

export const Hero = styled.img`
  ${({ theme }) => css`
    min-height: 240px;
    min-width: 185px;
    width: 100%;
    height: 80%;
    max-width: 380px;

    @media all and (${device.tablet}) {
      width: 24vw;
    }
    @media all and (${device.laptop}) {
      width: 23vw;
    }

    background-color: ${theme.colors.mainBg};
    background-image: linear-gradient(
      to right,
      #a0a1a0 0%,
      #bebebe 20%,
      #a0a1a0 40%,
      #a0a1a0 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const BlueRectangle = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: -40vw;
    left: -36vw;
    min-height: 210px;
    min-width: 200px;
    width: 65vw;
    height: 60vw;
    background-color: ${theme.colors.secondary};
    z-index: -1;

    @media all and (${device.tablet}) {
      margin-top: -17vw;
      left: -11vw;
      width: 20vw;
      height: 32vw;
    }
    @media all and (${device.laptop}) {
      margin-top: -17vw;
      left: -11vw;
      width: 20vw;
      height: 32vw;
    }
    @media all and (${device.laptopL}) {
      max-height: 420px;
      margin-top: -290px;
      left: -175px;
      width: 20vw;
      height: 32vw;
    }
  `}
`;

export const GratuitoWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: -47vw;
    left: -26vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (${device.tablet}) {
      margin-top: -23vw;
      left: -11vw;
      width: 20vw;
      height: 30vw;
    }

    @media all and (${device.laptopL}) {
      margin-top: -310px;
    }
  `}
`;

export const Gratuito = styled.p`
  ${({ theme }) => css`
    font-family: 'MaisonNeue';
    font-weight: 700;
    color: ${theme.font.colors.white};
    -webkit-text-fill-color: ${(props) =>
      props.position === 3 ? theme.font.colors.white : 'transparent'};
    -webkit-text-stroke-width: ${(props) =>
      props.times === 3 ? 'none' : '1px'};
    -webkit-text-stroke-color: ${theme.font.colors.white};
    font-size: 9vw;
    line-height: 9vw;
    z-index: ${theme.layers.base};

    @media all and (${device.tablet}) {
      font-size: 4vw;
      line-height: 4vw;
    }
    @media all and (${device.laptopL}) {
      font-size: 60px;
      line-height: 60px;
    }
  `}
`;
