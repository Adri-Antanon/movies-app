import { render, screen, fireEvent } from '@testing-library/react';
import NavbarOption from '../NavbarOption';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Different options in the Navbar', () => {
  it('should be render simple option"', () => {
    render(<NavbarOption src="test" alt="test" title="this is a test" />);
    const text = screen.getByText('this is a test');
    expect(text).toBeInTheDocument();
  });
  it('should be render with the icon on th right"', () => {
    render(
      <NavbarOption src="test" alt="icon-right" hasRightIcon title="test" />,
    );
    const altText = screen.getByAltText('icon-right');
    expect(altText).toBeInTheDocument();
  });
  it('should be render a navigation option"', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <NavbarOption
          navigate="/series"
          src="test"
          alt="icon-right"
          hasRightIcon
          title="Navigate"
        />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Navigate'));
  });
});
