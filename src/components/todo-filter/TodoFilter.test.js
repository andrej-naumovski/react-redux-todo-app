import React from 'react';
import { mount } from 'enzyme';

import TodoFilter from './TodoFilter';
import { StyledSelect } from '../styled-input/StyledInput';

import { TodoFilterType } from '../../constants/todos';

describe('TodoFilter component', () => {
  it('should call onChange when value is changed', () => {
    let filter = TodoFilterType.ALL;

    const onChange = event => {
      filter = event.target.value;
    };

    const filterValues = Object.values(TodoFilterType);

    const wrapper = mount(
      <TodoFilter
        filter={filter}
        onChange={onChange}
        filterValues={filterValues}
      />
    );

    const select = wrapper.find(StyledSelect);

    expect(select).toHaveLength(1);

    select.simulate('change', { target: { value: TodoFilterType.COMPLETED } });

    expect(filter).toEqual(TodoFilterType.COMPLETED);
  });
});
