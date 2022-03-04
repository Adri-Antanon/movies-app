import { render, screen, fireEvent } from '@testing-library/react';
import Section from '../Section';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Render Section component', () => {
  it('should display the title, an image and if you click it will go to another page', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Section to="/movies" title="Movies" src="test" />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Movies'));

    const img = screen.getByAltText('Movies');
    expect(img).toBeInTheDocument();
  });
});
