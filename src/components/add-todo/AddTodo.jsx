// @flow
import * as React from 'react';
import styled from 'styled-components';

import Button from '../button/Button';
import StyledInput from '../styled-input/StyledInput';

const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 20px 0;
  justify-content: space-between;
`;

type Props = {
  value: string,
  onChange: any => void,
  onSave: string => void,
  onClose: () => void,
};

const AddTodo = ({ value, onChange, onSave, onClose }: Props): React.Node => (
  <Container>
    <StyledInput
      placeholder="Todo title"
      type="text"
      value={value}
      onChange={onChange}
    />
    <Button look={Button.look.SUBMIT} onClick={onSave}>
      Save todo
    </Button>
    <Button look={Button.look.DEFAULT} onClick={onClose}>
      Cancel
    </Button>
  </Container>
);

export default AddTodo;
