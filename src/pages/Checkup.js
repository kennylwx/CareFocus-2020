import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/checkup.scss';
import { useHistory } from "react-router-dom";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


// images
import anxious from '../assets/images/anxious.png';
import regular from '../assets/images/regular.png';
import bingo from '../assets/images/bingo.png';
import sedentary from '../assets/images/sedentary.png';
import depressed from '../assets/images/depressed.png';
import moderate from '../assets/images/moderate.png';
import happy from '../assets/images/happy.png';
import healthy from '../assets/images/healthy.png';
import lawnBowls from '../assets/images/lawnBowls.png';
import sore from '../assets/images/sore.png';
import someMeals from '../assets/images/someMeals.png';
import noAppetite from '../assets/images/noAppetite.png';
import allMeals from '../assets/images/allMeals.png';
import social from '../assets/images/social.png';
import average from '../assets/images/average.png';
import active from '../assets/images/active.png';
import overSleeping from '../assets/images/overSleeping.png';
import underSleeping from '../assets/images/underSleeping.png';
import walking from '../assets/images/walking.png';
import stretching from '../assets/images/stretching.png';
import bed from '../assets/images/bed.png';

// for snackbar alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// exported function
function Checkup() {
  // additional
  let history = useHistory();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  // for snackbar alert
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    history.push("/dashboard")
  };

  // To handle submit
  async function onSubmit() {
    handleClick()
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  // To handle image upload
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // To render
  return (
    <div className="page-container">
      <h1>Nana Borami's Checkup</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkup-container">

          <div className="checkup-item">
            <h2>Photo of the week</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
            <button className="image-btn" onClick={() => imageUploader.current.click()}>
              <img className="image"
                ref={uploadedImage}
                style={{width: "100%", height: "100%"}}
                alt="Add Photo"
                onError="this.style.display='none'"
              />
            </button>
          </div>

          <div className="checkup-item">
            <h2>Highlight of the week</h2>
            <textarea
              rows="12"
              cols="25"

            />
          </div>

          <div className="checkup-item">
            <h2>Activities</h2>
            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="checkbox"
                    name="activity"
                    value="stretching"
                  />
                  <img src={stretching} alt="stretching"/>
                </label>
                <p>
                  Stretching
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="checkbox"
                    name="activity"
                    value="walking"
                  />
                  <img src={walking} alt="walking"/>
                </label>
                <p>
                  Walking
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="checkbox"
                    name="activity"
                    value="bingo"
                  />
                  <img src={bingo} alt="bingo"/>
                </label>
                <p>
                  Bingo
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="checkbox"
                    name="activity"
                    value="lawnBowls"
                  />
                  <img src={lawnBowls} alt="lawnBowls"/>
                </label>
                <p>
                  Lawn Bowls
                </p>
              </div>

            </div>
          </div>

          {/*Diet*/}
          <div className="checkup-item">
            <h2>Diet</h2>
            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="diet"
                    value="allMeals"
                  />
                  <img src={allMeals} alt="allMeals"/>
                </label>
                <p>
                  All Meals
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="diet"
                    value="someMeals"
                  />
                  <img src={someMeals} alt="someMeals"/>
                </label>
                <p>
                  Some Meals
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="diet"
                    value="noAppetite"
                  />
                  <img src={noAppetite} alt="noAppetite"/>
                </label>
                <p>
                  No Appetite
                </p>
              </div>
            </div>
          </div>

          {/*Sleep*/}
          <div className="checkup-item">
            <h2>Sleep</h2>
            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="sleep"
                    value="overSleeping"
                  />
                  <img src={overSleeping} alt="overSleeping"/>
                </label>
                <p>
                  Over Sleeping
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="sleep"
                    value="underSleeping"
                  />
                  <img src={underSleeping} alt="underSleeping"/>
                </label>
                <p>
                  Under Sleeping
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="sleep"
                    value="regular"
                  />
                  <img src={regular} alt="regular"/>
                </label>
                <p>
                  Regular
                </p>
              </div>
            </div>
          </div>

          {/* Physical Health */}
          <div className="checkup-item">
            <h2>Exercise</h2>

            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="exercise"
                    value="active"
                  />
                  <img src={active} alt="active"/>
                </label>
                <p>
                  Active
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="exercise"
                    value="moderate"
                  />
                  <img src={moderate} alt="moderate"/>
                </label>
                <p>
                  Moderate
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="exercise"
                    value="sedentary"
                  />
                  <img src={sedentary} alt="sedentary"/>
                </label>
                <p>
                  Sedentary
                </p>
              </div>
            </div>
          </div>

          {/* Physical Health */}
          <div className="checkup-item">
            <h2>Physical Health</h2>

            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="physicalHealth"
                    value="sore"
                  />
                  <img src={sore} alt="sore"/>
                </label>
                <p>
                  Sore
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="physicalHealth"
                    value="average"
                  />
                  <img src={average} alt="average"/>
                </label>
                <p>
                  Average
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="physicalHealth"
                    value="healthy"
                  />
                  <img src={healthy} alt="healthy"/>
                </label>
                <p>
                  Healthy
                </p>
              </div>
            </div>
          </div>

          {/* Mental Health */}
          <div className="checkup-item">
            <h2>Mental Health</h2>
            <div className="response-container">
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="mentalHealth"
                    value="social"
                  />
                  <img src={social} alt="social"/>
                </label>
                <p>
                  Social
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="mentalHealth"
                    value="anxious"
                  />
                  <img src={anxious} alt="anxious"/>
                </label>
                <p>
                  Anxious
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="mentalHealth"
                    value="depressed"
                  />
                  <img src={depressed} alt="depressed"/>
                </label>
                <p>
                  Depressed
                </p>
              </div>
              <div className="response-item">
                <label>
                  <input
                    type="radio"
                    name="mentalHealth"
                    value="happy"
                  />
                  <img src={happy} alt="happy"/>
                </label>
                <p>
                  Happy
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <button className="submit-button" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {/* Snack Bar Popup*/}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" color="inherit">
          Check up completed. Report will be sent to friends and family!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Checkup;
