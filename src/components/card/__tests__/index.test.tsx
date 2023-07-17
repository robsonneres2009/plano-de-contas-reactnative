import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Card from '..';

describe('Card', () => {
  it('Render component', () => {
    const tree = renderer
      .create(
        <Card key={1}>
          <Text>Card</Text>
        </Card>,
      )
      .toJSON();
    expect(tree?.children?.length).toBe(1);
  });

  it('Render component snapshot', () => {
    const tree = renderer
      .create(
        <Card key={1}>
          <Text>Card</Text>
        </Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
