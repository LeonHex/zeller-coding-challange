import React, {memo, useEffect, useState} from 'react';
import _ from 'lodash';
import '../styles/pages/ZCustomersPage.scss';
import ZRadioBtnGroup from '../components/ZRadioBtnGroup';
import ZCustomersList from '../components/ZCustomersList';
import {ICustomers} from '../types';
import {fetchCustomers} from '../api/api';

function ZCustomersPage() {
  const [customers, setCustomers] = useState<ICustomers>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    fetchCustomers()
      .then((res) => {
        const {data} = res;
        if (data) {
          try {
            const customersArr = data.listZellerCustomers.items;
            setCustomers(customersArr);
            setRoles(_.uniq(customersArr.map((cu) => cu.role)));
          } catch (err) {
            //TODO add error handling later
            if (typeof err === 'string') {
              console.log(err);
            } else if (err instanceof Error) {
              console.log(err.message);
            }
          }
        }
      })
      .catch((err) => {
        //TODO add error handling later
        console.log(`[ERR]${err.toString()}`);
      });
  }, []);

  return (
    <div className='zeller-coding-challange-main'>
      <div className='zeller-coding-challange-pane'>
        <ZRadioBtnGroup roles={roles} onRoleChanged={setRole} />
        <ZCustomersList customers={customers} role={role} />
      </div>
    </div>
  );
}

export default memo(ZCustomersPage, () => {
  return true;
});
