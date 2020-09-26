import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/checkup.scss';
import { useHistory } from "react-router-dom";

// images
import bed from '../images/bed.png';



function Checkup() {

  // load name from tokens?
  // sessionStorage

  // parameters
  // const [lastName, setLastName] = useState("");

  // additional
  let history = useHistory();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  async function onSubmit() {
    history.push("")
    alert("Sent check up to friends and family.")
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

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

  return (
    <div className="page-container">
      <h1>Bob's Checkup</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkup-container">

          <div className="checkup-item">
            <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
            <button className="image-btn" onClick={() => imageUploader.current.click()}>
              <img className="image"
                ref={uploadedImage}
                style={{width: "100%", height: "100%"}}
                alt="Photo of the week"
                onError="this.style.display='none'"
              />
            </button>
          </div>

          <div className="checkup-item">
            <h2>Highlight of the week</h2>
            <input
              type="text"
            />
          </div>

          <div className="checkup-item">
            <h2>Activities</h2>
            <input
              type="text"
            />
          </div>

          <div className="checkup-item">
            <h2>Eating Well</h2>
            <div className="response-container">
              <label className="response-item">
                <input
                  type="radio"
                  name="eat"
                  value="eatingWell"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
              <label className="response-item">
                <input
                  type="radio"
                  name="eat"
                  value="eatingPoorly"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
            </div>
          </div>

          <div className="checkup-item">
            <h2>Sleeping Well</h2>
            <div className="response-container">
              <label className="response-item">
                <input
                  type="radio"
                  name="sleep"
                  value="sleepingWell"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
              <label className="response-item">
                <input
                  type="radio"
                  name="sleep"
                  value="sleepingPoorly"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
            </div>
          </div>

          {/* Physical Health */}
          <div className="checkup-item">
            <h2>Physically Health</h2>

            <div className="response-container">
              <label className="response-item">
                <input
                  type="radio"
                  name="physicalHealth"
                  value="healthy"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
              <label className="response-item">
                <input
                  type="radio"
                  name="physicalHealth"
                  value="sick"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
            </div>
          </div>

          {/* Mood */}
          <div className="checkup-item">
            <h2>Mood</h2>
            <div className="response-container">
              <label className="response-item">
                <input
                  type="radio"
                  name="mood"
                  value="positive"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
              <label className="response-item">
                <input
                  type="radio"
                  name="mood"
                  value="average"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
              <label className="response-item">
                <input
                  type="radio"
                  name="mood"
                  value="negative"
                />
                <img src={bed} alt="Bed Image"/>
              </label>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <button className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Checkup;
