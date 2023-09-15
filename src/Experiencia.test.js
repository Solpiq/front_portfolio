import React from 'react';
import { render } from '@testing-library/react';
import Experiencia  from './components/Experiencia';

test('FrontData component renders without errors', () => {
  render(<Experiencia />);
  // Si la prueba llega hasta este punto sin lanzar ningún error, se considera exitosa.
});