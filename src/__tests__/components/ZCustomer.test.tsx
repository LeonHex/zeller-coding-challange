import {render} from '@testing-library/react';
import ZCustomer from '../../components/ZCustomer';

const mock_customers_data = {
  email: 'lynn@gmail.com',
  id: 'f47813cf-0482-4326-afc9-12f53218ed06',
  name: 'Lynn Warr',
  role: 'MANAGER'
};

test('renders the correct user infomation', () => {
  const {container} = render(<ZCustomer {...mock_customers_data} />);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer').length
  ).toBe(1);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-lozenge')
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-info')
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-name')
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-role')
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName(
      'zeller-coding-challange-customer-lozenge'
    )[0]
  ).toHaveTextContent(mock_customers_data.name.substring(0, 1));
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-name')[0]
  ).toHaveTextContent(mock_customers_data.name);
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-role')[0]
  ).toHaveTextContent(mock_customers_data.role);
});
