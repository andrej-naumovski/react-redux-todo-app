// @flow
import * as React from 'react';

import { StyledSelect } from '../styled-input/StyledInput';

import type { TodoFilter as TodoFilterType } from '../../types';

type Props = {
  filter: TodoFilterType,
  filterValues: Array<any>,
  onChange: any => void,
};

const TodoFilter = ({ filter, filterValues, onChange }: Props): React.Node => (
  <StyledSelect type="select" value={filter} onChange={onChange}>
    {filterValues.map(filterValue => (
      <option key={filterValue} value={filterValue}>
        {filterValue}
      </option>
    ))}
  </StyledSelect>
);

export default TodoFilter;
