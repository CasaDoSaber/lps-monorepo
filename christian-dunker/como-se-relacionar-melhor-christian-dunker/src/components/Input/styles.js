import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

const wrapperModifiers = {
  normal: (theme) => css`
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
  `,

  overlay: (theme) => css`
    display: block;
    width: 270px;
    border: 1px solid ${theme.font.colors.primary};
    font-family: ${theme.font.fontFamily.primary};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.large};
    padding: ${theme.spacings.small};
    margin: ${theme.spacings.xsmall} 0;
    border-radius: 2px;
    outline: none;
    background-color: ${theme.colors.mainBg};

    :focus {
      background-color: ${theme.colors.mainBg};
    }

    @media all and (${device.laptop}) {
      display: none;
    }
  `,
};

export const TextField = styled.input`
  ${({ theme, variant }) => css`
    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`;
