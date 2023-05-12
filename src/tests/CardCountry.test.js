import { render } from '@testing-library/react';
import Card from '../components/CardCountry';

describe('Validation for Cardcountry', () => {
  test('Inside Card, 2-div should be present', () => {
    // render the Card component with props
    const capital = 'Kabul';
    const name = 'Afghanistan';

    const { container } = render(
      <Card name={name} capital={capital} />,
    );

    // first div having class countryPic-wrapper
    const imgWrapper = container.querySelector('.countryPic-wrapper');

    // second div having class country-capital
    const infoWrapper = container.querySelector('.country-capital');

    // Assertion: bot should be in the docuemnt
    expect(imgWrapper).toBeInTheDocument();
    expect(infoWrapper).toBeInTheDocument();
  });
});

describe('Validatin for props content and image', () => {
  test('h3 should have Afghaninstan and p should have Kabul', () => {
    // render the Card component with props
    const capital = 'Kabul';
    const name = 'Afghanistan';
    const { container } = render(
      <Card name={name} capital={capital} />,
    );
    // image having class countryPic
    const imgElement = container.querySelector('.countryPic');

    // h3 and p inside div having class country-capital
    const h3Element = container.querySelector('.country-capital  h3');
    const pElement = container.querySelector('.country-capital p');

    // Assertion
    expect(imgElement).toBeInTheDocument();
    expect(h3Element).toHaveTextContent('Afghanistan');
    expect(pElement).toHaveTextContent('Kabul');
  });
});
