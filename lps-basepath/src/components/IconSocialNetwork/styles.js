import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
`;
export const Icon = styled.img`
  ${({ theme }) => css`
    min-height: 12px;
    height: 3vw;
    width: 4vw;
    max-height: 22px;
    max-width: 30px;
    color: ${theme.colors.mainBg};
    padding-top: ${(props) =>
      props.src === '/static/img/iconYoutube.svg' ? '2px' : 0};
    padding-left: ${(props) =>
      props.src === '/static/img/iconFacebook.svg' ? '8px' : 0};
  `}
`;
