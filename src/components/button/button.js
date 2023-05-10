import { ButtonContainer } from "./button.styles";

const Button = (props) => {
  //const { children, onClick, preset = "primary" } = props;

  return (
    <ButtonContainer onClick={props.onClick} preset={props.preset}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
