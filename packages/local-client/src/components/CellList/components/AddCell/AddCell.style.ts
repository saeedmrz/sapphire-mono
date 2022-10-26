import styled from "@emotion/styled/macro";
import { colors } from "styles/styles";

interface CellProps {
  forceVisible: boolean | undefined;
}

export const AddCellDiv = styled.div<CellProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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
  height: 2px;
  width: 100%;
  border-radius: 1rem;
  background-color: ${colors.orange};
`;
