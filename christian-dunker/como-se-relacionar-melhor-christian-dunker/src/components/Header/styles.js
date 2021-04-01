import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    height: 15vw;
    min-height: 60px;
    display: flex;
    font: normal normal normal 20px/24px ${theme.font.fontFamily.MaisonNeueBook};
    text-transform: uppercase;
    color: ${theme.font.colors.primary};
    align-items: center;

    @media all and (${device.laptop}) {
      height: calc(3 * ${theme.spacings.large});
      justify-content: space-between;
      padding: 0 calc(1 * ${theme.spacings.medium}) 0
        calc(1 * ${theme.spacings.medium});
    }
  `}
`;

export const LogoMobileWrapper = styled.div`
  @media all and (${device.laptop}) {
    display: none;
  }
`;
export const LogoWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media all and (${device.laptop}) {
    display: block;
    margin: auto 0;
  }
`;

export const MenuWrapper = styled.menu`
  ${({ theme }) => css`
    display: none;

    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.medium};
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.large};
      width: 59%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 760px;
    }
  `}
`;

export const Option = styled.span`
  ${({ theme }) => css`
    display: none;
    @media all and (${device.laptop}) {
      display: inline;
      cursor: pointer;
    }
  `}
`;
