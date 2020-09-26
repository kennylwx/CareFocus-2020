import React, {useState, useEffect, useRef} from 'react';
import '../../styles/dashboard.scss';
import ResidentCard from './ResidentCard';
import { resident_list } from './helper';

function ResidentList({num}) {
  const [residentList, setResidentList] = useState([]);


  const getListOfResident = (num) => {
    let tempList = [];
    for(let i=0; i < num; i++){
      tempList.push(resident_list[i]);
    }
    return tempList;
  }

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      setResidentList(getListOfResident(num));

      mounted.current = true;
    } else {
      // do componentDidUpdate logic
    }
  });



  return (
    <div className="resident-list">
      {residentList.map(({name, id, img}) => {
        return <ResidentCard  name={name} extra={id} id={id} img={img}/>;
      })}
    </div>
  );
}

export default ResidentList;
