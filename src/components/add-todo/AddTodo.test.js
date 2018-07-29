import React from 'react';
import { mount } from 'enzyme';

import AddTodo, { StyledInput } from './AddTodo';
import Button from '../button/Button';

describe('AddTodo component', () => {
  it('should change value of prop when input is changed', () => {
    let valueProp = '';
    const expectedValue = 'Expected value';
    const onChange = event => {
      valueProp = event.target.value;
    };

    const wrapper = mount(<AddTodo value={valueProp} onChange={onChange} />);
    const input = wrapper.find(StyledInput);
    expect(input).toHaveLength(1);

    input.simulate('change', { target: { value: expectedValue } });

    expect(valueProp).toEqual(expectedValue);
  });

  it('should call onSave when cancel button is clicked', () => {
    const onSave = jest.fn();

    const wrapper = mount(<AddTodo value="" onSave={onSave} />);
    const saveButton = wrapper.find({ look: Button.look.SUBMIT });
    expect(saveButton).toHaveLength(1);
    saveButton.simulate('click');
    expect(onSave).toHaveBeenCalled();
  });

  it('should call onClose when close button is clicked', () => {
    const onClose = jest.fn();

    const wrapper = mount(<AddTodo value="" onClose={onClose} />);
    const saveButton = wrapper.find({ look: Button.look.DEFAULT });
    expect(saveButton).toHaveLength(1);
    saveButton.simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
