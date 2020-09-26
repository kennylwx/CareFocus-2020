import React, {useState} from 'react';
import '../../styles/dashboard.scss';
import placeholder from '../../assets/images/placeholder.jpg';
import RegularButton from './RegularButton';
import {resident_list} from './helper';
import CheckupList from './CheckupList';
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg';

function ResidentProfile() {
  const [resident, setResident] = useState(resident_list[0]);
  const img = 'https://source.unsplash.com/pwMds57bapI';

  return (
    <div className="resident-profile">
      <img className="profile-img" src={img} />
      <div className="profile-name">{resident.name}</div>
      <div className="profile-extra">{resident.id}</div>
    </div>
  )
}

export default ResidentProfile
