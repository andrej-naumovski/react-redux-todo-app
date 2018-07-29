// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string,
};

const Container = styled.div`
  background-color: #033777;
  color: #fff;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: 300;
`;

const Header = ({ title }: Props): React.Node => (
  <Container>
    <Heading>{title}</Heading>
  </Container>
);

Header.defaultProps = {
  title: 'Placeholder title',
};

export default Header;
