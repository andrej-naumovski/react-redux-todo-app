import React from 'react';
import { mount } from 'enzyme';

import TodoActions from './TodoActions';
import Button from '../button/Button';

describe('TodoActions component', () => {
  it('should call onAdd when button with look SUBMIT is clicked', () => {
    const onAdd = jest.fn();
    const wrapper = mount(<TodoActions onAdd={onAdd} />);
    const buttons = wrapper.find(Button);
    buttons.find({ look: Button.look.SUBMIT }).simulate('click');
    expect(onAdd).toHaveBeenCalled();
  });

  it('should call onMarkAllComplete when button with look DEFAULT is clicked', () => {
    const onMarkAllComplete = jest.fn();
    const wrapper = mount(
      <TodoActions onMarkAllComplete={onMarkAllComplete} />
    );
    const buttons = wrapper.find(Button);
    buttons.find({ look: Button.look.DEFAULT }).simulate('click');
    expect(onMarkAllComplete).toHaveBeenCalled();
  });

  it('should call onDeleteAll when button with look DELETE is clicked', () => {
    const onDeleteAll = jest.fn();
    const wrapper = mount(<TodoActions onDeleteAll={onDeleteAll} />);
    const buttons = wrapper.find(Button);
    buttons.find({ look: Button.look.DELETE }).simulate('click');
    expect(onDeleteAll).toHaveBeenCalled();
  });
});
