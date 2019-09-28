import React from 'react';
import renderer from 'react-test-renderer';

import Todo from '../Todo';

it(`renders correctly`, () => {
  const tree = renderer.create(<Todo />).toJSON();

  expect(tree).toMatchSnapshot();
});
