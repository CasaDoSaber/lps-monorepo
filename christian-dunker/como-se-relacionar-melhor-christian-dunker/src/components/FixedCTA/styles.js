import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: ${(props) => (props.isSticky ? '160px' : '80px')};
    background-color: ${theme.colors.mainBg};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.base};
    position: ${(props) => (props.isSticky ? 'relative' : 'fixed')};
    bottom: 0;
    left: 0;
    box-shadow: ${(props) =>
      props.isSticky ? 'none' : `-0 -5px 15px ${theme.colors.footer}`};
    transition: height 500ms ease-in-out, max-width 1000ms ease-in-out,
      box-shadow 300ms ease-in-out, position 1000ms ease-in-out;

    @media all and (${device.laptop}) {
      height: ${(props) => (props.isSticky ? '200px' : '130px')};
      padding: 0 ${theme.spacings.xlarge};
      justify-content: space-between;
      max-width: ${device.laptop};
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media all and (${device.laptop}) {
      width: 65%;
      display: flex;
      flex-direction: column;
    }
  `}
`;
export const TextFieldWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    @media all and (${device.laptop}) {
      display: flex;
      justify-content: space-between;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
  display: none;
  @media all and (${device.laptop}) {
    display: inline;
    text-align: left;
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 700;
    font-size: ${theme.font.sizes.large}
    letter-spacing: 0px;
    color: #4d4d4d;
    text-transform: uppercase;
  }

  `}
`;

export const Response = styled.span`
  ${({ theme }) => css`
  display: none;
  @media all and (${device.laptop}) {
    display: inline;
    text-align: left;
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 400;
    font-size: ${theme.font.sizes.small}
    letter-spacing: 0px;
    color: ${(props) => (props.error ? 'red' : 'green')};
    margin: ${theme.spacings.xsmall} 0;
  }

  `}
`;

export const TextField = styled.input`
  ${({ theme }) => css`
    display: none;

    @media all and (${device.laptop}) {
      display: block;
      background-color: ${theme.colors.mainBg};
      width: 17vw;
      border-bottom: 1px solid ${theme.font.colors.primary};
      font-family: ${theme.font.fontFamily.primary};
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
      padding: ${theme.spacings.xxsmall} 0;
      margin-right: ${theme.spacings.medium};
      outline: none;
      :focus {
        background-color: ${theme.colors.mainBg};
      }
    }
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: ${theme.layers.overlay};
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-out;
    text-align: center;

    ${(props) =>
      !props.isOverlay &&
      css`
        background-color: transparent;
        pointer-events: none;
      `}
  `}
`;
