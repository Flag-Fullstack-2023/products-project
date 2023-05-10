import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${(props) =>
    props.preset === "primary" ? "#000000" : "#aaaaaa"};
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 125px;

  span {
    color: white;
  }
`;

export { ButtonContainer };
