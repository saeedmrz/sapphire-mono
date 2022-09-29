import styled from "@emotion/styled";

interface CellProps {
  forceVisible: boolean | undefined;
}

export const AddCellDiv = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  opacity: ${(props) => (props.forceVisible ? "1" : "0")};
  transition: opacity 0.3s ease-in 0.1s;
  margin: 8px 0;

  &:hover {
    opacity: 1;
  }
`;

export const Divider = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 2.5%;
  left: 2.5%;
  border-bottom: 1px solid gray;
  width: 95%;
  z-index: -1;
`;
