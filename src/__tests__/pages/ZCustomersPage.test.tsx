import {render, waitFor} from '@testing-library/react';
import ZCustomersPage from '../../pages/ZCustomersPage';
import {fetchCustomers} from '../../api/api';

export const mock_customers_list_data = {
  data: {
    listZellerCustomers: {
      items: [
        {
          email: 'lynn@gmail.com',
          id: 'f47813cf-0482-4326-afc9-12f53218ed06',
          name: 'Lynn Warr',
          role: 'MANAGER'
        },
        {
          email: 'david@gmail.com',
          id: '73bae2af-4fa4-4023-8829-1034604e7590',
          name: 'David Miller',
          role: 'ADMIN'
        },
        {
          email: 'ryan@gmail.com',
          id: '0c90ecd4-d159-4335-9377-f29ee6829847',
          name: 'Ryan Muller',
          role: 'ADMIN'
        },
        {
          email: 'joe@gmail.com',
          id: 'edc033b9-ba6c-4857-9ff9-85c52ad39ef9',
          name: 'Joe Perera',
          role: 'MANAGER'
        },
        {
          email: 'cris@gmail.com',
          id: '24d34832-7c10-4c91-a582-32a0222125c0',
          name: 'Chris Miller',
          role: 'ADMIN'
        }
      ]
    }
  }
};

const mock_wrong_customers_list_data = {data: {}};

jest.mock('../../api/api.ts');

test('renders the main div', async () => {
  fetchCustomers.mockResolvedValue(mock_customers_list_data);
  const {container} = render(<ZCustomersPage />);
  await waitFor(() => {
    const mainDiv = container.getElementsByClassName(
      'zeller-coding-challange-main'
    );
    expect(mainDiv.length).toBe(1);
  });
});

test('correctly handle api data error', async () => {
  fetchCustomers.mockResolvedValue(mock_wrong_customers_list_data);
  const {container} = render(<ZCustomersPage />);
  await waitFor(() => {
    const mainDiv = container.getElementsByClassName(
      'zeller-coding-challange-main'
    );
    expect(mainDiv.length).toBe(1);
  });
});

test('correctly handle api error', async () => {
  fetchCustomers.mockRejectedValue('[ERR]mock error');
  const {container} = render(<ZCustomersPage />);
  await waitFor(() => {
    const mainDiv = container.getElementsByClassName(
      'zeller-coding-challange-main'
    );
    expect(mainDiv.length).toBe(1);
  });
});
