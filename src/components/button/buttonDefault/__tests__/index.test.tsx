import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../..';

describe('Button.Default', () => {
  const mockFn = jest.fn();

  it('Render component primary', () => {
    const tree = renderer
      .create(<Button.Default title="Teste" onPress={mockFn} />)
      .toJSON();
    expect(tree?.children?.length).toBe(1);
  });

  it('Render component secundary', () => {
    const tree = renderer
      .create(<Button.Default title="Teste" onPress={mockFn} secundary />)
      .toJSON();
    expect(tree?.children?.length).toBe(1);
  });

  it('Render component', () => {
    render(<Button.Default title="Teste" onPress={mockFn} />);
    fireEvent.press(screen.getByText('Teste'));
    expect(mockFn).toHaveBeenCalled();
  });

  it('Render component button default', () => {
    const tree = renderer
      .create(<Button.Default title="Teste" onPress={mockFn} secundary />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
