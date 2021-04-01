import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.font.colors.primary}
  `}
`;

export const TimeBlock = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${theme.colors.primary};
    margin-left: 10px;
  `}
`;
