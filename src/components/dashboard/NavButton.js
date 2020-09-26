import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/dashboard.scss';


function NavButton(props) {
  const {
     img, name,id, onClick,classname
  } = props;
  return (
     <button id={`button-${id}`}  className={classname} onClick={onClick}>
        {img}
        <div id={`button-${id}`} className="nav-btn-name">{name}</div>
     </button>
  );
}

export default NavButton;
