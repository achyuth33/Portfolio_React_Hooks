import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I'm Achyuth Munagala</p>
          <p>FrontEnd developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>

        <a
        href="https://drive.google.com/drive/u/0/my-drive"
        target="_blank"
      >
        <button1>Resume</button1>
      </a>




      </div>
      <div className="person">
        <img
          src="https://res.cloudinary.com/des7uyibo/image/upload/v1657274681/ar_tcrfil.jpg"
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
