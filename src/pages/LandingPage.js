import React from 'react';
import '../styles/landing.scss';
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import {ReactComponent as Background} from '../assets/icons/wheelchair.svg';
import {ReactComponent as Kid} from '../assets/icons/people_kid.svg';
import {ReactComponent as Old} from '../assets/icons/people_old.svg';
import {ReactComponent as Blind} from '../assets/icons/people_blind.svg';
import Kenny from '../assets/images/kenny.png';
import Callista from '../assets/images/callista.png';
import Evelyn from '../assets/images/evelyn.png';
import Glenn from '../assets/images/glenn.png';
import Grace from '../assets/images/grace.png';
import Livya from '../assets/images/livya.png';


function LandingPage() {
  const people = [
    {
      name: 'Kenny Lee',
      role: 'Developer',
      img: Kenny,
    },
    {
      name: 'Livya Natasha',
      role: 'Developer',
      img: Livya,
    },
    {
      name: 'Grace Jackel',
      role: 'Researcher',
      img: Grace,
    },
    {
      name: 'Glenn Phillips',
      role: 'Developer',
      img: Glenn,
    },
    {
      name: 'Callista Low',
      role: 'UX/UI Designer',
      img: Callista,
    },
    {
      name: 'Evelyn Kiantoro',
      role: 'Researcher',
      img: Evelyn,
    }
  ]

  const values = [
    {
      title: 'Connection',
      desc: 'Keeping families updated about the wellbeing of their loved one',
      img: <Blind />,
    },
    {
      title: 'Transparency',
      desc: 'Honest and open reporting from carers',
      img: <Kid />,
    },
    {
      title: 'Connection',
      desc: 'Honest and open reporting from carers',
      img: <Old />,
    }
  ]

  const mission = "Throughout the COVID-19 crisis we’ve been shocked by stories of poor communication between aged care providers and worried families. Many families have been unable to visit or get timely updates on the health of their family member. ";
  const mission2 = "CareFocus is a personalised wellbeing report that updates families on how their loved one is doing on a weekly basis. Our mission is to provide peace of mind to families who may not be able to visit their loved one with high-care needs regularly.";


  return (
    <>
    <div className="rectangle green">
      <div className="background">
        <Background />
      </div>
      <div className="header">
        <Logo />
        <span className="green">Care</span><span className="dark-green">Focus</span>
      </div>
      <div className="headtext">Providing peace of mind.</div>
      <div className="register">
        <NavLink to="/login" className="button">Log In</NavLink>
        <NavLink to="/login" className="button">Sign Up</NavLink>
      </div>
    </div>

    <div className="rectangle white about-container">
      <div className="abouttext">About Us</div>
      <div className="title">Vision and Mission</div>
      <div className="content">{mission}</div>
      <div className="content">{mission2}</div>

      
      <div className="title">Values</div>
        <div className="values-container">
          {values.map(({title, desc, img}, index) => {
            return (
              <div className="values" id={`values-${index}`}>
                <div className="icon">{img}</div>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
              </div>
            );
          })}
        </div>
    </div>

    <div className="rectangle orange team-container">
      <div className="title">The Dream Team</div>
      <div className="people-container">

        {people.map(({name, role, img}, index) => {
          return (
            <div className="people" id={`people-${index}`}>
              <img className="icon" src={img} alt="profile"/>
              <div className="name">{name}</div> 
              <div className="role">{role}</div>
            </div>
          );
        })}    
      </div>
    </div>
  </>
  );
}

export default LandingPage;
