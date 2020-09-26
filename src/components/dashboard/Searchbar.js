import React from 'react';
import '../../styles/dashboard.scss';

function Searchbar({placeholder}) {
  return (
    < >
      <input className="searchbar" type="text" placeholder={placeholder} />
    </>
  )
}

export default Searchbar
