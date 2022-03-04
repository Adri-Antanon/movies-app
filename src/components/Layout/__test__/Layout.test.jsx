import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Layout from '../Layout';
import HomePage from '../../../pages/HomePage';
import MoviesPage from '../../../pages/MoviesPage';
import NotFound from '../../../pages/NotFound';
import TVSeriesPage from '../../../pages/TVSeriesPage';

describe('Render Layout wrapper', () => {
  it('should display children', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Layout>
          <h1>Test</h1>
        </Layout>
      </BrowserRouter>,
    );

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
  it('should display filters, movies and series options', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Layout>
          <HomePage />
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByText(/series/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/series/i), leftClick);
  });
  it('should render Movies page', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Layout>
          <MoviesPage />
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByText(/popular movies/i)).toBeInTheDocument();
  });

  it('should render Series page', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Layout>
          <TVSeriesPage />
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByText(/popular series/i)).toBeInTheDocument();
  });

  it('should try to render an unexpected url', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Layout>
          <NotFound />
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
