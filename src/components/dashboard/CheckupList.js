import React, {useState, useEffect, useRef} from 'react';
import '../../styles/dashboard.scss';
import {checkup_list} from './helper';
import CheckupCard from './CheckupCard';

function CheckupList({num}) {
  const [checkups, setCheckups] = useState([]);
  
  const getCheckupList = (num) => {
    let temp = [];

    for(let i=0; i < num; i++){
      temp.push(checkup_list[i]);
    }

    return temp;
  }


  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      setCheckups(getCheckupList(num));

      mounted.current = true;
    } else {
      // do componentDidUpdate logic
    }
  });


  return (
    <div className="checkup-list">
      {checkups.map(({date, author, id, img}) => {
        return <CheckupCard key={id} img={img} date={date} author={author} />;
      })}
    </div>
  );
}

export default CheckupList;
