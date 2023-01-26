import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const ColorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(ColorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(ColorButton);
  expect(ColorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(ColorButton).toHaveTextContent('Change to red');
});
