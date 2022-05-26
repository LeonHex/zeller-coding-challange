import {render} from '@testing-library/react';
import ZCustomersList from '../../components/ZCustomersList';
import {mock_customers_list_data} from '../pages/ZCustomersPage.test';
import {mock_roles_data} from './ZRadioBtnGroup.test';

const mock_customers_array =
  mock_customers_list_data.data.listZellerCustomers.items;

const mock_customer_item_classname = 'mock-customer-item';

test('renders the correct user list', () => {
  const {container} = render(
    <ZCustomersList
      customers={mock_customers_array}
      role={mock_roles_data[0]}
    />
  );
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer-list')
      .length
  ).toBe(1);
  expect(container.getElementsByTagName('h1')[0]).toHaveTextContent(
    `${mock_roles_data[0]} Users`
  );
  expect(
    container.getElementsByClassName('zeller-coding-challange-customer').length
  ).toBe(
    mock_customers_array.filter((cu) => cu.role === mock_roles_data[0]).length
  );
});
