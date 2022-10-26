import styled from "@emotion/styled/macro";

export const EditorWrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 10px);

  :hover > div {
    opacity: 1;
  }
`;

export const FormatBtnDiv = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.3s;
`;
