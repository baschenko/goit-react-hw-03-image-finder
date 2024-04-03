import styled from '@emotion/styled';

/*
 * Стили компонента Modal
 */

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
  /* max-width: 600px;
  max-height: 300px;
  width: 100%;
  height: 100%; */
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
