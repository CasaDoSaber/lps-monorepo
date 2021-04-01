import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.font.colors.secondary};
    font: normal normal 700 ${theme.font.sizes.medium} /
      ${theme.font.sizes.large} ${theme.font.fontFamily.MaisonNeueExtended};

    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }
    @media all and (${device.laptopL}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const Author = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.font.colors.primary};
    font: normal normal 700 ${theme.font.sizes.medium} /
      ${theme.font.sizes.large} ${theme.font.fontFamily.MaisonNeueExtended};
    margin-bottom: ${theme.spacings.medium};
    @media all and (${device.tablet}) {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xlarge};
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxlarge};
    }
    @media all and (${device.laptopL}) {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const CourseCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: auto;
    min-width: 200px;
    width: 88vw;
    max-width: 410px;
    height: 50vw;
    max-height: 490px;

    @media all and (${device.mobileM}) {
      min-width: 350px;
      width: 74vw;
      max-width: 820px;
      height: 38vw;
    }
    @media all and (${device.mobileL}) {
      width: 75vw;
    }
    @media all and (${device.tablet}) {
      width: 76vw;
      height: 40vw;
    }
    @media all and (${device.laptop}) {
      width: 64vw;
      height: 33vw;
      cursor: pointer;
    }

  `}
`;

export const SliderWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    width: 100%;
    max-width: 1200px;
    min-height: 350px;
    height: 70vw;
    max-height: 600px;

    .slick-prev,
    .slick-next {
      font-size: 0;
      line-height: 0;

      position: absolute;
      top: 50%;

      display: block;

      width: 20px;
      height: 20px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);

      cursor: pointer;

      color: transparent;
      border: none;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: transparent;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: 0.25;
    }

    .slick-prev:before,
    .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;

      opacity: 0.75;
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev {
      left: -25px;
    }
    [dir='rtl'] .slick-prev {
      right: -25px;
      left: auto;
    }
    .slick-prev:before {
      content: '←';
    }
    [dir='rtl'] .slick-prev:before {
      content: '→';
    }

    .slick-next {
      right: -25px;
    }
    [dir='rtl'] .slick-next {
      right: auto;
      left: -25px;
    }
    .slick-next:before {
      content: '→';
    }
    [dir='rtl'] .slick-next:before {
      content: '←';
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      padding-right: 2em;

      li {
        background: ${theme.colors.mainBg};
        border: 1px solid ${theme.font.colors.primary};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
  `}
`;
