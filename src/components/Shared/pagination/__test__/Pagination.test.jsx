import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Pagination from '../Pagination';

describe('Render Pagination component', () => {
  it('should move to the next & previous page, also if you click in the numbers', () => {
    const history = createMemoryHistory();
    const films = new Array(100);
    render(
      <BrowserRouter history={history}>
        <Pagination
          films={films}
          filmsLimit={10}
          pageLimit={20}
          title={'Test'}
        />
      </BrowserRouter>,
    );

    const text = screen.getByText('Test');
    expect(text).toBeInTheDocument();

    fireEvent.click(screen.getByText('2'));

    fireEvent.click(screen.getByTitle('previous-page'));
    fireEvent.click(screen.getByTitle('next-page'));

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/4/i), leftClick);
  });
});
