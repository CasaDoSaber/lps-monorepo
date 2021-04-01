import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

const wrapperModifiers = {
  nonOverlay: (theme) => css`
    display: none;

    @media all and (${device.laptop}) {
      ${theme.button.medium};
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xlarge};
      background-color: ${theme.colors.primary};
      color: ${theme.font.colors.button};
      border: 4px solid ${theme.colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${theme.button.borderRadius};
      cursor: pointer;

      span {
        font-family: ${theme.font.fontFamily.primary};
        font-size: ${theme.font.sizes.large};
        line-height: ${theme.font.sizes.xlarge};
        font-weight: 700;
      }

      &:hover {
        background-color: ${theme.colors.gray};
        color: ${theme.colors.primary};
      }
    }

    @media all and (${device.laptopL}) {
      width: 25vw;
      max-width: 440px;
    }
  `,

  overlay: (theme) => css`
    ${theme.button.large};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    background-color: ${theme.colors.primary};
    color: ${theme.font.colors.button};
    border: 4px solid ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.button.borderRadius};
    cursor: pointer;

    span {
      font-family: ${theme.font.fontFamily.primary};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xlarge};
      font-weight: 700;
    }

    @media all and (${device.laptop}) {
      display: none;
    }
  `,

  overlayForm: (theme) => css`
    ${theme.button.relative};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    background-color: ${theme.colors.primary};
    color: ${theme.font.colors.button};
    border: 4px solid ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.button.borderRadius};
    margin: auto;
    cursor: pointer;

    span {
      font-family: ${theme.font.fontFamily.primary};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xlarge};
      font-weight: 700;
    }

    @media all and (${device.laptop}) {
      display: none;
    }
  `,
};

export const Wrapper = styled.button`
  ${({ theme, variant }) => css`
    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`;
