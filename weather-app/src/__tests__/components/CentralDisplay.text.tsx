import React from 'react';
import { render, screen } from '@testing-library/react';
import CentralDisplay from '../../components/dataDisplay/CentralDisplay';

const testLocation = "testLocation"
const testTemp = "testTemperature"
const testTopText = "testTopText"

test('renders all text', () => {
  render(<CentralDisplay location={testLocation} temperature={testTemp} topText={testTopText}/>);
  const linkElement = screen.getByText(/testLocation/i);
  expect(linkElement).toBeInTheDocument();
});

