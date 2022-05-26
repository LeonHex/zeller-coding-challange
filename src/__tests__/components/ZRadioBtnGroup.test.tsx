import {fireEvent, render} from '@testing-library/react';
import ZRadioBtnGroup from '../../components/ZRadioBtnGroup';

export const mock_roles_data = ['MANAGER', 'ADMIN'];

const mock_role_change_handler = jest.fn();

test('renders the correct user role radio buttons', () => {
  const {container} = render(
    <ZRadioBtnGroup
      roles={mock_roles_data}
      onRoleChanged={mock_role_change_handler}
    />
  );
  expect(
    container.getElementsByClassName('zeller-coding-challange-radio-btn-group')
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName('zeller-coding-challange-radio-btn').length
  ).toBe(mock_roles_data.length);
  expect(
    container.getElementsByClassName('zeller-coding-challange-radio-btn')[0]
  ).toHaveTextContent(mock_roles_data[0]);
});

test('correctly pop up value change event', () => {
  const {container} = render(
    <ZRadioBtnGroup
      roles={mock_roles_data}
      onRoleChanged={mock_role_change_handler}
    />
  );
  fireEvent(
    container
      .getElementsByClassName('zeller-coding-challange-radio-btn')[0]
      .getElementsByTagName('input')[0],
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );
  expect(mock_role_change_handler).toBeCalledTimes(1);
  expect(mock_role_change_handler).toBeCalledWith(mock_roles_data[0]);
});
