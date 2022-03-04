import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('When we use the logo in the header or footer', () => {
  it('should be render Logo with alt = "logo Dreadful Tomato"', () => {
    render(<Logo className="test" />);
    const logo = screen.getByAltText('logo Dreadful Tomato');
    expect(logo).toBeInTheDocument();
  });
});
