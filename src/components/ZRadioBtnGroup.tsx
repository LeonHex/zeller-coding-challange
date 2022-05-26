import {ChangeEvent} from 'react';
import {IZRadioBtnGroup} from '../types';
import '../styles/components/ZRadioBtnGroup.scss';

function ZRadioBtnGroup(props: IZRadioBtnGroup) {
  const {roles, onRoleChanged} = props;
  const handleRadioBtnChange = (evt: ChangeEvent) => {
    const targetElement = evt.target as HTMLInputElement;
    onRoleChanged(targetElement.value);
  };
  return (
    <div className='zeller-coding-challange-radio-btn-group'>
      <h1>User Types</h1>
      {roles.map((role: string) => {
        return (
          <div
            key={`role-${role}`}
            className='zeller-coding-challange-radio-btn'>
            <input
              type='radio'
              value={role}
              name='ZRoleGroup'
              onChange={handleRadioBtnChange}
            />
            {role}
          </div>
        );
      })}
    </div>
  );
}

export default ZRadioBtnGroup;
