import styled from "styled-components";

interface DivProps {
  status: boolean;
}

export const Div = styled.div<DivProps>`
  background-color: ${(props) => (!props.status ? "#ffff" : "black")};
  color: ${(props) => (!props.status ? "black" : "white")};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  border: 1px solid rgb(182, 181, 181);
`;
