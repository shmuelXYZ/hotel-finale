import styled, { css } from "styled-components";

interface RowProps {
  direction?: "row" | "column";
}

type RowComponentProps = RowProps & React.HTMLAttributes<HTMLDivElement>;

const Row = styled.div<RowComponentProps>`
  ${({ direction }) => {
    switch (direction) {
      case "column":
        return css`
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        `;
      case "row":
      default:
        return css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `;
    }
  }}
`;

Row.defaultProps = { direction: "column" };
export default Row;
