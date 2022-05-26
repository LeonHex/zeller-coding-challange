import {ICustomer} from '../types';
import '../styles/components/ZCustomer.scss';

function ZCustomer(props: ICustomer) {
  const {name, role} = props;
  const capitalLetter = name.substring(0, 1);
  return (
    <div className='zeller-coding-challange-customer'>
      <div className='zeller-coding-challange-customer-lozenge'>
        <div>{capitalLetter}</div>
      </div>
      <div className='zeller-coding-challange-customer-info'>
        <div className='zeller-coding-challange-customer-name'>
          <h2>{name}</h2>
        </div>
        <div className='zeller-coding-challange-customer-role'>{role}</div>
      </div>
    </div>
  );
}

export default ZCustomer;
