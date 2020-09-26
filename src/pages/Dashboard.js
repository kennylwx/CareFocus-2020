import React, {useEffect, useState} from 'react';
import '../styles/dashboard.scss';
import {NavLink} from 'react-router-dom';
import NavButton from '../components/dashboard/NavButton';
import {ReactComponent as ExitIcon} from '../assets/icons/exit.svg';
import {ReactComponent as PlusIcon} from '../assets/icons/plus.svg';
import {ReactComponent as SettingsIcon} from '../assets/icons/settings.svg';
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import {ReactComponent as Logo} from '../assets/icons/logo.svg';

import Searchbar from '../components/dashboard/Searchbar';
import ResidentList from '../components/dashboard/ResidentList';
import MessageBox from '../components/dashboard/MessageBox';
import RegularButton from '../components/dashboard/RegularButton';
import ResidentProfile from '../components/dashboard/ResidentProfile';
import CheckupList from '../components/dashboard/CheckupList';

const HOME = 0;
const SETTINGS = 1;
const LOGOUT = 2;
const LEFT = 'left';
const RIGHT = 'right';

function Dashboard() {
  const [currentStage, setCurrentStage] = useState(HOME);
  const [currentProfile, setCurrentProfile] = useState(1);
  const [leftCollapse, setLeftCollapse] = useState(false);
  const [rightCollapse, setRightCollapse] = useState(false);

  const onLeftPanelClick = (e) => {
    switch(e.target.id){
      case `button-${HOME}`: 
        setCurrentStage(HOME);
        break;
      case `button-${SETTINGS}`:
        setCurrentStage(SETTINGS);
        break;
      case `button-${LOGOUT}`:
        setCurrentStage(LOGOUT);
        break;
      default:
        break;
    } 
  }

  const onCollapse = (e) => {

    console.log(e.target.id);

    switch(e.target.id){
      case `collapse-${LEFT}`: 
        setLeftCollapse(true);        
        break;
      case `collapse-${RIGHT}`:
        setRightCollapse(true);
        break;
      default:
        break;
    } 

    // console.log(leftCollapse);
    console.log(rightCollapse);


  }

  const onExpand = (e) => {

    console.log(e.target.id);

    switch(e.target.id){
      case `expand-${LEFT}`: 
        setLeftCollapse(false);        
        break;
      case `expand-${RIGHT}`:
        setRightCollapse(false);
        break;
      default:
        break;
    } 

    console.log(leftCollapse);

 
  }

  const onCheckup = (e) => {

    console.log(e.target.id);


  }

  function closeNav() {
    document.getElementById("right").style.width = "0";
    document.getElementById("mid").style.marginRight= "0";
  }
  const onCollapseRight = (e) => {
    console.log(e.target.id);
    closeNav();
  }



  return (
    <div className="dashboard">
      <div id="left" className={leftCollapse ? "left collapse" : "left"}>
        <div className="topButtons">
          <div className="title">
            <Logo />
            <span className="green">Care</span><span className="dark-green">Focus</span>
          </div>
          <NavButton 
            img={<HomeIcon />} 
            name={"Home"} 
            onClick={onLeftPanelClick} 
            classname={currentStage === HOME ? "nav-btn active" : "nav-btn"} 
            id={HOME}/>
          <NavButton 
            img={<SettingsIcon />}
            name={"Settings"}
            onClick={onLeftPanelClick} 
            classname={currentStage === SETTINGS ? "nav-btn active" : "nav-btn"} 
            id={SETTINGS}/>
          <NavButton 
            img={<ExitIcon />}
            name={"Logout"}
            onClick={onLeftPanelClick} 
            classname={currentStage === LOGOUT ? "nav-btn active" : "nav-btn"} 
            id={LOGOUT}/>
        </div>
        <div className="belowButtons">
          {/* <button id="collapse-left" onClick={(e) => {onCollapse(e)}} className="collapseBtn">Collapse</button> */}
        </div> 
      </div>

      <div id="mid" className="mid">
        <div className="top-info">
          <div className="title">
            Dashboard
          </div>
          <div className="under-title">
            <Searchbar placeholder={"Search a resident"} />
            <RegularButton nav={"/home"} img={<PlusIcon />} name={"Add Resident"} />
          </div>
          <MessageBox num={7}/>
          <ResidentList num={6}/>
        </div>
        <div className="bottom-info">
          {/* <button id="expand-left" onClick={(e) => {onExpand(e)}} className="collapseBtn">Expand</button>
          <button id="expand-right" onClick={(e) => {onExpand(e)}} className="collapseBtn">Expand</button> */}
        </div>
      </div>

      <div id="right" className={rightCollapse ? "right collapse" : "right"}>

        <div className="top-info">
          <ResidentProfile />
          <NavLink to="/checkup" id="checkup-btn" onClick={(e) => {onCheckup(e)}} className="checkupBtn">Start Checkup</NavLink>


          <div className="right-body">
            <div className="right-body-title">Past Checkups</div>
            <CheckupList num={4} />
          </div>
        </div>
        <div className="bottom-info">
          <button id="collapse-right" onClick={(e) => {onCollapseRight(e)}} className="collapseBtn">Close</button>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
