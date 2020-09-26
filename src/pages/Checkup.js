import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/checkup.scss';

const uploadedImage = React.useRef(null);
const imageUploader = React.useRef(null);

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

async function onSubmit() {
  history.push("")
}

function handleSubmit(event) {
  event.preventDefault();
}

function Checkup() {
  return (
    <div>
      <form className="checkup" onSubmit={handleSubmit}>
        <h1>Bob's Checkup</h1>
        <h2>Photo of the week</h2>
        <div className="img-container">

          <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>

          <button className="img" onClick={() => imageUploader.current.click()}>

            <img ref={uploadedImage} style={{width: "100%", height: "100%"}} alt="Photo of the week"/>
          </button>
        </div>
        <h2>Highlight of the week</h2>
        <input
          type="text"
        />
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Checkup;
