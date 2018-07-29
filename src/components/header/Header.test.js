import React from 'react';
import { mount } from 'enzyme';

import Header, { Heading } from './Header';

describe('Header component', () => {
  it('should render with h1 title', () => {
    const wrapper = mount(<Header title="Test title" />);
    const heading = wrapper.find(Heading);
    expect(heading).toHaveLength(1);
    expect(heading.text()).toEqual('Test title');
  });

  it('should render with default title without title prop', () => {
    const wrapper = mount(<Header />);
    const heading = wrapper.find(Header);
    expect(heading).toHaveLength(1);
    expect(heading.text()).toEqual('Placeholder title');
  });
});
