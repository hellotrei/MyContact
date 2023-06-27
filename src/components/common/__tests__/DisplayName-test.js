import React from 'react';
import renderer from 'react-test-renderer';
import DisplayName from '../DisplayName';

test('renders correctly ', () => {
  const tree = renderer.create(<DisplayName firstName={'John'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
