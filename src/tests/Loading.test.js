import { render } from '@testing-library/react';
import Loading from '../components/Loading';

describe('Validation for Loading', () => {
  test('div Loading should be present in the docuemnt', () => {
    const { container } = render(<Loading />);

    // div Loading having class loading
    const divElement = container.querySelector('.loading');

    // Assert
    expect(divElement).toBeInTheDocument();
  });

  test('p should have Downloading... text', () => {
    const { container } = render(<Loading />);

    // p inside div
    const pElement = container.querySelector('.loading p');
    expect(pElement).toHaveTextContent('Downloading...');
  });
});
