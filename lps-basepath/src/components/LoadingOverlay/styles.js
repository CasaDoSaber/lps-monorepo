import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
 ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.overlay};
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-out;

    ${(props) =>
      !props.isLoading &&
      css`
        display: none;
        background-color: transparent;
        pointer-events: none;
      `}
  `}
`