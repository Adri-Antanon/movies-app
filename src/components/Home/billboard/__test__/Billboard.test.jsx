import { render, screen, fireEvent } from '@testing-library/react';
import Billboard from '../Billboard';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Render Billboard component', () => {
  it('should display two elements', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Billboard />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Movies'));
    fireEvent.click(screen.getByText('Series'));
  });
});
