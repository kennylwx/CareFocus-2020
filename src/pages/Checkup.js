import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/checkup.scss';
import { useHistory } from "react-router-dom";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


// images
import bed from '../images/bed.png';

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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
                  <img src={bed} alt="Bed Image"/>
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
