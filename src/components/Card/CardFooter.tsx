import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
   ${({ theme }) => theme.colors.borderColor};
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
