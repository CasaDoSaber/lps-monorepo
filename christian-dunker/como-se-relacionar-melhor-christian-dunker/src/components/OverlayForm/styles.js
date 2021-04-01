import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Form = styled.form`
  ${({ theme }) => css`
    display: ${(props) => (props.isOverlay ? 'block' : 'none')};
    position: fixed;
    top: 25vh;
    left: 50%;
    margin-left: -47%;
    min-width: 300px;
    width: 60vw;
    max-width: 400px;
    height: 450px;
    background-color: ${theme.colors.mainBg};
    z-index: ${theme.layers.modal};
    border-radius: 5px;
    border:2px solid ${theme.colors.mainBg};

    @media all and (${device.mobileS}) {
      margin-left: -41%;
    }
    @media all and (${device.mobileM}) {
      margin-left: -33%;
    }

    @media all and (${device.mobileL}) {
      margin-left: -28%;
    }

    @media all and (${device.tablet}) {
      margin-left: -22%;
    }

    @media all and (${device.laptop}) {
      display: none;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 700;
    font-size: ${theme.font.sizes.large}
    letter-spacing: 0px;
    color: #4d4d4d;
    text-transform: uppercase;
    margin: 25px auto 0 auto;
  @media all and (${device.laptop}) {
    display: none;
  }
  `}
`;

export const Subtitle = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 700;
    font-size: ${theme.font.sizes.large}
    letter-spacing: 0px;
    color: #4d4d4d;
    text-transform: uppercase;
    margin: 5px auto 30px auto;
  @media all and (${device.laptop}) {
    display: none;
  }
  `}
`;

export const Response = styled.span`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-family: ${theme.font.fontFamily.primary};
    font-weight: 400;
    font-size: ${theme.font.sizes.small}
    letter-spacing: 0px;
    color: ${(props) => (props.error ? 'red' : 'green')};
    margin: auto;
    
    @media all and (${device.laptop}) {
    display: none;
  }

  `}
`;

export const TextFieldWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    border-radius: 4px;

    @media all and (${device.laptop}) {
      display: none;
    }
  `}
`;
