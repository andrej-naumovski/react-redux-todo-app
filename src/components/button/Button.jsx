import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

const ButtonStyle = {
  SUBMIT: 'submit',
  DELETE: 'delete',
  DEFAULT: 'default',
};

const Button = styled.button`
  padding: 5px 7px;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  ${switchProp('look', {
    [ButtonStyle.SUBMIT]: css`
      background-color: #8bc282;
      border: 1px solid #67b45f;
    `,
    [ButtonStyle.DELETE]: css`
      background-color: #c28282;
      border: 1px solid #b45f5f;
    `,
    [ButtonStyle.DEFAULT]: css`
      background-color: #8e8e8e;
      border: 1px solid #383838;
      color: #383838;
    `,
  })};

  &:disabled {
    background-color: #c9c9c9;
    border: 1px solid #afafaf;
  }
`;

Button.look = ButtonStyle;

export default Button;
