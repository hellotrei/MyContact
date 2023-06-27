import React from 'react';

import {render} from '@testing-library/react-native';
import ContactInfo from '../ContactInfo';

test('renders correctly', () => {
  const tree = render(<ContactInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly only age', () => {
  const tree = render(<ContactInfo age={'23'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly only lastName', () => {
  const tree = render(<ContactInfo lastName={'Doe'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly only firstname', () => {
  const tree = render(<ContactInfo firstName={'John'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with full props', () => {
  const tree = render(
    <ContactInfo firstName={'John'} lastName={'Doe'} age={23} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
