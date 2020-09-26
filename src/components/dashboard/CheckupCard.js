import React from 'react';
import another from '../../assets/images/another.jpg';


function CheckupCard({key, date, author, img}) {

  // const imgSrc = 'https://source.unsplash.com/1600x900/?elderly,oldpeople';

  return (
    <div id={`checkup-${key}`} className="checkup-card">
      <img className="checkup-img" src={img}/>
      <div className="checkup-info">
        <div className="checkup-date">{date}</div>
        <div className="checkup-author">{author}</div>
      </div>
    </div>
  );
}

export default CheckupCard;
