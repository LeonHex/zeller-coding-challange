import {ICustomer, IZCustomersList} from '../types';
import ZCustomer from './ZCustomer';
import '../styles/components/ZCustomersList.scss';

function ZCustomersList(props: IZCustomersList) {
  const {customers, role} = props;
  return (
    <div className='zeller-coding-challange-customer-list'>
      <h1>{`${role} Users`}</h1>
      {customers
        .filter((cu) => cu.role === role)
        .map((cus: ICustomer) => (
          <ZCustomer key={`zcustomer=${cus.id}`} {...cus} />
        ))}
    </div>
  );
}

export default ZCustomersList;
