import React from 'react';
import '../../styles/dashboard.scss';
import placeholder from '../../assets/images/placeholder.jpg';

function ResidentCard({img, name, extra, id}) {

  const ID= 0;


  // document.getElementById(`right`).style.width = "250px";
  function openNav() {
    document.getElementById("right").style.width = "350px";
    document.getElementById("mid").style.marginRight = "350px";
  }
  

  const onClick = (e) => {
    console.log(e.target.id);
    openNav();

  }

  

  return (
    <button id={`resident-${id}`} className="resident-card" onClick={(e) => {onClick(e)}}>
      <img className="resident-img" src={img} />
      <div className="resident-info">
        <div className="resident-name">
          {name}
        </div>
        <div className="resident-extra">
          {extra}
        </div>
      </div>
    </button>
  )
}

export default ResidentCard
