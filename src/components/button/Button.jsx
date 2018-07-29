import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

const ButtonType = {
  SUBMIT: 'submit',
  DELETE: 'delete',
};

const Button = styled.button`
  padding: 5px 7px;
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  ${switchProp('type', {
    [ButtonType.SUBMIT]: css`
      background-color: #8bc282;
      border: 1px solid #67b45f;
    `,
    [ButtonType.DELETE]: css`
      background-color: #c28282;
      border: 1px solid #b45f5f;
    `,
  })};

  &:disabled {
    background-color: #c9c9c9;
    border: 1px solid #afafaf;
  }
`;

Button.type = ButtonType;

export default Button;
