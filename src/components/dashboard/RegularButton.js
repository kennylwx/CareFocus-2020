import React from 'react';
import '../../styles/dashboard.scss';
import {NavLink} from 'react-router-dom';


function RegularButton(props) {
  const {
    img, name,
  } = props;
  return (
     <button className="reg-btn">
        {img}
        <div className="reg-btn-name">{name}</div>
     </button>
  );
}
export default RegularButton;
