import styled, { css } from 'styled-components';
import { device } from 'styles/mediaQueries';

export const IconsWrapper = styled.section`
  ${({ theme }) => css`
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    color: ${theme.font.colors.primary};
    align-items: center;
    justify-content: center;

    @media all and (${device.tablet}) {
      flex-direction: row;
      width: 45%;
      justify-content: space-between;
    }

    @media all and (${device.laptop}) {
      margin: 140px auto;
    }
  `}
`;

export const IconAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const Icon = styled.img`
  min-height: 80px;
  height: 12vw;
  width: 17vw;
  max-height: 125px;
  max-width: 125px;
  margin-bottom: 20px;

  @media all and (${device.tablet}) {
    height: 10vw;
  }
  @media all and (${device.laptop}) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font: normal normal 700 ${theme.font.sizes.small} /
      ${theme.font.sizes.large} ${theme.font.fontFamily.primary};
    max-width: 120px;
    text-transform: uppercase;
    text-align: center;

    @media all and (${device.mobileL}) {
      font-size: ${theme.font.sizes.medium};
    }
    @media all and (${device.laptop}) {
      font-size: ${theme.font.sizes.large};
      max-width: 150px;
    }
  `}
`;
