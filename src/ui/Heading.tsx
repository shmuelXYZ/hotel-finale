import styled, { css } from "styled-components";

interface HeadingProps {
  type: "h1" | "h2" | "h3";
}

type HeadingComponentProps = HeadingProps &
  React.HTMLAttributes<HTMLHeadingElement>;

const Heading = styled(({ type, ...props }: HeadingComponentProps) => {
  const Tag = type; // Dynamically select the tag
  return <Tag {...props} />;
})<HeadingProps>`
  ${({ type }) => {
    switch (type) {
      case "h1":
        return css`
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
        `;
      case "h2":
        return css`
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 1;
        `;
      case "h3":
        return css`
          font-size: 2rem;
          font-weight: 500;
          line-height: 1;
        `;
      default:
        return css`
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 1;
        `;
    }
  }}
`;

export default Heading;
